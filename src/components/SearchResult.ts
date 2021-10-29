import Component, { register } from "../lib/component";
import { IRecord } from "../service/Api";
import Data from "./Data";

@register("sresult-container")
export default class SearchResult extends Component {
  private _data: IRecord[] = [];
  private _loading: boolean = false;

  public onHide: () => void;

  set data(data: IRecord[]) {
    this._data = data;
    this.render();
  }

  set isLoading(loading: boolean) {
    this._loading = loading;
    this.render();
  }

  get data() {
    return this._data;
  }

  get isLoading() {
    return this._loading;
  }

  render() {
    this.innerHTML = `
      <div class="container section-container">
        <h2>Search Result</h2>
        <p>Didapatkan ${this._data.length} hasil penelusuran • <a href="#" id="hide-result">Sembunyikan Hasil Penelusuran</a></p>
        <div class="data">
        </div>
      </div>
    `;

    const dataContainer = this.querySelector(".data");

    this.querySelector("#hide-result").addEventListener("click", (e) => {
      e.preventDefault();
      this.onHide();
    });

    const data = new Data();
    data.data = this._data;
    data.isLoading = this._loading;

    dataContainer.appendChild(data);
  }
}
