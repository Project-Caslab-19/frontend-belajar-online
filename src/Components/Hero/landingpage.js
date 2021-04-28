import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './landingpage.css';
import  Register  from '../Register/register';
import  Login  from '../Login/login';
import { ReactComponent as  LandingImg} from './img.svg'


function Hero() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const closeMobileMenu = () => setClick(false);
    return (
        <>
        <section id="hero" class="d-flex align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                        <h1>BANGUN KARIRMU SEBAGAI MAHASISWA IT CERDAS</h1>
                        <h2>Mulai belajar terarah dengan learning path</h2>
                        <div className="d-flex">
                            <div className='btn'>
                                <Register/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 hero-img">
                    <div className = "img">
                        <LandingImg />
        
                    </div>

        </div>
        </div>
    </div>

    </section>


        </>
    );
}
export default Hero;