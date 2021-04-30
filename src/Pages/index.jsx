import React from 'react';
import NavigationBar from '../Components/Navbar/navbar';
import Section1 from '../Components/Section1/Section1';
import Section2 from '../Components/Section2/Section2';
import Footer from '../Components/Footer/footer';
import Hero from '../Components/Hero/landingpage';
import DetailKelas from '../Components/KategoriKelas/KategoriKelas'

const MainPage = () => {

    return (
        <div>
            <NavigationBar />
            <Hero />
            <Section1 />
            <Section2 />
            <Footer />
        </div>

    );
}

export default MainPage;