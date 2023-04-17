import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home'
import NotFound from '../pages/NotFound';
import VerticalBar from '../components/VerticalBar';
import HorizontalBar from '../components/HorizontalBar';
import StackedBar from '../components/StackedBar';
import GroupedBar from '../components/GroupedBar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/bar/vertical' element={<VerticalBar />} />
        <Route path='/bar/horizontal' element={<HorizontalBar />} />
        <Route path='/bar/stacked' element={<StackedBar />} />
        <Route path='/bar/grouped' element={<GroupedBar />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;