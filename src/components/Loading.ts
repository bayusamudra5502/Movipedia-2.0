import Component, { register } from "../lib/component";
import loading from "@assets/loading.svg";

@register("loading-component")
export default class Loading extends Component {
  render() {
    this.innerHTML = `
      <div>      
        <div class="loading">
          <img src="${loading}" alt="Loading..">
          <p>Loading...</p>
        </div>
      </div>
    `;
  }
}
