import React, { useState } from "react";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos"

import axios from "axios";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);
 
  function handleDictionResponse(response) {
    setResults(response.data[0]);
  }

function handlePexelsResponse(response) {
  setPhotos(response.data.photos);
}

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionResponse);

let pexelsApiKey = 
"563492ad6f9170000100000145e60f3c39d94efbbfa234b6071c00fd";

let pexelsApiUrl =
`https://api.pexels.com/v1/search?query=${keyword}`
let headers = {Authorization : `Bearer ${pexelsApiKey}`};
    axios.get(pexelsApiUrl, {headers: headers}).then(handlePexelsResponse);

  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>Wordfinder</h1>
          <h2>What word do you want to look up?</h2>
          <form onSubmit={handleSubmit}>
            <input type="search" onChange={handleKeywordChange} />
          </form>
          <div className="hint">
            Suggested words: cake, pink, chocolate, pasta, paris
          </div>
          <Results results={results} />
          <Photos photos={photos} />
        </section>
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
