import cinema from "../assets/cinema.jpg";
import Component, { register } from "../lib/component";

@register("jumbotron-app")
export default class Jumbotron extends Component {
  render() {
    this.innerHTML = `
      <div class="container jumbotron">
        <div class="layer"></div>
        <div class="content">        
          <h1>Cari dan Temukan</h1>
          <p>Film favoritmu di Movipemedia</p>
        </div>
      </div>
    `;

    this.innerHTML += `
    <style>
      .jumbotron {
        background-image: url("${cinema}");
      }
    </style>
    `;
  }
}
