import '../css/root.css'
import Navbar from './Navbar'
import React from 'react';
import BookingButton from './BookingButton';
import Footer from './footer'

const About = () => {

    return (
         
        <div>
            <Navbar />
            <div className='about-container'>

            </div>
            <BookingButton />
            <Footer />
        </div>
        )
    }

export default About;