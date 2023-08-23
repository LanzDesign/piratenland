import '../css/root.css'
import '../css/booking-form.css'
import Navbar from './Navbar'
import React from 'react'
import Footer from './footer'

const Reservieren = () => {


    return (
        <div>
            <Navbar />
            <div>
                <script src="https://unpkg.com/vue@3"></script>
                <script src="https://cdn.anny.co/widget/annyComponents.umd.latest.min.js"></script>
                <a-organization-page base-url="https://anny.co/b" dark-mode="false" organization="piratenland-baden-baden" placeholder-title="Piratenland Baden-Baden" hide-resource-header="false" hide-organization-header="false" should-login="false" entity-id="" secondary-color="#ff0000" primary-background="#0062ff" primary-background-rgb="0, 98, 255" panel-background="#001eff" panel-background-rgb="0, 30, 255" panel-background-light="#2942ff" panel-background-dark="#0019d6" panel-background-overlay="rgba(0, 30, 255, 0.25)" panel-background-overlay-dense="rgba(0, 30, 255, 0.85)" text-primary-color="#ffffff" text-secondary-color="#e6e6e6" text-tertiary-color="#cccccc"></a-organization-page>
            </div>
            <Footer />
        </div>
        )
    }

export default Reservieren;