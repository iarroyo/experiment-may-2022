import Component from '@glimmer/component';
import { action } from '@ember/object';
import { cached } from '@glimmer/tracking';

const cartKey = 'cart';

export default class ModalDialog extends Component {
  @action
  openModal() {
    this.appDialog.showModal();
  }
  @action
  closeModal() {
    this.appDialog.close();
    this.args.onClose();
  }

  get cartData() {
    let retriveCartItems = localStorage.getItem(cartKey);
    return (retriveCartItems = JSON.parse(retriveCartItems));
  }

  @cached
  get appDialog() {
    return document.querySelector('app-dialog');
  }
}
