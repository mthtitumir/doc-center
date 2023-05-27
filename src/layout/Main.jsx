import React from 'react';
import ButtonOutline from '../Componants/ButtonOutline';
import Button from '../Componants/Button';
import SectionHeader from '../Componants/SectionHeader';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import NavBar from '../Shared/NavBar/NavBar';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;