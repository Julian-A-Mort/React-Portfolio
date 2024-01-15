import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/index';
import Project from './components/Project/index';
import
import
import
// TO DO Import other components 

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Switch>
                    <Route exact path="/" component={AboutMe} />
                    <Route path="/portfolio" component={Portfolio} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/resume" component={Resume} />
                    {/* Add additional Routes as needed */}
                </Switch>
                {/* Other components, if any */}
            </div>
        </Router>
    );
}


export default App;
