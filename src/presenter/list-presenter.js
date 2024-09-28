import { render, RenderPosition } from '../framework/render.js';
import { generateFilter } from '../mock/filter.js';
import { updateItem } from '../utils/common.js';
import ListView from '../view/list-view.js';
import SortingView from '../view/sorting-view.js';
import NoPointView from '../view/no-point-view.js';
import FiltersView from '../view/filters-view.js';
import PointPresenter from './point-presenter.js';

const tripControlsFilter = document.querySelector('.trip-controls__filters');
export default class ListPresenter {
  #listComponent = new ListView();
  #sortingComponent = new SortingView();
  #noPointComponent = new NoPointView();
  #pointsModel = null;
  #listContainer = null;
  #filtersComponent = null;
  #pointList = [];
  #pointPresenters = new Map();

  constructor({ listContainer, pointsModel }) {
    this.#listContainer = listContainer;
    this.#pointsModel = pointsModel;
    this.filters = generateFilter(this.#pointsModel.points);
    this.#filtersComponent = new FiltersView({ filters: this.filters });
  }

  init() {
    this.#renderFilters();
    this.#pointList = [...this.#pointsModel.points];
    this.#renderList();
  }

  #renderFilters() {
    render(
      this.#filtersComponent,
      tripControlsFilter,
      RenderPosition.BEFOREEND
    );
  }

  #handlePointChange = (updatePoint) => {
    this.#pointList = updateItem(this.#pointList, updatePoint);
    this.#pointPresenters.get(updatePoint.id).init(updatePoint);
  };

  #handleModeChange = () => {
    this.#pointPresenters.forEach((presenter) => {
      presenter.resetView();
    });
  };

  #renderSortingComponent() {
    render(this.#sortingComponent, this.#listContainer);
  }

  #renderNoPointComponent() {
    render(this.#noPointComponent, this.#listComponent.element);
  }

  #renderPoint(point) {
    const pointPresenter = new PointPresenter({
      pointContainer: this.#listComponent.element,
      pointsModel: this.#pointsModel,
      onDataChange: this.#handlePointChange,
      onModeChange: this.#handleModeChange,
    });
    this.#pointPresenters.set(point.id, pointPresenter);
    pointPresenter.init(point);
  }

  #clearPointList() {
    this.#pointPresenters.forEach((presenter) => presenter.destroy());
    this.#pointPresenters.clear();
  }

  #renderList() {
    this.#renderSortingComponent();
    render(this.#listComponent, this.#listContainer);

    if (this.#pointList.length === 0) {
      this.#renderNoPointComponent();
      return;
    }
    for (let i = 0; i < this.#pointList.length; i++) {
      this.#renderPoint(this.#pointList[i]);
    }
  }
}
