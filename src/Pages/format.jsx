import React from 'react'
import DetailKelas from '../Components/DetailKelas/DetailKelas'
import KategoriKelas from '../Components/KategoriKelas/KategoriKelas'
import DetailKategoriKelas from '../Components/DetailKategoriKelas/DetailKategoriKelas'
const UserPage = () => {

    return (
        <div>
            <KategoriKelas />
            <DetailKategoriKelas />
            <DetailKelas />
        </div>

    );
}

export default UserPage;