import { html, css, LitElement } from 'lit-element';
import { PageViewElement } from './views/page-view-element'
import './views/view-home';
import './views/view-about'; 
import './views/view-contact';

export class InicioComponent extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
      }
      .page{
        display: none;
      }
      .page[active] {
        display: block;
      }
    `;
  }

  static get properties() {
    return {
     selected: {type: String}
    };
  }

  constructor() {
    super();
    this.selected = 'home';
  }


  render() {
    return html`
      <h1>Mi componente</h1>
      <nav>
        <a href="#" @click="${this.go}" name="home">Home</a>
        <a href="#" @click="${this.go}" name="about">About</a>
        <a href="#" @click="${this.go}" name="contact">Contact</a>
      </nav>
      <main>
        <view-home class="page" ?active=${this.selected == 'home'}></view-home>
        <view-about class="page" ?active=${this.selected == 'about'}></view-about>
        <view-contact class="page" ?active=${this.selected == 'contact'}></view-contact>
      </main>
    `;
  }

  goHome(e) {
    console.log(e);
    e.preventDefault();// no se dirige al href
    this.selected = 'home';
  }

  go(e) {
    // console.log(e.target.getAttribute('name'));
    e.preventDefault();
    let page = e.target.getAttribute('name');
    this.selected = page;
  }
}
