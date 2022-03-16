import React,{useEffect, useState} from 'react';
import { useParams} from 'react-router-dom'

function CharacterPage({data}) {

    // geeting character name from url param
    const { name } = useParams();
    const [content, setContent] = useState(null);

    useEffect(()=>{

        // filtering the relevant character data by the name
        let characterDetails = data.filter(x=>x.name === name)[0]

        let temp = [];
        if (characterDetails){
            temp.push(
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
                                <h6>Occupations:</h6>
                                <ul>
                                    {characterDetails?.occupation.map(x=><li key={x}>{x}</li>)}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )

        }else{
            temp.push(<h4 key={name} >No data found in api about {name}</h4>)
        }

        setContent(temp)
    },[])

    return (
        <div>
            {content}
        </div>
    );
}

export default CharacterPage;