import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked, cached } from '@glimmer/tracking';

export default class NavBar extends Component {
  @tracked
  isOpenCart = false;

  @action
  openCartModal() {
    this.isOpenCart = true;
  }

  @action
  onCloseCartModal() {
    this.isOpenCart = false;
  }

  @cached
  get appHeaderContainer() {
    return document.querySelector('app-header');
  }
}
