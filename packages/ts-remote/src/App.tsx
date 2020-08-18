import React from "react";
import ReactDOM from "react-dom";

import getList from "./pokemonList";
import PokemonListView from "./PokemonListView";

import "./index.css";

const App = () => (
  <div>
    <h1>TS-REMOTE</h1>
    <PokemonListView list={getList("Bulb")} />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
