import {LitElement, html, css} from 'lit-element';
import { PageViewElement } from './page-view-element';

/**
 * `LowerCaseDashedName` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class ViewHome extends PageViewElement {
    static get properties() {
        return {
            texto: {type: String}
        }
    }

    /**
     * Instance of the element is created/upgraded. Use: initializing state,
     * set up event listeners, create shadow dom.
     * @constructor
     */
    constructor() {
        super();
        this.texto = '';
    }

    static get styles() {
        return css``;
    }

    /**
     * Implement to describe the element's DOM using lit-html.
     * Use the element current props to return a lit-html template result
     * to render into the element.
     */
    render() {
        return html`
            <div>
                <h2>Home</h2>
                <input type="text" placeholder="Nombre" value="${this.texto}">
            </div>
        `;
    }

}

customElements.define('view-home', ViewHome);