import React from "react";
import "./App.css"
import ShoppingList from "./Pages/ShoppingList";
import Table from "./Pages/Table";
import Welcome from "./Pages/Welcome";

function App() {
  return (
    <div className="App">
      <p>Hello!</p>
      <ShoppingList />
      <Table />
      <Welcome />
    </div>
  );
}

export default App;
