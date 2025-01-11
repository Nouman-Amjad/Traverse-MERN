import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom';
import Home from '../Pages/Home';
import Tour from '../Pages/Tour';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import AllTours from '../Pages/AllTours';
import SearchTour from '../Pages/SearchTour';
import MyBookings from '../Pages/MyBookings'
import ContactForm from '../Pages/ContactForm';
import TourGallery from '../Pages/TourGallery';
import TourDisplayPage from '../Pages/TourDisplayPage'
const Routers = () => {
  return (
    <Routes>
      <Route path = '/' element = {<Navigate to='/Home' />}/>
      <Route path = '/Home' element = {<Home />}/>
      <Route path = '/AllTours' element = {<AllTours />}/>
      <Route path = '/Login' element = {<Login />}/>
      <Route path = '/MyBookings' element = {<MyBookings />}/>
      <Route path = '/Register' element = {<Register />}/>
      <Route path = '/Gallery' element = {<TourGallery />}/>
      <Route path = '/AllTours/SearchTour' element = {<SearchTour />}/>
      <Route path = '/ContactUs' element = {<ContactForm />}/>
      <Route path = '/tour/:id' element = {<TourDisplayPage />}/>
      <Route path='*' element={<Navigate to='/Home' />} />
    </Routes>
  )
}

export default Routers
