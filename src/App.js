import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './Components/index_page/Index';
import React, { useState, useEffect } from 'react';
import Logic from './Components/main_logic/Logic';
import Spline from '@splinetool/react-spline';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className='content-center'>
      {loading ? (
        <div className='h-screen'>
          <Spline scene="https://prod.spline.design/vgZxbrmkkR8Md6Ad/scene.splinecode" />
        </div>
      ) : (<BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Index />} />
          <Route exact path="/logic" element={<Logic />} />
        </Routes>
      </BrowserRouter>)}
      
    </div>
  );
}

export default App;
