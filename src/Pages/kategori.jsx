import React from 'react';
import NavigationBar from '../Components/Navbar/navbar';

import Footer from '../Components/Footer/footer';
import KategoriKelas from '../Components/KategoriKelas/KategoriKelas'

const UserPage_kategori = () => {

    return (
        <div>

            <NavigationBar />
            <KategoriKelas />
            <Footer />
        </div>

    );
}

export default UserPage_kategori;