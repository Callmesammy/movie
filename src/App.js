import React from 'react'
import { Routes, Route} from 'react-router-dom';
import Homepage from './screens/Homepage';
import Aboutus from './screens/Aboutus';
import NotFound from './screens/NotFound';

function App() {
  return (
   <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about-us" element={<Aboutus />} />
      <Route path="*" element={<NotFound />} />
   </Routes>
  );
} 

export default App