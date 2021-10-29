import Component, { register } from "../lib/component";
import { getPopular, IRecord } from "../service/Api";
import Data from "./Data";

@register("popular-container")
export default class Popular extends Component {
  private data: IRecord[] = [];
  private loading: boolean = false;

  constructor() {
    super();

    this.loadData();
  }

  private async loadData() {
    this.loading = true;
    this.render();

    this.data = await getPopular();

    this.loading = false;

    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="container section-container">
        <h2>Popular Movie</h2>
        <div class="data">
        </div>
      </div>
    `;

    const dataContainer = this.querySelector(".data");

    const data = new Data();
    data.data = this.data;
    data.isLoading = this.loading;

    dataContainer.appendChild(data);
  }
}
