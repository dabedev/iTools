import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home'
import Charts from '../containers/Charts';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/:ChartType' element={<Charts />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;