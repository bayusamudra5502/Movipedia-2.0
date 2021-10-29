"use strict";
(self["webpackChunkgdsc_movipedia"] = self["webpackChunkgdsc_movipedia"] || []).push([[42],{

/***/ 5538:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


;// CONCATENATED MODULE: ./src/lib/component.ts
class Component extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    adoptedCallback() {
        this.render();
    }
}
function register(tagname) {
    return function (constructor) {
        customElements.define(tagname, constructor);
    };
}
/* harmony default export */ const component = (Component);

;// CONCATENATED MODULE: ./src/assets/logo.png
/* harmony default export */ const logo = (__webpack_require__.p + "assets/img/logo.dd03616ce6ee214acad4c7c3f7d3829b.png");
;// CONCATENATED MODULE: ./src/components/Header.ts
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let Header = class Header extends component {
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
};
Header = __decorate([
    register("header-app")
], Header);
/* harmony default export */ const components_Header = (Header);

;// CONCATENATED MODULE: ./src/assets/cinema.jpg
/* harmony default export */ const cinema = (__webpack_require__.p + "assets/img/cinema.1b2ec185166d252811970bebff18d141.jpg");
;// CONCATENATED MODULE: ./src/components/Jumbotron.ts
var Jumbotron_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let Jumbotron = class Jumbotron extends component {
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
};
Jumbotron = Jumbotron_decorate([
    register("jumbotron-app")
], Jumbotron);
/* harmony default export */ const components_Jumbotron = (Jumbotron);

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(9669);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
;// CONCATENATED MODULE: ./src/service/config.ts
const API_LOCATION = "https://api.themoviedb.org/3";
const API_TOKEN = "";
const IMAGE_PATH = "https://image.tmdb.org/t/p/w500";

;// CONCATENATED MODULE: ./src/service/Api.ts


async function getData(query, page = 1) {
    const { data: { results }, } = await axios_default().get(`${API_LOCATION}/search/movie`, {
        params: {
            api_key: API_TOKEN,
            query,
            page,
        },
    });
    return results.map((record) => {
        return {
            image: record.backdrop_path
                ? `${IMAGE_PATH}${record.backdrop_path}`
                : "https://source.unsplash.com/M5DRKOFiv-o",
            id: record.id,
            title: record.title,
            release: record.release_date,
            vote: {
                average: record.vote_average,
                count: record.vote_count,
            },
            overview: record.overview,
            isAdult: record.adult,
        };
    });
}
async function getPopular() {
    const { data: { results }, } = await axios_default().get(`${API_LOCATION}/movie/popular`, {
        params: {
            api_key: API_TOKEN,
        },
    });
    return results.map((record) => ({
        image: record.backdrop_path
            ? `${IMAGE_PATH}${record.backdrop_path}`
            : "https://source.unsplash.com/M5DRKOFiv-o",
        id: record.id,
        title: record.title,
        release: record.release_date,
        vote: {
            average: record.vote_average,
            count: record.vote_count,
        },
        overview: record.overview,
        isAdult: record.adult,
    }));
}

// EXTERNAL MODULE: ./node_modules/bootstrap/dist/js/bootstrap.esm.js
var bootstrap_esm = __webpack_require__(9909);
;// CONCATENATED MODULE: ./src/components/MovieCard.ts
var MovieCard_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


const MAX_CHAR = 100;
let MovieCard = class MovieCard extends component {
    __record;
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
              <p><strong>Vote : </strong> ${this.__record.vote.average} (${this.__record.vote.count} orang) </p>
              <p><strong>Konten Dewasa : </strong> ${this.__record.isAdult ? "Ya" : "Tidak"} </p>
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
        const modalObj = new bootstrap_esm/* Modal */.u_(modal);
        modal.addEventListener("hidden.bs.modal", () => {
            document.body.removeChild(modal);
        });
        modalObj.show();
    }
    render() {
        this.innerHTML = `
      <div class="card">
      <img class="card-img-top" src="${this.__record.image}" alt="${this.__record.title} Backdrop">
      <div class="card-body">
        <h5 class="card-title">${this.__record.title}</h5>
        <p class="card-text">${this.__record.overview.length > MAX_CHAR
            ? this.__record.overview.substring(0, MAX_CHAR) + "..."
            : this.__record.overview}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Dirilis pada ${this.__record.release}</li>
        <li class="list-group-item">Vote : ${this.__record.vote.average} (${this.__record.vote.count} orang)</li>
        <li class="list-group-item">${this.__record.isAdult
            ? "Film ini mengandung konten dewasa"
            : "Film tidak mengandung konten dewasa"}</li>
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
};
MovieCard = MovieCard_decorate([
    register("movie-card")
], MovieCard);
/* harmony default export */ const components_MovieCard = (MovieCard);

;// CONCATENATED MODULE: ./src/assets/no-data.svg
/* harmony default export */ const no_data = (__webpack_require__.p + "assets/img/no-data.189b6673c3c195ac15846a8040dfe482.svg");
;// CONCATENATED MODULE: ./src/components/NoData.ts
var NoData_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let NoData = class NoData extends component {
    __message;
    connectedCallback() {
        this.__message = "Tidak ada data yang ditemukan";
        super.connectedCallback();
    }
    set message(msg) {
        this.__message = msg;
        this.render();
    }
    render() {
        this.innerHTML = `
      <div class="no-data">
        <img src="${no_data}" alt="No Data" />
        <div class="description">
          ${this.__message}
        </div>
      </div>
    `;
    }
};
NoData = NoData_decorate([
    register("no-data")
], NoData);
/* harmony default export */ const components_NoData = (NoData);

;// CONCATENATED MODULE: ./src/assets/loading.svg
/* harmony default export */ const loading = (__webpack_require__.p + "assets/img/loading.68f6918e17c3f92f1e3775493c156bef.svg");
;// CONCATENATED MODULE: ./src/components/Loading.ts
var Loading_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let Loading = class Loading extends component {
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
};
Loading = Loading_decorate([
    register("loading-component")
], Loading);
/* harmony default export */ const components_Loading = (Loading);

;// CONCATENATED MODULE: ./src/components/Data.ts
var Data_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let Data = class Data extends component {
    _isLoading = false;
    _popularData;
    set isLoading(state) {
        this._isLoading = state;
        this.render();
    }
    get isLoading() {
        return this._isLoading;
    }
    set data(data) {
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
                    const card = new components_MovieCard();
                    card.record = record;
                    outerContainer.appendChild(card);
                    cardContainer.appendChild(outerContainer);
                });
                container.appendChild(cardContainer);
            }
            else {
                container.appendChild(new components_NoData());
            }
        }
        else {
            container.appendChild(new components_Loading());
        }
    }
};
Data = Data_decorate([
    register("data-container")
], Data);
/* harmony default export */ const components_Data = (Data);

;// CONCATENATED MODULE: ./src/components/Popular.ts
var Popular_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let Popular = class Popular extends component {
    data = [];
    loading = false;
    constructor() {
        super();
        this.loadData();
    }
    async loadData() {
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
        const data = new components_Data();
        data.data = this.data;
        data.isLoading = this.loading;
        dataContainer.appendChild(data);
    }
};
Popular = Popular_decorate([
    register("popular-container")
], Popular);
/* harmony default export */ const components_Popular = (Popular);

;// CONCATENATED MODULE: ./src/components/Search.ts
var Search_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let Search = class Search extends component {
    onSearch;
    render() {
        this.innerHTML = `
    <div class="outer-search-bar container">
      <div class="search-bar mt-4">
        <form id="search">
          <div class="input-search-bar">
            <input type="text" id="input-value" class="form-input" placeholder="Kata Kunci" required>
            <div class="input-group-append">
              <button class="btn" type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <circle cx="10" cy="10" r="7" />
                  <line x1="21" y1="21" x2="15" y2="15" />
                </svg>
              </button>
            </div>
          </div>
        </form>
      </div>    
    </div>
    `;
        this.querySelector("#search").addEventListener("submit", (event) => {
            event.preventDefault();
            const component = this.querySelector("#input-value");
            const data = {
                keyword: component.value,
            };
            this.onSearch(data, event);
        });
    }
};
Search = Search_decorate([
    register("search-bar")
], Search);
/* harmony default export */ const components_Search = (Search);

;// CONCATENATED MODULE: ./src/components/SearchResult.ts
var SearchResult_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let SearchResult = class SearchResult extends component {
    _data = [];
    _loading = false;
    onHide;
    set data(data) {
        this._data = data;
        this.render();
    }
    set isLoading(loading) {
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
        const data = new components_Data();
        data.data = this._data;
        data.isLoading = this._loading;
        dataContainer.appendChild(data);
    }
};
SearchResult = SearchResult_decorate([
    register("sresult-container")
], SearchResult);
/* harmony default export */ const components_SearchResult = (SearchResult);

;// CONCATENATED MODULE: ./src/components/SearchContainer.ts
var SearchContainer_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let SearchContainer = class SearchContainer extends component {
    hideResult = true;
    searchResultData = [];
    isLoading = false;
    searchResultComponent;
    searchbarComponent;
    rerender() {
        const resultComponent = this.querySelector(".result");
        if (this.hideResult) {
            resultComponent.innerHTML = "";
        }
        else if (resultComponent.contains(this.searchResultComponent)) {
            this.searchResultComponent.isLoading = this.isLoading;
            this.searchResultComponent.data = this.searchResultData;
        }
        else {
            resultComponent.append(this.searchResultComponent);
        }
    }
    async onSearch({ keyword }) {
        this.hideResult = false;
        this.isLoading = true;
        this.rerender();
        this.searchResultData = await getData(keyword);
        this.isLoading = false;
        this.rerender();
    }
    render() {
        this.innerHTML = `
      <div class="searchbar"></div>
      <div class="result"></div>
    `;
        this.searchbarComponent = new components_Search();
        this.searchResultComponent = new components_SearchResult();
        this.searchbarComponent.onSearch = this.onSearch.bind(this);
        this.searchResultComponent.onHide = () => {
            this.hideResult = true;
            this.rerender();
        };
        this.querySelector(".searchbar").appendChild(this.searchbarComponent);
    }
};
SearchContainer = SearchContainer_decorate([
    register("search-container")
], SearchContainer);
/* harmony default export */ const components_SearchContainer = (SearchContainer);

;// CONCATENATED MODULE: ./src/App.ts
var App_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let App = class App extends component {
    render() {
        this.appendChild(new components_Header());
        this.appendChild(new components_Jumbotron());
        this.appendChild(new components_SearchContainer());
        this.appendChild(new components_Popular());
    }
};
App = App_decorate([
    register("app-container")
], App);
/* harmony default export */ const src_App = (App);

;// CONCATENATED MODULE: ./src/index.ts

document.getElementById("app").appendChild(new src_App());


/***/ })

}]);