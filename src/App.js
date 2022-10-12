import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary />
        </main>
        <footer>
          <small>
            {" "}
            Coded by{" "}
            <a href="https://shannon-denton.com/" target="_blank">
              {" "}
              Shannon Denton
            </a>{" "}
            and is open-sourced on Github.
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
