import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import './Logementscards.css';

// composant qui permet de récupérer la liste des logements et de les afficher sous forme de card



function LogementsCards() {

    const [datas, setDatas] = useState([])

    useEffect(() => {
        fetch('http://localhost:8080/api/properties')
        .then(response => response.json())
        .then(data => {
            setDatas(data);
        })
    })

    return (
        <div className="logements">
            {datas.map((Data) => {
                const { id, cover, title } = Data;

                return (
                    <div className="fiche-logement" key={id}>
                        <Link to={{ pathname: "/location", search: "?_id="+id }}>
                            <img src={cover} alt={title} />
                            <h3>{title}</h3>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default LogementsCards