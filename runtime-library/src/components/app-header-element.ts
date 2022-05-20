import { html, LitElement } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { v4 } from '@advanced-rest-client/uuid-generator';

const UUIDV4 = v4();

/**
 * Header element.
 */
@customElement('app-header')
export class AppHeader extends LitElement {
  @state()
  private showAppSwitcher = false;

  @query(`#nav-app-switcher-${UUIDV4}`)
  navBarAppSwitcher!: HTMLElement;

  onClickOutside = (event: Event) => {
    if (typeof event.composedPath === 'function' && !event.composedPath().includes(this.navBarAppSwitcher)) {
      this.showAppSwitcher = false;
      document.documentElement.removeEventListener('click', this.onClickOutside);
    }
  };

  showHideAppSwitcher() {
    this.showAppSwitcher = !this.showAppSwitcher;
    if (this.showAppSwitcher) {
      setTimeout(() => document.documentElement.addEventListener('click', this.onClickOutside), 0);
    } else {
      document.documentElement.removeEventListener('click', this.onClickOutside);
    }
  }

  render() {
    console.log('Rendering app-header');
    return html`
      <link rel="stylesheet" href="http://localhost:8080/cdnassets/rup-styles.css" />
      <!-- To future investigation: spread attrs operator -> https://github.com/lit/lit/pull/1960 -->
      <header class="rup-global-header">
        <div>
          <slot name="logo"><!-- You may provide here a logo img wrapped by an anchor --></slot>
          <slot name="search-control"><!-- You may provide here your custom search bar --></slot>
          <slot name="app-menu"><!-- You may provide here your custom app menu --></slot>
          <!-- Header controls -->
          <div
            class="rup-global-header__controls"
            role="navigation"
            aria-label="The application's global header controls">
            <slot name="local-controls"><!-- You may provide here your local controls --></slot>
            <!-- Global controls -->
            <div class="rup-global-header__global-controls">
              <!-- TODO: review i18n -->
              <!-- Help icon -->
              <a
                href="https://www.copyright.com/rightfind-resource-center/?filter-product=rightfind-suite-gateway"
                target="_blank"
                title="Help"
                rel="noopener noreferrer"
                class="rup-global-header__global-controls-link">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="icon-help">
                  <path
                    class="primary"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4 12a8 8 0 1116 0 8 8 0 01-16 0zm8-10C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 8a1 1 0 111 1 1 1 0 00-1 1v1a1 1 0 102 0v-.17A3.001 3.001 0 109 10a1 1 0 102 0zm2 5.75a1 1 0 10-2 0V16a1 1 0 102 0v-.25z"></path>
                </svg>
              </a>
              <!-- App switcher -->
              <div class="rup-global-header__app-switcher">
                <button
                  class="rup-global-header__app-switcher-trigger"
                  aria-expanded="false"
                  id="rup-switcher-app"
                  title="App switcher"
                  type="button"
                  @click=${this.showHideAppSwitcher}>
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="icon-apps" role="img">
                    <path
                      class="primary"
                      d="M7 5a2 2 0 11-4 0 2 2 0 014 0zM21 5a2 2 0 11-4 0 2 2 0 014 0zM12 7a2 2 0 100-4 2 2 0 000 4zM7 12a2 2 0 11-4 0 2 2 0 014 0zM19 14a2 2 0 100-4 2 2 0 000 4zM14 12a2 2 0 11-4 0 2 2 0 014 0zM5 21a2 2 0 100-4 2 2 0 000 4zM21 19a2 2 0 11-4 0 2 2 0 014 0zM12 21a2 2 0 100-4 2 2 0 000 4z"></path>
                  </svg>
                </button>
                <nav
                  id="nav-app-switcher-${UUIDV4}"
                  class="rup-global-header__app-switcher-options ${this.showAppSwitcher ? '' : 'visuallyhidden'}"
                  aria-labelledby="rup-switcher-app"
                  aria-describedby="rup-gc-switcher-desc"
                  aria-label="CCC Applications">
                  <p class="rup-visually-hidden" id="rup-gc-switcher-desc">
                    This shows the CCC Applications that you have access to. They will open in a new Tab.
                  </p>
                  <div>
                    <span class="rup-global-header__app-switcher-options-label">APPS</span>
                    <ul>
                      <li>
                        <a
                          href="http://localhost:8080/ember"
                          title="Open Ember APP in a new tab"
                          rel="noopener noreferrer">
                          <img src="http://localhost:8080/cdnassets/ember.svg" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="http://localhost:8080/react"
                          title="Open React APP in a new tab"
                          rel="noopener noreferrer">
                          <img width="60" src="http://localhost:8080/cdnassets/react.png" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
            <slot name="user-menu"><!-- You may provide here your user menu --></slot>
          </div>
        </div>
      </header>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-header': AppHeader;
  }
}
console.log('Parsing app-header');
