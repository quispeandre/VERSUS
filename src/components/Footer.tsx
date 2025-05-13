import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-gray-300 mb-4">
              Descubre nuestro universo de productos y experiencias únicas para fans y coleccionistas.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-300 hover:text-[#d33b38] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="text-gray-300 hover:text-[#d33b38] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-300 hover:text-[#d33b38] transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-[#d33b38]">Navegación</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Inicio</Link></li>
              <li><Link to="/catalogo" className="text-gray-300 hover:text-white transition-colors">Catálogo</Link></li>
              <li><Link to="/restaurante" className="text-gray-300 hover:text-white transition-colors">Restaurante</Link></li>
              <li><Link to="/sobre-nosotros" className="text-gray-300 hover:text-white transition-colors">Sobre Nosotros</Link></li>
              <li><Link to="/eventos" className="text-gray-300 hover:text-white transition-colors">Eventos</Link></li>
              <li><Link to="/galeria" className="text-gray-300 hover:text-white transition-colors">Galería</Link></li>
              <li><Link to="/contacto" className="text-gray-300 hover:text-white transition-colors">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-[#d33b38]">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 text-[#d33b38] shrink-0 mt-1" />
                <span className="text-gray-300">Ubicacion</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-[#d33b38] shrink-0" />
                <span className="text-gray-300">(+591) 78324564</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-[#d33b38] shrink-0" />
                <span className="text-gray-300">info@versusimport.com</span>
              </li>
              <li className="flex items-start">
                <Clock size={20} className="mr-2 text-[#d33b38] shrink-0 mt-1" />
                <div>
                  <p className="text-gray-300">Lun - Vie: 10:00 - 20:00</p>
                  <p className="text-gray-300">Sáb - Dom: 11:00 - 21:00</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-[#d33b38]">Suscríbete</h3>
            <p className="text-gray-300 mb-4">
              Recibe nuestras novedades y promociones exclusivas.
            </p>
            <form className="mb-4">
              <div className="flex flex-col space-y-2">
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-[#d33b38]"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#d33b38] text-white font-medium rounded hover:bg-red-700 transition-colors"
                >
                  Suscribirse
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Versus Importaciones. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;