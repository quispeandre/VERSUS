import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
//import Catalog from './pages/Catalog';
//import Restaurant from './pages/Restaurant';
//import AboutUs from './pages/AboutUs';
//import Events from './pages/Events';
//import Gallery from './pages/Gallery';
//import Contact from './pages/Contact';
//import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/*}<Route path="catalogo/*" element={<Catalog />} />
        <Route path="restaurante/*" element={<Restaurant />} />
        <Route path="sobre-nosotros" element={<AboutUs />} />
        <Route path="eventos" element={<Events />} />
        <Route path="galeria" element={<Gallery />} />
        <Route path="contacto" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        {*/}
      </Route>
    </Routes>
  );
}

export default App;