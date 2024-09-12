
import { render,replace,RenderPosition } from '../framework/render.js';
import { generateFilter } from '../mock/filter.js';
import ListView from '../view/list-view.js';
import SortingView from '../view/sorting-view.js';
import PointOfListView from '../view/point-of-list-view.js';
import EditingFormView from '../view/editing-form-view.js';
import NoPointView from '../view/no-point-view.js';
import FiltersView from '../view/filters-view.js';
/*отрисовка отфильтрованных компонентов не реализована,так как данный модуль этого не
предусматривает,отрисовка отфильтрованных компонентов предусмотрена в 7 модуле с помощью паттерна наблюдателя */
const tripControlsFilter = document.querySelector('.trip-controls__filters');
export default class ListPresenter {
  #listComponent = new ListView();
  #pointsModel = null;
  #listContainer = null;
  #filtersComponent = null;
  #pointList = [];
  constructor({ listContainer,pointsModel }) {
    this.#listContainer = listContainer;
    this.#pointsModel = pointsModel;
    this.filters = generateFilter(this.#pointsModel.points);
    this.#filtersComponent = new FiltersView({ filters: this.filters,});
  }

  init() {
    render(this.#filtersComponent,tripControlsFilter,RenderPosition.BEFOREEND);
    this.#pointList = [...this.#pointsModel.points];
    this.#renderList();
    //console.log(this.filters.find((item)=>item.type==='future').filteredPoints)
  }

  #addKeydownListener(replacePointToForm,escKeyDownHandler){
    replacePointToForm();
    document.addEventListener('keydown', escKeyDownHandler);
  }

  #addOnFormSubmit(replaceFormToPoint,escKeyDownHandler){
    replaceFormToPoint();
    document.removeEventListener('keydown', escKeyDownHandler);
  }

  #renderPoint(pointItem){
    const escKeyDownHandler = (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        replaceFormToPoint();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };

    const pointComponent = new PointOfListView({
      point: pointItem,
      offers:[...this.#pointsModel.getOffersById(pointItem.type,pointItem.offers)],
      destinations: this.#pointsModel.getDestinationsById(pointItem.destination),
      onEditClick: () => {
        this.#addKeydownListener(replacePointToForm,escKeyDownHandler);
      }
    });
    const pointEditComponent = new EditingFormView({
      point:pointItem,
      checkedOffers:[...this.#pointsModel.getOffersById(pointItem.type,pointItem.offers)],
      offers:[...this.#pointsModel.getOffersByType(pointItem.type)],
      destinations: this.#pointsModel.getDestinationsById(pointItem.destination),
      onFormSubmit: () => {
        this.#addOnFormSubmit(replaceFormToPoint,escKeyDownHandler);
      },
      onClickCloseEditForm:()=>{
        replaceFormToPoint();
      }
    });
    function replacePointToForm() {
      replace(pointEditComponent, pointComponent);
    }

    function replaceFormToPoint() {
      replace(pointComponent, pointEditComponent);
    }
    render(pointComponent,this.#listComponent.element);
  }

  #renderList(){
    render(new SortingView(), this.#listContainer);
    render(this.#listComponent, this.#listContainer);

    if (this.#pointList.length === 0){
      render(new NoPointView(),this.#listComponent.element);
      return;
    }
    for (let i = 0; i < this.#pointList.length; i++) {
      this.#renderPoint(this.#pointList[i]);
    }
  }
}
