import { LitElement } from 'lit';
/**
 * Header element.
 */
export declare class AppHeader extends LitElement {
    private showAppSwitcher;
    showHideAppSwitcher(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'app-header': AppHeader;
    }
}
