import '../css/root.css'
import '../css/regeln.css'
import Navbar from './Navbar'
import React from 'react';
import SideButtons from './sidebuttons'
import Footer from './footer'

const Regeln = () => {

    return (
         
        <div>
            <Navbar />
            <div className='regeln'>
                <h1>
                    Verhaltensregeln
                </h1>
                <h2>
                    Willkommen im PIRATENLAND BADEN-BADEN!
                </h2>
                Liebe Kinder, liebe Eltern,
                <br/>liebe Gäste,
                <p>bitte lesen Sie die folgenden Punkte sorgfältig durch, damit alle Gäste einen schönen Tag im 
                    <br/>PIRATENLAND BADEN-BADEN verbringen können:
                </p>
                <p>
                    <h3>Teil 1 Grundregeln</h3>
                    <ol>
                        
                    </ol>
                </p>
            </div>
            <SideButtons />
            <Footer />
        </div>
        )
    }

export default Regeln;