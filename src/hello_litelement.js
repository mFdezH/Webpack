import { LitElement, html} from 'lit-element';

export class HolaMundo extends LitElement {
  static get properties(){
	return {
		name: {type: String}
	}
  }

  render() {
    return html`<p>Hello ${this.name}!</p>`;
  }
}

customElements.define('hola-mundo', HolaMundo);