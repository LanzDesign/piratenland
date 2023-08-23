import '../css/root.css'
import Header from './Header.js'
import React from 'react';
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