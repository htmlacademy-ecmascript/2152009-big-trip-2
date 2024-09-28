import { render, replace,remove } from '../framework/render.js';
import { Mode } from '../const.js';
import PointOfListView from '../view/point-of-list-view.js';
import EditingFormView from '../view/editing-form-view.js';

export default class PointPresenter {
  #pointContainer = null;
  #pointsModel = null;
  #pointItem = null;
  #pointComponent = null;
  #pointEditComponent = null;
  #handleDataChange = null;
  #handleModeChange = null;
  #mode = Mode.DEFAULT;

  constructor({ pointContainer, pointsModel,onDataChange,onModeChange }) {
    this.#pointsModel = pointsModel;
    this.#pointContainer = pointContainer;
    this.#handleDataChange = onDataChange;
    this.#handleModeChange = onModeChange;
  }

  init(pointItem) {
    this.#pointItem = pointItem;

    const prevPointComponent = this.#pointComponent;
    const prevPointEditComponent = this.#pointEditComponent;

    this.#pointComponent = new PointOfListView({
      point: this.#pointItem,
      offers: [...this.#pointsModel.getOffersById(this.#pointItem.type, this.#pointItem.offers)],
      destinations: this.#pointsModel.getDestinationsById(this.#pointItem.destination),
      onEditClick: this.#replacePointToForm,
      onFavoriteClick: this.#handleFavoriteClick,
    });

    this.#pointEditComponent = new EditingFormView({
      point: this.#pointItem,
      checkedOffers: [...this.#pointsModel.getOffersById(this.#pointItem.type, this.#pointItem.offers)],
      offers: [...this.#pointsModel.getOffersByType(this.#pointItem.type)],
      destinations: this.#pointsModel.getDestinationsById(this.#pointItem.destination),
      onFormSubmit: this.#handleFormSubmit,
      onClickCloseEditForm: this.#replaceFormToPoint,
    });
    
    if(prevPointComponent === null || prevPointEditComponent === null){
      render(this.#pointComponent, this.#pointContainer);
      return;
    }
    if(this.#mode === Mode.DEFAULT){
      replace(this.#pointComponent,prevPointComponent);
    }
    if (this.#mode === Mode.EDITING) {
      replace(this.#pointEditComponent, prevPointEditComponent);
    }
    remove(prevPointComponent);
    remove(prevPointEditComponent);

  }

  destroy(){
    remove(this.#pointComponent);
    remove(this.#pointEditComponent);
  }

  resetView() {
    if (this.#mode !== Mode.DEFAULT) {
      this.#replaceFormToPoint();
    }
  }

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.#replaceFormToPoint();
    }
  };


  #handleFormSubmit = (point)=>{
    this.#handleDataChange(point);
    this.#replaceFormToPoint();
  };

  #replacePointToForm = () => {
    this.#handleModeChange();
    replace(this.#pointEditComponent, this.#pointComponent);
    document.addEventListener('keydown', this.#escKeyDownHandler);
    this.#mode = Mode.EDITING;

  };

  #replaceFormToPoint = () => {
    replace(this.#pointComponent, this.#pointEditComponent);
    document.removeEventListener('keydown', this.#escKeyDownHandler);
    this.#mode = Mode.DEFAULT;

  };

  #handleFavoriteClick = () => {
    this.#handleDataChange({...this.#pointItem, isFavorite: !this.#pointItem.isFavorite});

  };
}
