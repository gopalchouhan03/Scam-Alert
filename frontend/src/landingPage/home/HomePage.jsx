import React from 'react';
import Hero from './Hero';
import SAScrollBar from './SAScrollBar';
import ScamCards from './ScamCards';
import ScamSigns from './ScamSigns';
import Testimonials from './Testimonials';
import Newsletter from './Newsletter';

function HomePage() {
    return(
        <>
           <Hero />
           <SAScrollBar />
           <ScamCards />
           <ScamSigns />
           <Testimonials/>
           <Newsletter/>
        </>
    );
}

export default HomePage;