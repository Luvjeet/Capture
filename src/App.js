import React from 'react';
// Import Global Style File
import GlobalStyle from './Components/GlobalStyle';
// Importing pages
import AboutUs from './Pages/AboutUs';

function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <AboutUs />
        </div>
    );
}

export default App;
