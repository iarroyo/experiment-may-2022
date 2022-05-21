import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-square')
export class AppSquare extends LitElement {
  render() {
    return html`<link rel="stylesheet" href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css" />
      <div class="w-20 bg-red-500">
        <slot name="content"></slot>
      </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-square': AppSquare;
  }
}
