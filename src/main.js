import ListPresenter from './presenter/list-presenter.js';
import HeaderTripPresenter from './presenter/header-trip-presenter.js';
import PointsModel from './model/points-model.js';

const headerTrip = document.querySelector('.trip-main');
const tripEvents = document.querySelector('.trip-events');
const pointsModel = new PointsModel;
const headerTripPresenter = new HeaderTripPresenter({headerContainer:headerTrip});
const listPresenter = new ListPresenter({ listContainer: tripEvents,pointsModel });


headerTripPresenter.init();
listPresenter.init();
