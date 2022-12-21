// src/App.js

import './App.css';

import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import LinkedIn from './components/LinkedIn';
import Goals from './components/Goals';
import Calendar from './components/Calendar';

export default function App() {
  return (
    <main className="text-gray-400 bg-slate-100 body-font">
      <Navbar />
      <About />
      <Goals />
      <LinkedIn />
      <Calendar />
      <Contact />
    </main>
  );
}