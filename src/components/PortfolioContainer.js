import React, { useState } from 'react';
import Navigation from './Navigation';
import Home from './pages/Home';
import About from './pages/About';
import CV from './pages/CV';
import Contact from './pages/Contact';
import Footer from './Footer';
import Header from './Header';
import Projects from './pages/Projects';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');

    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {
        // A switch statement that will return the appropriate component of the 'currentPage'
        switch (currentPage) {
            case 'Home':
                return <Home />;
            case 'About':
                return <About />;
            case 'CV':
                return <CV />;
            case 'Contact':
                return <Contact />;
            case 'Projects':
                return <Projects />;
            default:
                return <Home />;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Header />
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer />
        </div>
    );
}
