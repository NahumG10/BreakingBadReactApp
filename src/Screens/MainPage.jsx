import React,{useState,useEffect} from 'react';
import M from 'materialize-css';
import {
    Link
} from "react-router-dom";

function MainPage({data}) {
    const [seasonsContainer, setSeasonsContainer] = useState([]);

    useEffect(()=>{

        // init collapsing list of seasons
        M.AutoInit();
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.collapsible');
            M.Collapsible.init(elems, []);
        });

          if (data){
              showList();
          }
    },[])

    const showList = () =>{
        let seasonsArray = getSeasonsFromJson(data);
        let content = []

        seasonsArray.forEach(season => {

            // filtering the current episode data
            let listOfEpisodes = data.filter(elem => elem.season === season && elem.series === "Breaking Bad")
            content.push(
                <li key={season}>
                    <div className="collapsible-header">Season {season}</div>
                    <div className="collapsible-body">
                        <div className="collection">
                            {listOfEpisodes.map(x=>
                                <Link key={`${x.season} - ${x.episode}`} className="collection-item" to={{pathname :`/Episodes/${x.season}-${x.episode}`}} state={{ obj: x}}
                                >
                                    Episode {x.episode} - {x.title} - {x.air_date}
                                </Link>
                            )}
                        </div>
                    </div>
                </li>
            )
        });

        setSeasonsContainer(content)
    }


    // getting the seasons from fetched data
    const getSeasonsFromJson = (episodes)=>{
        let seasons = [];
        episodes.forEach(element => {
            if (!seasons.find(x=> x === element.season.trim())){
                seasons.push(element.season)
            }
        });

        return seasons;
    }


    return (
        <div>
            <ul className="collapsible">
                {seasonsContainer}
            </ul>
        </div>
    );
}

export default MainPage;