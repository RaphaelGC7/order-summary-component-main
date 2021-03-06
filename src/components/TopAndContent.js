import './TopAndContent.css'
import React from 'react';
import SelectPlan from './SelectPlan';

function TopAndContent(){
    return (
        <div id="TopAndContent">
            <img id="HeroImage" src="illustration-hero.svg" alt="People having fun listening to music"/>
            <h1>Order Summary</h1>
            <p>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
            <SelectPlan/>
        </div>
    );

}

export default TopAndContent;