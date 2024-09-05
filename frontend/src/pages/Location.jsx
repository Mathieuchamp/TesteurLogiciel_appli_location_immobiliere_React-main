import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel/index';
import Footer from '../components/Footer/index';
import Children from '../components/Children/Children';
import Collapse from '../components/Collapse/Collapse';
import Error from '../components/Error/ErrorComponents';
import '../styles/Location.css';

function Location() {
  const [searchParams] = useSearchParams();
  const idLogement = searchParams.get('_id');
  const [id, setId] = useState([]);
  const record = id.find((element) => element.id === idLogement);
  
  const arrayStars = [1, 2, 3, 4, 5];

  useEffect(() => {
    fetch('http://localhost:8080/api/properties')
      .then((response) => response.json())
      .then((data) => {setId(data);});
  }, []);

  if (!record) return(<Error />)

  return (
    <div className='logement'>
      <Children>
        <Navbar />
        {record.pictures && (
          <Carousel pictures={record.pictures} className='carousel-logement' />
        )}
        {record && (<>
            <div className='description-location'>
              <div className='div-description'>
                
                  <h1>{record.title}</h1>
                  <h4>{record.location}</h4>

                <div className='div-tags'>
                  {record.tags.map((element, index) => (
                    <p className='tags' key={'tags-' + index}>
                      {element}
                    </p>
                  ))}
                </div>
              </div>
              <div className='name-picture-star'>
                <div className='div-etoiles'>
                  <p>{record.host.name}</p>
                  <img src={record.host.picture} alt={record.title} />
                </div>
                <div className='stars'>
                  {arrayStars.map((element) => {
                    const nbreEtoiles = parseInt(record.rating, 10);
                    return (
                      <span
                        key={'star-' + element}
                        className={element <= nbreEtoiles ? 'span1' : 'span2'}
                      >
                        ★
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className='collapseLogement'>
              <Collapse title='Description' content={record.description} />
              <Collapse title='Équipements'content={
                  <ul>
                    {record.equipments.map((element, index) => (
                      <li
                        className='description-content'
                        key={'equip-' + index}
                      >
                        {element}
                      </li>
                    ))}
                  </ul>
                }
              />
            </div>
          </>
        )}
      </Children>
      <Footer />
    </div>
  );
}

export default Location;