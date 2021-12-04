import React from 'react';
// Import Global Style File
import GlobalStyle from './Components/GlobalStyle';
// Importing pages
import AboutUs from './Pages/AboutUs';
// Navbar
import Nav from './Components/Nav';
import ContactUs from './Pages/ContactUs';
import OurWork from './Pages/OurWork';
import MovieDetail from './Pages/MovieDetail';
import { Switch, Route, useLocation } from 'react-router-dom';
// Animation
import { AnimatePresence } from 'framer-motion';

function App() {
    const location = useLocation();

    return (
        <div className="App">
            <GlobalStyle />

            <Nav />
            <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.pathname}>
                    <Route path="/Capture" exact>
                        <AboutUs />
                    </Route>
                    <Route path="/work" exact>
                        <OurWork />
                    </Route>
                    <Route path="/work/:id">
                        <MovieDetail />
                    </Route>
                    <Route path="/contact">
                        <ContactUs />
                    </Route>
                </Switch>
            </AnimatePresence>
        </div>
    );
}

export default App;
