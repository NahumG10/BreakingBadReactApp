import React from "react";
import EpisodeDetails from "./Screens/EpisodeDetails";
import MainPage from "./Screens/MainPage";
import CharacterPage from "./Screens/CharacterPage";
import AllCharacters from "./Screens/AllCharacters";
import NotFound from "./Screens/NotFound";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function MainNavigator({ episodes, characters }) {
  return (
    <div className="container">
      <BrowserRouter>
        <nav>
          <div className="nav-wrapper">
            <ul id="nav-mobile" className="left">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/AllCharacters">All Characters</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route
            path="Episodes/:id"
            element={<EpisodeDetails data={episodes} />}
          />
          <Route path="/" element={<MainPage data={episodes} />} />
          <Route
            path="/characters/:name"
            element={<CharacterPage data={characters} />}
          />
          <Route
            path="/AllCharacters"
            element={<AllCharacters data={characters} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default MainNavigator;
