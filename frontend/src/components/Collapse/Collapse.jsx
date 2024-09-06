import React, { useState } from 'react';
import ArrowDown from '../../assets/images/fleche_bas.svg';
import ArrowUp from '../../assets/images/fleche_haut.svg';

function Collapse({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="collapse">
            <div className="collapse-header" onClick={toggleCollapse}>
                <h3>{title}</h3>
                <img 
                    src={isOpen ? ArrowUp : ArrowDown} 
                    alt={isOpen ? "Fermer" : "Ouvrir"} 
                    className={`collapse-arrow ${isOpen ? 'rotate-arrow' : ''}`}
                />
            </div>
            <div className={`collapse-content ${isOpen ? 'open' : 'closed'}`}>
                {content}
            </div>
        </div>
    );
}

export default Collapse