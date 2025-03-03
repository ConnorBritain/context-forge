import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { DocumentProvider } from '../context/DocumentContext';
import Header from './common/Header';
import Footer from './common/Footer';
import Routes from './Routes';
import '../styles/global.css';

/**
 * Main application component
 */
const App = () => {
  return (
    <Router>
      <DocumentProvider>
        <div className="app-container">
          <Header />
          <main className="main-content">
            <Routes />
          </main>
          <Footer />
        </div>
      </DocumentProvider>
    </Router>
  );
};

export default App;