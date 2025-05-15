import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';

import Navbar from './landingPage/Navbar';
import Footer from './landingPage/Footer';
import Signup from './landingPage/Signup';
import Login from './landingPage/Login';
import LogoutButton from './landingPage/LogoutButton';

import HomePage from './landingPage/home/HomePage';
import LatestScam from './landingPage/latestScam/LatestScam';
import ReportAScam from './landingPage/reportaScam/ReportAScam';
import PeventionTips from './landingPage/preventionTips/PreventionTips';
import QuizPage from './landingPage/preventionTips/QuizPage';
import AboutUs from './landingPage/about/AboutUs';
import ScamDetail from "./landingPage/latestScam/ScamDetail"; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path="/latestScam" element={<LatestScam />}></Route>
      <Route path="/reportaScam" element={<ReportAScam />}></Route>
      <Route path="/peventionTips" element={<PeventionTips />}></Route>
      <Route path="/aboutUs" element={<AboutUs />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/logout" element={<LogoutButton />}></Route>
      <Route path="/scams/:id" element={<ScamDetail />} />
      <Route path="/quiz/:scamType" element={<QuizPage />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);