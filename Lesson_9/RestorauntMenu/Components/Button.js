export default class Button {
  constructor({ text, isActive }) {
    this.text = text;
    this.isActive = isActive;
  }

  render() {
    return `
    <button class="btn ${this.isActive ? "active" : ""}">
      ${this.text}
    </button>`;
  }
}
