import React from 'react';
import NavigationBar from '../Components/Navbar/navbar';

import Footer from '../Components/Footer/footer';

import DetailKelas from '../Components/DetailKelas/detailKelas'

const UserPage_detail_kelas = () => {

    return (
        <div>
            <NavigationBar />
            <DetailKelas/>
            <Footer />
        </div>

    );
}

export default UserPage_detail_kelas;