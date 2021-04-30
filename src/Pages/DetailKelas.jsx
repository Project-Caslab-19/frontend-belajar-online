import React from 'react';
import NavigationBar from '../Components/Navbar/navbar';

import Footer from '../Components/Footer/footer';

import DetailKelas from '../Components/KategoriKelas/KategoriKelas'

const UserPage = () => {

    return (
        <div>
            <NavigationBar />
            <DetailKelas />
            {/* <Footer /> */}
        </div>

    );
}

export default UserPage;