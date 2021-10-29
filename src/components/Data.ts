import { IRecord } from "../service/Api";
import Component, { register } from "../lib/component";
import MovieCard from "./MovieCard";
import NoData from "./NoData";
import Loading from "./Loading";

@register("data-container")
export default class Data extends Component {
  private _isLoading = false;
  private _popularData: IRecord[];

  set isLoading(state: boolean) {
    this._isLoading = state;
    this.render();
  }

  get isLoading() {
    return this._isLoading;
  }

  set data(data: IRecord[]) {
    this._popularData = data;
    this.render();
  }

  get data() {
    return this._popularData;
  }

  render() {
    this.innerHTML = `
    <div class="container search-result"></div>
  `;

    const container = this.querySelector(".container");

    if (!this._isLoading) {
      if (this._popularData.length > 0) {
        const cardContainer = document.createElement("div");
        cardContainer.classList.add("card-columns");

        this._popularData.forEach((record) => {
          const outerContainer = document.createElement("div");
          outerContainer.classList.add("card");

          const card = new MovieCard();
          card.record = record;

          outerContainer.appendChild(card);

          cardContainer.appendChild(outerContainer);
        });

        container.appendChild(cardContainer);
      } else {
        container.appendChild(new NoData());
      }
    } else {
      container.appendChild(new Loading());
    }
  }
}
