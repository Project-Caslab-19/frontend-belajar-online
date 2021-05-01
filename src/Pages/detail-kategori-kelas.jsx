
import React from 'react';
import NavigationBar from '../Components/Navbar/navbar';

import Footer from '../Components/Footer/footer';

import DetailKategoriKelas from '../Components/DetailKategoriKelas/DetailKategoriKelas'

const UserPage_kelas = () => {

    return (
        <div>
            <NavigationBar />
            <DetailKategoriKelas />
            <Footer />
        </div>

    );
}

export default UserPage_kelas;