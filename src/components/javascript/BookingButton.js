import '../css/root.css';
import '../css/bookingbutton.css';
import * as React from 'react';
import { NavLink } from "react-router-dom";
import {useState, useEffect} from "react";

const BookingButton = () => {


    const [position, setPosition] = useState(window.pageYOffset)
    const [visible, setVisible] = useState(true) 

    useEffect(()=> {
        const handleScroll = () => {
           let moving = window.pageYOffset
           
           setVisible(position > moving);
           setPosition(moving)
        };
        window.addEventListener("scroll", handleScroll);
        return(() => {
           window.removeEventListener("scroll", handleScroll);
        })
    })
    const cls = visible ? "visible" : "hidden";


    return (
        <div className={cls}>
            <div className="BookingButton">
                <button>
                    <NavLink to="/contact">Jetzt Reservieren</NavLink>
                </button>
            </div>
        </div>
        )
    }

export default BookingButton;
