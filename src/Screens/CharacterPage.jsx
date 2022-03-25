import React from "react";
import { useParams } from "react-router-dom";

function CharacterPage({ data }) {
  // getting character name from url param
  const { name } = useParams();
  const characterDetails = data.filter((x) => x.name === name)[0];

  return (
    <>
      {characterDetails && (
        <div>
          <div key={characterDetails?.name} className="row">
            <div className="col s12 m4">
              <div className="card">
                <div className="card-image">
                  <img src={characterDetails?.img} alt="" />
                  <span className="card-title">{characterDetails?.name}</span>
                </div>
                <div className="card-content">
                  <p>Birthday: {characterDetails?.birthday}</p>
                  <p>Nickname: {characterDetails?.nickname}</p>
                  <p>Status: {characterDetails?.status}</p>
                  <h6>Occupations:</h6>
                  <ul>
                    {characterDetails?.occupation.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {!characterDetails && <div>{name} wasn't found in api</div>}
    </>
  );
}

export default CharacterPage;
