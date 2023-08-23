import '../css/nav.css'
import '../css/root.css'
import React, {useState} from "react";
import logo from '../css/images/papagei.png'
import { NavLink } from 'react-router-dom';
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
                    <div className='hideAtSmallScreen'></div>
                        <picture className='logo'>
                            <img src={logo} alt='logo'/>
                        </picture>
                    <div className='center'>
                        <nav>
                            <ul>
                                <li>
                                    <NavLink to="/"activeClassName="selected">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/about' activeClassName="selected">Über uns</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/regeln' activeClassName="selected">Unsere Regeln</NavLink>
                                </li>
                                <li className='dropdown'>
                                    <span className='dropdown-button  dropbtn'>Kontakt</span>
                                    <div className='dropbtn'>
                                        
                                        <div className='dropdown-content'>

                                            <NavLink to="/oeffnungszeiten" activeClassName="selected">Öffnungszeiten</NavLink>

                                            <NavLink to="/contact" activeClassName="contact">Kontaktformular</NavLink>

                                            <NavLink to="/contact" activeClassName="contact">Impressum</NavLink>

                                        </div>
                                    </div>
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