import Component, { register } from "../lib/component";
import { getData, IRecord } from "../service/Api";
import Search, { ISearchEvent } from "./Search";
import SearchResult from "./SearchResult";

@register("search-container")
export default class SearchContainer extends Component {
  private hideResult = true;
  private searchResultData: IRecord[] = [];
  private isLoading: boolean = false;
  private searchResultComponent: SearchResult;
  private searchbarComponent: Search;

  rerender() {
    const resultComponent = this.querySelector(".result");

    if (this.hideResult) {
      resultComponent.innerHTML = "";
    } else if (resultComponent.contains(this.searchResultComponent)) {
      this.searchResultComponent.isLoading = this.isLoading;
      this.searchResultComponent.data = this.searchResultData;
    } else {
      resultComponent.append(this.searchResultComponent);
    }
  }

  private async onSearch({ keyword }: ISearchEvent) {
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

    this.searchbarComponent = new Search();
    this.searchResultComponent = new SearchResult();
    this.searchbarComponent.onSearch = this.onSearch.bind(this);

    this.searchResultComponent.onHide = () => {
      this.hideResult = true;
      this.rerender();
    };

    this.querySelector(".searchbar").appendChild(this.searchbarComponent);
  }
}
