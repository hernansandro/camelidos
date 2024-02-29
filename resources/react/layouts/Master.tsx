import React from "react";

import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from '../components/Sidebar';
const Master = (): JSX.Element => {
    return (
        <div>
           
            <Sidebar />
            <main role="main" className="wrapper">
                <div className="content">
                    <Header />
                    <Outlet />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Master;