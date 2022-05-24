import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class IndexController extends Controller {
  @tracked TheComponent;
  @tracked error;
  @tracked running = false;

  loadComponent = async () => {
    this.running = true;
    this.error = null;

    try {
      let importedModule = await import(
        'dummy-ember-app/components/sample/index'
      );

      this.TheComponent = importedModule.default;
    } catch (e) {
      this.error = e;
    } finally {
      this.running = false;
    }
  };
}
