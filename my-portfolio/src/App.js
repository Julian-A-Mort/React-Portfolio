import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/index';
import Footer from './components/Footer/index';
import AboutMe from './sections/AboutMe/AboutMe.js';
import Contact from './sections/Contact/Contact.js';
import Portfolio from './sections/Portfolio/Portfolio.js';
import Resume from './sections/Resume/Resume.js';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                <Route exact path="/" element={<AboutMe />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/resume" element={<Resume />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}



export default App;
