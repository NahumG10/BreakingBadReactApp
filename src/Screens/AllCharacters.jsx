// additional page just for fun :)

import React, {useState} from 'react'
import { Link} from 'react-router-dom'

export default function AllCharacters({data}) {

const [search, setSearch] = useState("");

  return (
    <div className="row">
            <div className="col s12 m6">
            <div className="card">
                <div className="card-content">
                    <span className="card-title">All Characters</span>
                    <div className="card-action"></div>

                    <input placeholder="Search name" id="first_name" type="text" className="validate" onChange={(e)=>{
                        setSearch(e.target.value)
                    }}/>

                    {/* mapping characters array to list and apply filter by text*/}
                    <div className="collection">
                        {data.filter(x=>x.name.toLowerCase().includes(search.toLowerCase())).
                        map(x=><Link key={x.char_id} to={`/characters/${x.name}`} className="collection-item">{x.char_id}. {x.name}</Link>)}
                    </div>
                    
                </div>

            </div>
            </div>
        </div>
  )
}
