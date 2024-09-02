import React, { useState } from 'react';
import ChevronLeft from '../../assets/images/arrow_back_ios-24px 1.png';
import ChevronRight from '../../assets/images/arrow_forward_ios-24px 1.png';
import "../Carousel/Carousel.css";

function Carousel({ pictures }) { // Ajout de la prop pictures

    const [index, setIndex] = useState(0);
    const totalPictures = pictures.length - 1;

    if (index < 0) setIndex(totalPictures);
    if (index > totalPictures) setIndex(0);

    return (
        <div className='Carousel'>
            <div className='div-image'>
                <img src={pictures[index]} className='classImage' key={"car-"+index} alt={"photo "+index}/>
            </div>

            {totalPictures > 0 && ( 
                <div> 
                    <button onClick={() => setIndex(index - 1)}>{index}
                        <img src={ChevronLeft} className='classChevronGauche' alt={'flèche gauche pour changer de photo '+index} />
                    </button>
                    <button onClick={() => setIndex(index + 1)}>{index}
                        <img src={ChevronRight} className='classChevronDroit' alt={'flèche droite pour changer de photo '+index} />
                    </button>
                </div>
            )}

            {totalPictures > 0 && (
                <div className='div-compteur'> 
                    <p className='compteurImages'>
                        {index+1}/{totalPictures+1}
                    </p>
                </div>
            )}
        </div>
    )
}

export default Carousel;