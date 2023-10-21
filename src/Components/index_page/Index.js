import React from 'react';
import './Index.css';
import Nav from '../nav-bar/Nav';

import Hero from './index_comp/Hero/Hero';

export default function Index() {
  return (
    <div className='h-screen bg-black border-gray-200'>
      <Nav/>
      <Hero/>
    </div>
  )
}
