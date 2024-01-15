import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/index';
import Footer from './components/Footer/index';
import AboutMe from './sections/AboutMe/AboutMe';
import Contact from './sections/Contact/Contact';
import Portfolio from './sections/Portfolio/Portfolio';
import Resume from './sections/Resume/Resume';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route exact path="/" component={AboutMe} />
                    <Route path="/portfolio" component={Portfolio} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/resume" component={Resume} />
                </Routes>
                <Footer /> {}
            </div>
        </Router>
    );
}



export default App;
