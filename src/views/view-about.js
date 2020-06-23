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
class ViewAbout extends PageViewElement {
    static get properties() {
        return {

        }
    }

    /**
     * Instance of the element is created/upgraded. Use: initializing state,
     * set up event listeners, create shadow dom.
     * @constructor
     */
    constructor() {
        super();
    }

    static get styles() {
        return css`
            img{
                max-width: 100%;
                text-align: center;
                border-radius: 8px;
                margin: 20px;
            }
        `;
    }

    /**
     * Implement to describe the element's DOM using lit-html.
     * Use the element current props to return a lit-html template result
     * to render into the element.
     */
    render() {
        return html`
            <div>
                <h2>About</h2>
                <img src="https://picsum.photos/200/300" alt="image">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem laudantium modi alias doloribus beatae recusandae non nemo fugiat, numquam doloremque. Quibusdam officiis expedita non sit adipisci laboriosam officia quia magnam!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem laudantium modi alias doloribus beatae recusandae non nemo fugiat, numquam doloremque. Quibusdam officiis expedita non sit adipisci laboriosam officia quia magnam!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem laudantium modi alias doloribus beatae recusandae non nemo fugiat, numquam doloremque. Quibusdam officiis expedita non sit adipisci laboriosam officia quia magnam!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem laudantium modi alias doloribus beatae recusandae non nemo fugiat, numquam doloremque. Quibusdam officiis expedita non sit adipisci laboriosam officia quia magnam!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem laudantium modi alias doloribus beatae recusandae non nemo fugiat, numquam doloremque. Quibusdam officiis expedita non sit adipisci laboriosam officia quia magnam!</p>
            </div>
        `;
    }

}

customElements.define('view-about', ViewAbout);