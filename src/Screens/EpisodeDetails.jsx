import React from 'react'
import { useLocation , Link} from 'react-router-dom'

function EpisodeDetails() {

    // getting current episode data from link redirect params (state param) 
    const location = useLocation()
    const details = location?.state?.obj

    return (
        <div className="row">
            <div className="col s12 m6">
            <div className="card">
                <div className="card-content">
                    <span className="card-title">Season {details?.season} - Episode {details?.episode}</span>
                    <div className="card-action"></div>
                    <h5>Episode title : {details?.title}</h5>
                    <p>Air date : {details?.air_date}</p>
                    <p>Characters in the episode:</p>

                    {/* mapping characters array to list */}
                    <div className="collection">
                        {details?.characters.map(x=><Link key={x} to={`/characters/${x}`} className="collection-item">{x}</Link>)}
                    </div>
                </div>
            </div>
            </div>
        </div>
    
    );
}

export default EpisodeDetails;