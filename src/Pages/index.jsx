import React from 'react';
import Section1 from '../Components/Section1/Section1';
import Section2 from '../Components/Section2/Section2';
import Footer from '../Components/Footer/footer';
import Hero from '../Components/Hero/landingpage';
import Navbar from '../Components/Navbar/navbar'


const MainPage = () => {

    return (
        <div>
            <Navbar/>
            <Hero />
            <Section1 />
            <Section2 />
            <Footer />
        </div>
    );
}

export default MainPage;