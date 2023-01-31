// import logo from './logo.svg';
// import './App.css';
import ShoppingList from './pages/ShoppingList'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Belajar React
        </a>
      </header> */}
      {/* Menampilkan tulisan "Hello World!" */}
      <h1>Hello World!</h1>
      <ShoppingList />
    </div>
  );
}

export default App;
