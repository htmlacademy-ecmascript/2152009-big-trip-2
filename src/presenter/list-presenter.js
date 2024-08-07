
import NewListView from '../view/list-view.js';
import NewSortingView from '../view/sorting-view.js';
import NewPointOfListView from '../view/point-of-list-view.js';
import NewEditingFormView from '../view/editing-form-view.js';
import { render } from '../render.js';

export default class ListPresenter {
  listComponent = new NewListView();
  constructor({ listContainer }) {
    this.listContainer = listContainer;
  }

  init() {
    render(new NewSortingView(), this.listContainer);
    render(this.listComponent, this.listContainer);
    render(new NewEditingFormView(), this.listComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new NewPointOfListView(), this.listComponent.getElement());
    }

  }
}
