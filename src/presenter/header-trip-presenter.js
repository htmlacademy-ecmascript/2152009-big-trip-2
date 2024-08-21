import { render,RenderPosition } from '../render.js';
import TripInfoView from '../view/trip-info-view.js';
import FiltersView from '../view/filters-view.js';
const tripControlsFilter = document.querySelector('.trip-controls__filters');

export default class HeaderTripPresenter{
  headerTripComponent = new TripInfoView();
  constructor({headerContainer}){
    this.headerContainer = headerContainer;
  }

  init(){
    render(this.headerTripComponent, this.headerContainer, RenderPosition.AFTERBEGIN);
    render(new FiltersView(),tripControlsFilter,RenderPosition.BEFOREEND);
  }
}
