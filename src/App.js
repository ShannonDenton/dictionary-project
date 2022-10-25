import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary defaultKeyword="cake" />
        </main>
        <footer>
          <small>
            {" "}
            Coded by{" "}
            <a
              href="https://shannon-denton.com/"
              target="_blank"
              rel="noreferrer"
            >
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
