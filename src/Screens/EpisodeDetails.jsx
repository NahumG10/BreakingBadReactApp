import React from "react";
import { Link, useParams } from "react-router-dom";

function EpisodeDetails({ data }) {
  const { id } = useParams();
  const [season, episode] = id.split("-");
  const details = data.filter(
    (elem) =>
      elem.season === season &&
      elem.episode === episode &&
      elem.series === "Breaking Bad"
  )[0];

  return (
    <>
      {details && (
        <div className="row">
          <div className="col s12 m6">
            <div className="card">
              <div className="card-content">
                <span className="card-title">
                  Season {details?.season} - Episode {details?.episode}
                </span>
                <div className="card-action"></div>
                <h5>Episode title : {details?.title}</h5>
                <p>Air date : {details?.air_date}</p>
                <p>Characters in the episode:</p>

                {/* mapping characters array to list */}
                <div className="collection">
                  {details?.characters?.map((x) => (
                    <Link
                      key={x}
                      to={`/characters/${x}`}
                      className="collection-item"
                    >
                      {x}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {!details && <div>No such Episode as {id}</div>}
    </>
  );
}

export default EpisodeDetails;
