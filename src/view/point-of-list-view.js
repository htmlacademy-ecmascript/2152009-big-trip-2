import AbstractView from '../framework/view/abstract-view.js';
import {
  DATE_FORMAT,
  HOURS_FORMAT,
  getTimeDifference,
  getHumanizeTaskDueDate,
} from '../utils/point.js';
function createOfferOfPointTemplate(offers) {
  const { title, price } = offers;
  return `<li class="event__offer">
    <span class="event__offer-title">${title}</span>
    &plus;&euro;&nbsp;
    <span class="event__offer-price">${price}</span>
  </li>`;
}
function createPointOfListTemplate(point, offers, destinations) {
  const { basePrice, dateFrom, dateTo, isFavorite, type } = point;
  const { name } = destinations;

  return `<li class="trip-events__item">
    <div class="event">
      <time class="event__date" datetime=${dateFrom}>${getHumanizeTaskDueDate(
  dateFrom,
  DATE_FORMAT
)}</time>
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
      </div>
      <h3 class="event__title">${type} ${name}</h3>
      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime="${dateFrom}">${getHumanizeTaskDueDate(
  dateFrom,
  HOURS_FORMAT
)}</time>
          &mdash;
          <time class="event__end-time" datetime="${dateTo}">${getHumanizeTaskDueDate(
  dateTo,
  HOURS_FORMAT
)}</time>
        </p>
        <p class="event__duration">${getTimeDifference(dateFrom, dateTo)}</p>
      </div>
      <p class="event__price">
        &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
      </p>
      <h4 class="visually-hidden">Offers:</h4>
      <ul class="event__selected-offers">
  ${offers.map((offer) => createOfferOfPointTemplate(offer)).join(' ')}
      </ul>
  ${
  isFavorite
    ? '<button class="event__favorite-btn event__favorite-btn--active" type="button">'
    : '<button class="event__favorite-btn" type="button">'
}
        <span class="visually-hidden">Add to favorite</span>
        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
          <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
        </svg>
      </button>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </div>
  </li>`;
}
export default class PointOfListView extends AbstractView {
  #point = null;
  #offers = null;
  #destinations = null;
  #handleEditClick = null;

  constructor({ point, offers, destinations, onEditClick }) {
    super();
    this.#point = point;
    this.#offers = offers;
    this.#destinations = destinations;
    this.#handleEditClick = onEditClick;

    this.element
      .querySelector('.event__rollup-btn')
      .addEventListener('click', this.#editClickHandler);
  }

  get template() {
    return createPointOfListTemplate(
      this.#point,
      this.#offers,
      this.#destinations
    );
  }

  #editClickHandler = (evt) => {
    evt.preventDefault();
    this.#handleEditClick();
  };
}
