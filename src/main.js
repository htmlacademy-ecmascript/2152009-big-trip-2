import ListPresenter from './presenter/list-presenter.js';
import HeaderTripPresenter from './presenter/header-trip-presenter.js';

const headerTrip = document.querySelector('.trip-main');
const tripEvents = document.querySelector('.trip-events');

const headerTripPresenter = new HeaderTripPresenter({headerContainer:headerTrip});
const listPresenter = new ListPresenter({ listContainer: tripEvents });


headerTripPresenter.init();
listPresenter.init();
