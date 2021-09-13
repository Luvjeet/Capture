import React from 'react';
// Import Global Style File
import GlobalStyle from './Components/GlobalStyle';
// Importing pages
import AboutUs from './Pages/AboutUs';
// Navbar
import Nav from './Components/Nav';

function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <Nav />
            <AboutUs />
        </div>
    );
}

export default App;
