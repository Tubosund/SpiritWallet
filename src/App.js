import React, { useEffect } from 'react'
import $ from 'jquery'
import Home from './pages/Home'
import Bible from './pages/Bible'
import Contact from './pages/Contact'
import Dashboard from './pages/Dashboard'
import Devotional from './pages/Devotional'
import Forgotpassword from './pages/Forgotpassword'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './pages/Login'
import Signup from './pages/Signup'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <div>
    <Header />
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/bible' element={<Bible/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/devotional' element={<Devotional/>}/>
    <Route path='/forgotpassword' element={<Forgotpassword/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
    <Footer />
    </div>
  )
}

export default App