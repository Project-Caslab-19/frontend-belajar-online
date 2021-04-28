import React from 'react';
import Navbar from '../Components/Navbar/navbar';
import Footer from '../Components/Footer/footer';
import Hero from '../Components/Hero/landingpage';

const MainPage = () =>{

    return (
        <div>
            <Navbar />
            <Hero />
            {/* <h3>Index</h3>
            <small>mainssssssssssscccss page</small> */}
            <Footer/>
        </div>
        
    );
}

export default MainPage; 