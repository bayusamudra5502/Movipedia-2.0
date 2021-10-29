import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import Popular from "./components/Popular";
import SearchContainer from "./components/SearchContainer";
import Component, { register } from "./lib/component";

import "./styles/index.scss";

@register("app-container")
class App extends Component {
  render() {
    this.appendChild(new Header());
    this.appendChild(new Jumbotron());
    this.appendChild(new SearchContainer());

    this.appendChild(new Popular());
  }
}

export default App;
