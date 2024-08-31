import React from 'react';
import './Footer.css'

function Footer () {
    return(
        <div className="footer">
            <div className="img_footer"><img src={require("../../assets/images/LOGO noir.png")} alt="Logo Noir"/></div>
            <div className="text_footer"><p>© 2020 Kasa. All rights reserved</p></div>
        </div>
    )
}

export default Footer