import React, { useState, useEffect } from "react";
import M from "materialize-css";
import { Link } from "react-router-dom";

function MainPage({ data }) {
  const [seasonsEpisodes, setSeasonsEpisodes] = useState([]);

  useEffect(() => {
    // init collapsing list of seasons
    M.AutoInit();
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".collapsible");
      M.Collapsible.init(elems, []);
    });

    initSeasons();
  }, []);

  const initSeasons = () => {
    // getting seasons numbers
    let seasonsArray = getSeasonsFromJson(data);
    let content = [];

    seasonsArray.forEach((season) => {
      // filtering current season episodes
      let listOfEpisodes = data.filter(
        (elem) => elem.season === season && elem.series === "Breaking Bad"
      );
      content.push({
        season: season,
        episodes: listOfEpisodes,
      });
      setSeasonsEpisodes(content);
    });
  };

  // getting the seasons from fetched data
  const getSeasonsFromJson = (episodes) => {
    let seasons = [];
    episodes.forEach((element) => {
      if (!seasons.find((x) => x === element.season.trim())) {
        seasons.push(element.season);
      }
    });

    return seasons;
  };

  return (
    <div>
      <ul className="collapsible">
        {seasonsEpisodes.map((elem) => {
          return (
            <li key={elem.season}>
              <div className="collapsible-header">Season {elem.season}</div>
              <div className="collapsible-body">
                <div className="collection">
                  {elem.episodes.map((x) => (
                    <Link
                      key={`${x.season} - ${x.episode}`}
                      className="collection-item"
                      to={`/Episodes/${x.season}-${x.episode}`}
                    >
                      Episode {x.episode} - {x.title} - {x.air_date}
                    </Link>
                  ))}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MainPage;
