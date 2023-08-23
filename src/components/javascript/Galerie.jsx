import '../css/root.css'
import Navbar from './Navbar'
import React from 'react';
import BookingButton from './BookingButton';
import Footer from './footer'

const Galerie = () => {

    return (
         
        <div>
            <Navbar />

            <BookingButton />
            <Footer />
        </div>
        )
    }

export default Galerie;