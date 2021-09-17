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
import { Switch, Route } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <Nav />
            <Switch>
                <Route path="/" exact>
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
        </div>
    );
}

export default App;
