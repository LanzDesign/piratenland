import '../css/footer.css';
import '../css/root.css';
import * as React from 'react';

import { NavLink } from "react-router-dom";
const Footer = () => {

    return (
        <div className="footer">
            <div className='text-footer'>
                <h3>Piratenland Baden-Baden</h3>
                <p>
                    Industriestraße 14<br/>
                    Sinzheim bei Baden-Baden<br/>
                    76547 Sinzheim<br/>
                </p>
            </div>
            <br/>
            <div className='text-footer'>
                <h3>Öffnungszeiten</h3>
                <p>
                    Monag bis Freitag<br/>
                    von 14:00 - 19:00<br/>
                    Samstag und Sonntag<br/>
                    von 09:00 - 19:00<br/>
                </p>
            </div>
            <br/>
            <div className="impressum-footer text-footer">
                <div>
                    <NavLink to="/impressum">Impressum</NavLink><br/>
                    <NavLink to="/datenschutz">Datenschutzerklärung</NavLink>
                </div>
            </div>

        </div>
        )
    }

export default Footer
