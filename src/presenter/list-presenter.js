
import { render,replace } from '../framework/render.js';
import NewListView from '../view/list-view.js';
import NewSortingView from '../view/sorting-view.js';
import NewPointOfListView from '../view/point-of-list-view.js';
import NewEditingFormView from '../view/editing-form-view.js';

export default class ListPresenter {
  #listComponent = new NewListView();
  #pointsModel = null;
  #listContainer = null;

  #pointList = [];
  constructor({ listContainer,pointsModel }) {
    this.#listContainer = listContainer;
    this.#pointsModel = pointsModel;
  }

  init() {
    this.#pointList = [...this.#pointsModel.points];
    this.#renderList();
  }

  #renderPoint(pointItem){
    const escKeyDownHandler = (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        replaceFormToPoint();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };

    const pointComponent = new NewPointOfListView({
      point: pointItem,
      offers:[...this.#pointsModel.getOffersById(pointItem.type,pointItem.offers)],
      destinations: this.#pointsModel.getDestinationsById(pointItem.destination),
      onEditClick: () => {
        replacePointToForm();
        document.addEventListener('keydown', escKeyDownHandler);
      }
    });
    const pointEditComponent = new NewEditingFormView({
      point:pointItem,
      checkedOffers:[...this.#pointsModel.getOffersById(pointItem.type,pointItem.offers)],
      offers:[...this.#pointsModel.getOffersByType(pointItem.type)],
      destinations: this.#pointsModel.getDestinationsById(pointItem.destination),
      onFormSubmit: () => {
        replaceFormToPoint();
        document.removeEventListener('keydown', escKeyDownHandler);
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
    render(new NewSortingView(), this.#listContainer);
    render(this.#listComponent, this.#listContainer);

    for (let i = 0; i < this.#pointList.length; i++) {
      this.#renderPoint(this.#pointList[i]);
    }
  }
}
