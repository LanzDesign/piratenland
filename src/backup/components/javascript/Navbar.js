import '../css/nav.css'
import '../css/root.css'
import { useState } from 'react'
import logo from '../css/images/LOGO_NEU_Blau.png'

const Navbar = () => {

    const[brgState, setBrgState] = useState(false);

    function handleClick(){
        setBrgState(brgState => !brgState);
    }

    let toggleClassCheck = brgState ? ' active': '';
    return (
         
        <div>
            <div className={`Burger${toggleClassCheck}`} onClick={handleClick}>
                <div className='bar1' />
                <div className='bar2' />
                <div className='bar3' />
            </div>

            <div className={`nav${toggleClassCheck}`}>
                <div className='navGrid'>  
                    <div></div>
                    <div>
                        <picture className='logo'>
                            <img src={logo} alt='logo'/>
                        </picture>
                    </div>
                    <div className='center'>
                        <nav>
                            <ul>
                                <li>
                                    <a href='#start'>Startseite</a>
                                </li>
                                <li>
                                    <a href='#aboutUs'>Über uns</a>
                                </li>
                                <li>
                                    <a href='#galerie'>Galerie</a>
                                </li>
                                <li>
                                    <a href='#kontakt'>Kontakt</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>    
        </div>
        )
    }

export default Navbar