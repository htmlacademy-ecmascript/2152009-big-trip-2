
import NewListView from '../view/list-view.js';
import NewSortingView from '../view/sorting-view.js';
import NewPointOfListView from '../view/point-of-list-view.js';
import NewEditingFormView from '../view/editing-form-view.js';
import { render } from '../render.js';

export default class ListPresenter {
  listComponent = new NewListView();
  constructor({ listContainer,pointsModel }) {
    this.listContainer = listContainer;
    this.pointsModel = pointsModel;
  }

  init() {
    render(new NewSortingView(), this.listContainer);
    render(this.listComponent, this.listContainer);
    this.pointList = [...this.pointsModel.getPoints()];
    render(new NewEditingFormView({
      point:this.pointList[0],
      checkedOffers:[...this.pointsModel.getOffersById(this.pointList[0].type,this.pointList[0].offers)],
      offers:[...this.pointsModel.getOffersByType(this.pointList[0].type)],
      destinations: this.pointsModel.getDestinationsById(this.pointList[0].destination)
    }), this.listComponent.getElement());

    for (let i = 0; i < this.pointList.length; i++) {
      render(new NewPointOfListView({
        point: this.pointList[i],
        offers:[...this.pointsModel.getOffersById(this.pointList[i].type,this.pointList[i].offers)],
        destinations: this.pointsModel.getDestinationsById(this.pointList[i].destination)
      }), this.listComponent.getElement());
    }

  }
}
