import '../css/header.css';
import '../css/root.css';
import * as React from 'react';
import schiff from '../css/images/piratenschiff.png'


const header = () => {

    return (
        <div className="header">
            <div>
                <picture>
                    <img src={schiff} alt='schiff'/>
                </picture>
            </div>
            <div className='title'>
                <p className='centered-text'>                    
                    <h1>Indoorspielplatz Piratenland Baden-Baden</h1>
                    <h2>
                        Paulo und Giusy´s <br/>Traumwelten<br/>
                    </h2>
                </p>
            </div>
        </div>
        )
    }

export default header
