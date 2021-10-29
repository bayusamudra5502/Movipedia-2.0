import Component, { register } from "../lib/component";
import logo from "../assets/logo.png";

@register("header-app")
class Header extends Component {
  render() {
    this.innerHTML += `
    <header class="container">
      <a href="/">
        <img src="${logo}" alt="Logo" />
      </a>
      <a href="/">
        Movipemedia
      </a>
    </header>
    `;
  }
}

export default Header;
