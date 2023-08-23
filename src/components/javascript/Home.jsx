import '../css/root.css'
import Navbar from './Navbar'
import Header from './Header.js'
import React from 'react';
import MainContent from './MainContent';
import SideButtons from './sidebuttons';
import Wartung from './wartungsseite';
import Footer from './footer'



const Home = () => {
  
    return (

        <div>
            {/*<Navbar />*/}
            <Header />
            <Wartung />
            {/*<MainContent />*/}
            {/*<SideButtons />*/}
            <Footer />
        </div>
        )
    }

export default Home;