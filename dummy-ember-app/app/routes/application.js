import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
  async model() {
    if (/true/i.test(localStorage.getItem('EMULATE_SLOW_APP'))) {
      console.log('Emulating slow app rendering...');
      await this.timeout(3000);
    }
    console.log('Application route');
  }

  timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
