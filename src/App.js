import React from 'react';
// Import Global Style File
import GlobalStyle from './Components/GlobalStyle';
// Importing pages
import AboutUs from './Pages/AboutUs';
// Navbar
import Nav from './Components/Nav';
import ContactUs from './Pages/ContactUs';
import OurWork from './Pages/OurWork';
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
                <Route path="/work">
                    <OurWork />
                </Route>
                <Route path="/contact">
                    <ContactUs />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
