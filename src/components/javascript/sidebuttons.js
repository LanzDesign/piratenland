import '../css/root.css';
import '../css/sidebuttons.css';
import * as React from 'react';
import homeButton from '../css/images/icons8-startseite-ios-16-glyph/icons8-startseite-90.png';
import phoneButton from '../css/images/icons8-phone-squared-ios-16-glyph/icons8-phone-squared-90.png';
import mailButton from '../css/images/icons8-email-ios-16-glyph/icons8-email-90.png';
import locationButton from '../css/images/icons8-adresse-ios-16-glyph/icons8-adresse-90.png';
import { Link } from 'react-router-dom';

const SideButtons = () => {
    const emailAddress = "info@pg-traumwelten.de"
    const phoneNumber = "+491742638614"


    return (
        <div>
            <div className="sideButtons">
                <div className='homeButton'>
                    <Link to={'/'}>
                        <picture>
                            <img src={homeButton} alt="home-icon"/>
                        </picture>
                    </Link>
                </div>
                <div className='phoneButton'>
                    <a href={`tel:${phoneNumber}`}>
                        <picture>
                            <img src={phoneButton} alt="tel-icon"/>
                        </picture>
                    </a>
                </div>
                <div className='mailButton'>
                    <a href={`mailto:${emailAddress}`}>
                        <picture>
                            <img src={mailButton} alt="tel-icon"/>
                        </picture>
                    </a>
                </div>
                <div className='locationButton'>
                    <a href={`mailto:${phoneNumber}`}>
                        <picture>
                            <img src={locationButton} alt="tel-icon"/>
                        </picture>
                    </a>
                </div>
            </div>
        </div>
        )
    }

export default SideButtons;
