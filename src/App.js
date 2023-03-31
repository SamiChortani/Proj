import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './index.css';
import AboutUs from './Screens/AboutUs';
import ContactUs from './Screens/ContactUs';
import HomeScreen from './Screens/HomeScreen';
import MoviesPage from './Screens/Movies';
import NotFound from './Screens/NotFound';
import SingleMovie from './Screens/SingleMovie';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen/>}  />   
      <Route path="/aboutus" element={<AboutUs />}  />
      <Route path="/contactus" element={<ContactUs />}  />   
      <Route path="/movies" element={<MoviesPage />}  />
      <Route path="/movie/:id" element={<SingleMovie />}  />    

      <Route path="*" element={< NotFound />}  />    
    </Routes>
  );
}

export default App;
