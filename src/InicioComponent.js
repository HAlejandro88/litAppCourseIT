import { html, css, LitElement } from 'lit-element';
import { PageViewElement } from './views/page-view-element';
import './views/view-home';
import './views/view-about'; 
import './views/view-contact';
import 'dile-tabs/dile-tabs';
import 'dile-tabs/dile-tab';
import 'dile-pages/dile-pages';

export class InicioComponent extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        --dile-tab-background-color: transparent;
        --dile-tab-selected-background-color: transparent;
        --dile-tab-selected-text-color: #102080;
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
    // this.selected = 'home';
  }


  render() {
    return html`
      <h1>Mi componente</h1>
      <!-- <nav>
        <a href="#" @click="${this.go}" name="home">Home</a>
        <a href="#" @click="${this.go}" name="about">About</a>
        <a href="#" @click="${this.go}" name="contact">Contact</a>
      </nav> -->
      <dile-tabs selected="${this.selected}" attrForSelected="name" @dile-tabs-selected-changed="${this.selectedChanged}">
        <dile-tab name="home">Home</dile-tab>
        <dile-tab name="about">About</dile-tab>
        <dile-tab name="contact">Contact</dile-tab>
      </dile-tabs>
      <dile-pages selected="${this.selected}" attrForSelected="name">
        <view-home name="home" ?active=${this.selected == 'home'}></view-home>
        <view-about name="about" ?active=${this.selected == 'about'}></view-about>
        <view-contact name="contact" ?active=${this.selected == 'contact'}></view-contact>
      </dile-pages>
    `;
  }

  selectedChanged(e) {
    console.log(e.detail);
    this.selected = e.detail;
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
