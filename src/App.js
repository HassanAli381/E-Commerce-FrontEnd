import React from 'react';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import ProductsList from './components/ProductsList';
import About from './components/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <div className="App">
      {/* we will leave the navbar without route because it will appear in all pages */}
      <Navbar />


      <Routes>
        <Route path='/' element={
          <>
            <Slider />
            <ProductsList />
          </>
        } />

        <Route path='/about' element={<About />} />

        <Route path='/product/:productId' element={<ProductDetails />} />

      </Routes>
    </div>
  );
}

export default App;
