import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import Loading from '../components/Loading/Loading';

const Main = () => {
    const [isLoading, setIsLoading] = useState(true);
    const location = useLocation();
    const noHeaderFooter = location.pathname === '/login' || location.pathname === '/signup';

    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 300);

        return () => clearTimeout(timer);
    }, [location.pathname]);

    return (
        <div className="min-h-screen flex flex-col w-full bg-gray-100">
            {isLoading && <Loading />}
            {!noHeaderFooter && <Navbar />}
            <main className="flex-grow w-full pt-16">
                <Outlet />
            </main>
            {!noHeaderFooter && <Footer />}
        </div>
    );
};

export default Main;