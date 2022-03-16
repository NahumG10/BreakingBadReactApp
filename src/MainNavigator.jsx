import React, {useEffect, useState} from 'react';
import EpisodeDetails from './Screens/EpisodeDetails';
import MainPage from './Screens/MainPage';
import CharacterPage from './Screens/CharacterPage';
import AllCharacters from './Screens/AllCharacters';
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";

function MainNavigator() {
    const [mainPageRoute, setMainPageRoute] = useState(null);
    const [charactersPageRoute, setCharactersPageRoute] = useState(null);

    useEffect(()=>{
        // fetching episodes data and init the main route dynamicly (only after fetching the data)
        fetch("https://www.breakingbadapi.com/api/episodes")
        .then(response => response.json())
        .then((data) => {
            let temp = [];

            // inserting the home route to nav
            temp.push(<Route key={"r1"} path="/" element={<MainPage data={data}/>} />)
            setMainPageRoute(temp)
        });

        // fetching characters data and init the charcters route dynamicly (only after fetching the data)
        fetch("https://www.breakingbadapi.com/api/characters")
        .then(response => response.json())
        .then((data) => {
            let temp = [];

            // inserting the characters route to nav
            temp.push(<Route key={"r2"} path="/characters/:name" element={<CharacterPage data={data}/>} />)
            temp.push(<Route key={"r3"} path="/AllCharacters" element={<AllCharacters data={data}/>} />)
            setCharactersPageRoute(temp)
        });


    },[])

    return (
        <div className="container">

            <BrowserRouter>
            <nav>
                <div className="nav-wrapper">
                    <ul id="nav-mobile" className="left">
                        {mainPageRoute && <li><Link to="/">Home</Link></li>}
                        {charactersPageRoute && <li><Link to="/AllCharacters">All Characters</Link></li>}
                    </ul>
                </div>
            </nav>
            <Routes>   
                <Route path="Episodes/:id" element={<EpisodeDetails />} />
                {mainPageRoute}
                {charactersPageRoute}
            </Routes>

            </BrowserRouter>
    </div>
    );
}

export default MainNavigator;