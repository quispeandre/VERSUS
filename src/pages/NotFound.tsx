import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-20">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="text-[#d33b38] font-bold text-9xl">404</div>
          <h1 className="text-3xl font-bold mt-4">Página no encontrada</h1>
          <p className="text-gray-600 mt-2">
            Lo sentimos, la página que estás buscando no existe o ha sido movida.
          </p>
        </div>
        <div className="space-y-4">
          <Button variant="primary" size="lg" className="w-full">
            <Link to="/">Volver al inicio</Link>
          </Button>
          <p className="text-gray-500">
            ¿No encuentras lo que buscas? <Link to="/contacto" className="text-[#d33b38] hover:underline">Contáctanos</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;