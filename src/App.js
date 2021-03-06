import "./App.css";
import MainNavigator from "./MainNavigator";
import React, { useState, useEffect } from "react";
import Loader from "./Screens/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [episodes, setEpisodes] = useState(null);
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    // fetching episodes data and init the main route
    fetch("https://www.breakingbadapi.com/api/episodes")
      .then((response) => response.json())
      .then((data) => {
        setEpisodes(data);
      });

    // fetching characters data and init the charcters
    fetch("https://www.breakingbadapi.com/api/characters")
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data);
      });
  }, []);

  useEffect(() => {
    // presenting the data after finishing loading
    if (episodes && characters) {
      setIsLoading(false);
    }
  }, [episodes, characters]);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <MainNavigator episodes={episodes} characters={characters} />
      )}
    </>
  );
}

export default App;
