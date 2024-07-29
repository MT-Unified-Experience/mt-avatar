import { LitElement, html, css } from 'https://unpkg.com/lit@2.3.0?module';

class AvatarComponent extends LitElement {
  static styles = css`
    :host {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .avatar {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
    }

    .initials {
      font-family: 'Poppins', sans-serif;
      font-size: 16px;
      color: white;
      background-color: gray;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `;

  static properties = {
    image: { type: String },
    initials: { type: String },
    label: { type: String }
  };

  constructor() {
    super();
    this.image = '';
    this.initials = '';
    this.label = '';
  }

  render() {
    return html`
      ${this.image ?
        html`<img class="avatar" src="${this.image}" alt="${this.label}">` :
        html`<div class="initials">${this.initials}</div>`
      }
    `;
  }
}

customElements.define('avatar-component', AvatarComponent);