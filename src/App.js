import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import BookingForm from './components/BookingForm';
import Carousel from './components/Carousel';
import Destinations from './components/Destinations';
import BottomNav from './components/BottomNav';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import './App.css'; // Global Styles
import Verify from './components/Verify';
import PrivateRoute from './components/PrivateRoute';


const App = () => {
  return (
    <Router>
      
      {/* Routes will handle the page navigation */}
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Carousel />
            <BookingForm />
            <Destinations />
            <BottomNav />
          </>
        } />
        
        
        {/* <Route path="/Verify" element={<PrivateRoute><Verify /></PrivateRoute>} /> */}
        <Route path="/Verify" element={<Verify />} />
      </Routes>
    </Router>
  );
};

export default App;