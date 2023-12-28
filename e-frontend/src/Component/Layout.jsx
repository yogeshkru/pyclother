import React from 'react';
import { Outlet } from "react-router-dom"
import Header from './Header';
import Footer from './Footer';
import { Cartheader } from './Cartheader';
import SingleProduct from '../Pages/singleProduct';
function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        
        </>
    )
}

export default Layout