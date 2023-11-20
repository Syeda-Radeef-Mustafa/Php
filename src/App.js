// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Header from './component/header';
import Footer from './component/footer';
import Home from './pages/Home';
import AboutUs from './pages/About';
import ContactUs from './pages/ContactUs';
import Repair from './pages/Repair';
import Salesproduct from './pages/Salesproduct';
import Calculator from './component/calculator';
import Stepform from './component/stepform';
import Sheets from './component/sheets';
import Testinomials from './pages/Testinomials';
import Login from './component/login';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/testinomial" element={<Testinomials />} />
            <Route path="/repair" element={<Repair />} />
            <Route path="/salesproduct" element={<Salesproduct />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/stepform" element={<Stepform />} />
            <Route path="/sheets" element={<Sheets />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
