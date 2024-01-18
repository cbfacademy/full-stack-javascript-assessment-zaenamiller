import React from "react";
import Search from "./components/Search";
import data from "./models/enterprises.json";
function App() {
  const enterprises = data;
  return (
    <div className="App">
      <h1>Social enterpises for Schools</h1>
      <p>Find organisations suited to your pupils needs</p>
      <Search />
    </div>
  );
}

export default App;
