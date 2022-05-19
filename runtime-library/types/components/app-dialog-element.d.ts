import { LitElement } from 'lit';
/**
 * Dialog element.
 */
export declare class AppDialog extends LitElement {
    static styles: import("lit").CSSResult;
    isOpen: boolean;
    dialog: any;
    handleClick({ target: dialog }: {
        target: any;
    }): void;
    showModal(): void;
    close(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'app-dialog': AppDialog;
    }
}
