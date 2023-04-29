import React from 'react'
import { Routes, Route} from 'react-router-dom';
import Homepage from './screens/Homepage';
import Aboutus from './screens/Aboutus';
import NotFound from './screens/NotFound';
import Contactus from './screens/Contactus';
import Movies from './screens/Movies';

function App() {
  return (
   <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about-us" element={<Aboutus />} />
      <Route path="/contact-us" element={<Contactus />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="*" element={<NotFound />} />
   </Routes>
  );
} 

export default App