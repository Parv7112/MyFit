import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import LandingPage from './components/LandingPage';

const App = () => {
    return (
        <Router>
            <LandingPage />
        </Router>
    );
};

export default App;
