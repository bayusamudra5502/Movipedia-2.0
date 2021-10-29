import Component, { register } from "../lib/component";
import nodata from "@assets/no-data.svg";

@register("no-data")
export default class NoData extends Component {
  private __message: string;

  connectedCallback() {
    this.__message = "Tidak ada data yang ditemukan";

    super.connectedCallback();
  }

  set message(msg: string) {
    this.__message = msg;
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="no-data">
        <img src="${nodata}" alt="No Data" />
        <div class="description">
          ${this.__message}
        </div>
      </div>
    `;
  }
}
