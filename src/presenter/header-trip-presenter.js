
import TripInfoView from '../view/trip-info-view.js';
import { render,RenderPosition } from '../framework/render.js';

export default class HeaderTripPresenter{

  headerTripComponent = new TripInfoView();
  constructor({headerContainer}){
    this.headerContainer = headerContainer;


  }

  init(){
    render(this.headerTripComponent, this.headerContainer, RenderPosition.AFTERBEGIN);
  }
}
