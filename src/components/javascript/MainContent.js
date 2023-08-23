import '../css/maincontent.css';
import '../css/root.css';
import schiff from '../css/images/Piratenland Schiff.pdf';
import leuchtturm from '../css/images/leuchtturm.png';
import * as React from 'react';
import { NavLink } from "react-router-dom";


const MainContent = () => {
    const emailAddress = 'info@pauloundguisy.de'
    const phoneNumber = '123456789'
    return (

        <div className='main-content'>
            <div className='text-container'>
                <div className='text-background'>
                    <div className='text-picture'>
                        <span>
                            <h3>
                                Entdecke das Piratenland Baden-Baden
                            </h3>  
                            <p>
                                In unserem Traum spielen wir auf einem Piratenschiff, klettern auf einen Leuchtturm, 
                                kämpfen uns durch einen Hindernisparcours und hüpfen so hoch wir können auf den Trampolinen und rutschen mit ganz viel Speed herunter vom Piratenschiff in das Wasser!<br/>
                                Im PIRATENLAND BADEN-BADEN gibt es so viel zu entdecken! <br/>
                                <br/>Bereiche für kleine und größere Kinder und zur Stärkung und Ausruhen auch leckeres Essen und Trinken mit schönen Sitzmöglichkeiten.
                            </p>
                        </span>
                        <picture>
                            <img src={schiff} alt="schiff"/>
                        </picture>
                    </div>
                    <br/>
                    <div className='text-picture'>
                        <picture className='desktop-picture'>
                            <img src={leuchtturm} alt="leuchtturm"/>
                        </picture>
                        <div>
                            <p>
                                <h3>Unsere Regeln</h3>
                                Damit es ein toller Tag wie im Traum wird,<br/> bitten wir euch die Verhaltensregeln durchzulesen und diese auch zu befolgen.
                            </p>
                            <br/>
                            <picture className='mobile-picture'>
                                <img src={leuchtturm} alt="leuchtturm"/>
                            </picture>
                            <br />
                            <p>
                                Gerne kannst du hier online ein Tagesticket buchen oder du kannst direkt vor Ort bezahlen.
                                Für euren Geburtstag, Kindergartengruppe oder sonstige Gruppen besteht die Möglichkeit der 
                                Tischreservierung und eine Auswahl an Essensangeboten für Gruppen. Weitere Informationen dazu findest du hier.
                            </p>
                        </div>
                    </div>
                    <br/>
                    <div className='wellen-font'>
                        <p>
                            <h3>Für Kindergärten und Schulgruppen</h3>
                            Für Kindergärten, Schulgruppen oder sonstigen Gruppen kann auf Anfrage auch außerhalb der Öffnungszeiten geöffnet werden. 
                            Bitte schicke uns hierzu einfach eine <a href={`mailto:${emailAddress}`}>E-Mail</a> oder benutze das <NavLink to="/contact">Kontaktformular</NavLink> mit weiteren Angaben (Datum, Anzahl der Personen, etc.)
                            Bitte beachte, dass es in den Ferien und an Feiertagen zu Veränderungen der Öffnungszeiten kommen kann (gesetzl. Feiertage und Ferien - Bundesland Baden-Württemberg). 
                        </p>
                        <br/>
                        <p>
                            <h3>Hast du eine Frage?</h3>
                            Schreibe uns doch einfach eine <a href={`mailto:${emailAddress}`}>E-Mail</a> oder rufe uns unter der <a href={`tel:${phoneNumber}`}>{phoneNumber}</a> während den Öffnungszeiten an.
                        </p>
                    </div>
                </div>
            </div>
        <div className='wellen'/>
        </div>
        )
    }

export default MainContent;
