import Component, { register } from "../lib/component";
import { Modal } from "bootstrap";
import { IRecord } from "../service/Api";

const MAX_CHAR = 100;

@register("movie-card")
export default class MovieCard extends Component {
  private __record: IRecord;

  constructor() {
    super();

    this.__record = {
      image: "https://source.unsplash.com/M5DRKOFiv-o",
      id: 0,
      title: "",
      release: "",
      vote: {
        average: 0,
        count: 1,
      },
      overview: "",
      isAdult: false,
    };
  }

  get record() {
    return this.__record;
  }

  set record({ image, id, title, release, vote, overview, isAdult }) {
    this.__record = {
      image,
      id,
      title,
      release,
      vote,
      overview,
      isAdult,
    };

    this.render();
  }

  __showModal() {
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.classList.add("fade");
    modal.setAttribute("role", "dialog");

    modal.innerHTML = `
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">${this.__record.title}</h5>
        </div>
        <div class="modal-body">
          <div class="legend">
            <div class="backdrop">
              <img src="${this.__record.image}" alt="${this.__record.title}">
            </div>
            <div class="content">
              <p><strong>Judul : </strong> ${this.__record.title} </p>
              <p><strong>Tanggal Rilis : </strong> ${this.__record.release} </p>
              <p><strong>Vote : </strong> ${this.__record.vote.average} (${
      this.__record.vote.count
    } orang) </p>
              <p><strong>Konten Dewasa : </strong> ${
                this.__record.isAdult ? "Ya" : "Tidak"
              } </p>
            </div>
          </div>
          <div class="overview">
              <p><strong>Ringkasan :</strong></p>
              ${this.__record.overview}
          </div>
        </div>
      </div>
    </div>
    `;

    document.body.appendChild(modal);
    const modalObj = new Modal(modal);

    modal.addEventListener("hidden.bs.modal", () => {
      document.body.removeChild(modal);
    });

    modalObj.show();
  }

  render() {
    this.innerHTML = `
      <div class="card">
      <img class="card-img-top" src="${this.__record.image}" alt="${
      this.__record.title
    } Backdrop">
      <div class="card-body">
        <h5 class="card-title">${this.__record.title}</h5>
        <p class="card-text">${
          this.__record.overview.length > MAX_CHAR
            ? this.__record.overview.substring(0, MAX_CHAR) + "..."
            : this.__record.overview
        }</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Dirilis pada ${this.__record.release}</li>
        <li class="list-group-item">Vote : ${this.__record.vote.average} (${
      this.__record.vote.count
    } orang)</li>
        <li class="list-group-item">${
          this.__record.isAdult
            ? "Film ini mengandung konten dewasa"
            : "Film tidak mengandung konten dewasa"
        }</li>
      </ul>
      <div class="card-body">
        <a href="#" class="card-link">Lihat detail</a>
      </div>
    </div>
    `;

    this.querySelector(".card-link").addEventListener("click", (e) => {
      e.preventDefault();
      this.__showModal();
    });
  }
}
