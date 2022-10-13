import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function App() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function Search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} definition`);

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={Search}>
        <input type="search" onChange={handleKeywordChange} />
      </form>
    </div>
  );
}
