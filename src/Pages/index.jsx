import React from 'react';
import Navbar from '../Components/Navbar/navbar';
import Section1 from '../Components/Section1/Section1';
import Section2 from '../Components/Section2/Section2';
import Footer from '../Components/Footer/footer';
import Hero from '../Components/Hero/landingpage';

const MainPage = () => {

    return (
        <div>
            <Navbar />
            <Hero />
            {/* <h3>Index</h3>
            <small>mainssssssssssscccss page</small> */}
            <Section1 />
            <Section2 />
            <Footer />
        </div>

    );
}

export default MainPage;