import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import NavBar from '../src/Components/nav_bar.jsx';
import Footer from '../src/Components/footer.jsx';
import AboutUs from '../src/Components/about-us.jsx';
import Home from '../src/Components/home.jsx';
import Join from '../src/Components/join.jsx';
import PaymentPremium from '../src/Components/payment_premium.jsx';
import PaymentBasic from '../src/Components/payment_basic.jsx';

const App = () => {
  const [homeVisible, setHomeVisible] = useState(true);

  const toggleHomeVisibility = () => {
    setHomeVisible(!homeVisible);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <React.Fragment>
              <NavBar setNavBarOpen={toggleHomeVisibility} setHomeVisible={setHomeVisible} />
              {homeVisible && <Home />}
              {homeVisible && <Footer />}
            </React.Fragment>
          }
        />
        <Route
          path="/aboutus"
          element={
            <React.Fragment>
              <NavBar setNavBarOpen={toggleHomeVisibility} setHomeVisible={setHomeVisible} />
              {homeVisible && <AboutUs />}
              {homeVisible && <Footer />}
            </React.Fragment>
          }
        />
        <Route
          path="/join"
          element={
            <React.Fragment>
              <NavBar setNavBarOpen={toggleHomeVisibility} setHomeVisible={setHomeVisible} />
              {homeVisible && <Join />}
              {homeVisible && <Footer />}
            </React.Fragment>
          }
        />
        <Route
          path="/premiumplan"
          element={
            <React.Fragment>
              <NavBar setNavBarOpen={toggleHomeVisibility} setHomeVisible={setHomeVisible} />
              {homeVisible && <PaymentPremium />}
              {homeVisible && <Footer />}
            </React.Fragment>
          }
        />
        <Route
          path="/basicplan"
          element={
            <React.Fragment>
              <NavBar setNavBarOpen={toggleHomeVisibility} setHomeVisible={setHomeVisible} />
              {homeVisible && <PaymentBasic />}
              {homeVisible && <Footer />}
            </React.Fragment>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

