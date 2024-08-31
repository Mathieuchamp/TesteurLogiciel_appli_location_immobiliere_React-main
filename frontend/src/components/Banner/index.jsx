import React from 'react';
import './Banner.css';

function Banner() {
    return(
        <div className="banner">
            <img src={require("../../assets/images/_Section 1.png")} alt="SweetHome" className="imgBanner"></img> 
            <div className="texte">
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
        </div>
    )
}

export default Banner