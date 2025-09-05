import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import Loading from '../components/Loading/Loading';
import AIChatbot from '../components/AIChatbot';

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
            <main className="flex-grow w-full">
                <Outlet />
            </main>
            {!noHeaderFooter && <Footer />}
            <AIChatbot />
        </div>
    );
};

export default Main;