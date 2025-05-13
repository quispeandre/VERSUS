import React, { useState } from 'react';
import { Route, Routes, Link, useLocation, Navigate } from 'react-router-dom';
import { Calendar, Star, Clock, Users, ChevronRight, MapPin } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { menuCategories, restaurantGallery } from '../data/restaurant';

const MenuSection = () => {
  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <div className="relative bg-black text-white py-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl animate-slideInLeft">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nuestro Menú</h1>
            <p className="text-xl text-gray-300">
              Disfruta de platillos temáticos inspirados en tus personajes favoritos en un ambiente único.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 z-0 opacity-50">
          <img 
            src="https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Restaurant Menu" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Menu Categories */}
      <div className="container mx-auto px-4 py-16">
        {menuCategories.map((category, index) => (
          <div key={category.id} className={`mb-16 animate-fadeInUp`} style={{ animationDelay: `${index * 0.2}s` }}>
            <h3 className="text-2xl font-bold mb-8 text-[#d33b38] relative inline-block group">
              {category.name}
              <span className="absolute bottom-0 left-0 w-full h-1 bg-[#d33b38] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((item, itemIndex) => (
                <div 
                  key={item.id} 
                  className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-xl animate-fadeInUp"
                  style={{ animationDelay: `${(index * 3 + itemIndex) * 0.1}s` }}
                >
                  <div className="relative h-48 overflow-hidden group">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-xl font-bold text-gray-900">{item.name}</h4>
                      <span className="text-[#d33b38] font-bold text-lg">S/ {item.price.toFixed(2)}</span>
                    </div>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <Button 
                      variant="primary" 
                      size="sm"
                      className="w-full flex items-center justify-center group"
                    >
                      Ordenar ahora
                      <ChevronRight className="ml-2 transform transition-transform group-hover:translate-x-2" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <div className="relative bg-black text-white py-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl animate-slideInLeft">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Galería</h1>
            <p className="text-xl text-gray-300">
              Explora nuestro ambiente único y descubre la experiencia que te espera.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 z-0 opacity-50">
          <img 
            src="https://images.pexels.com/photos/2290070/pexels-photo-2290070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Restaurant Gallery" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurantGallery.map((item, index) => (
            <div 
              key={item.id} 
              className="relative overflow-hidden rounded-lg cursor-pointer group animate-fadeInUp"
              onClick={() => setSelectedImage(item.image)}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <h3 className="text-xl font-bold text-center">{item.title}</h3>
                  <div className="flex items-center justify-center mt-2">
                    <Star className="w-5 h-5 text-[#d33b38]" />
                    <Star className="w-5 h-5 text-[#d33b38]" />
                    <Star className="w-5 h-5 text-[#d33b38]" />
                    <Star className="w-5 h-5 text-[#d33b38]" />
                    <Star className="w-5 h-5 text-[#d33b38]" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-4xl max-h-full animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage} 
              alt="Enlarged view" 
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
            <button 
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const ReservationSection = () => {
  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <div className="relative bg-black text-white py-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl animate-slideInLeft">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Reservaciones</h1>
            <p className="text-xl text-gray-300">
              Asegura tu lugar en nuestra experiencia gastronómica única.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 z-0 opacity-50">
          <img 
            src="https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Restaurant Reservations" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto animate-fadeInUp">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden transform transition-all duration-500 hover:shadow-2xl">
            <div className="md:flex">
              <div className="md:w-1/2 relative">
                <img 
                  src="https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Restaurant atmosphere" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-white p-8">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4 transform hover:translate-x-2 transition-transform">
                      <Clock className="w-8 h-8 text-[#d33b38]" />
                      <div>
                        <h3 className="font-bold text-lg">Horarios</h3>
                        <p>Lun - Vie: 12:00 - 22:00</p>
                        <p>Sáb - Dom: 13:00 - 23:00</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 transform hover:translate-x-2 transition-transform">
                      <MapPin className="w-8 h-8 text-[#d33b38]" />
                      <div>
                        <h3 className="font-bold text-lg">Ubicación</h3>
                        <p>Av. Principal 123, Lima</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 transform hover:translate-x-2 transition-transform">
                      <Users className="w-8 h-8 text-[#d33b38]" />
                      <div>
                        <h3 className="font-bold text-lg">Capacidad</h3>
                        <p>Hasta 6 personas por mesa</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                <h3 className="text-2xl font-bold mb-6">Haz tu reservación</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="group">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Nombre completo
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d33b38] focus:border-transparent transition-all duration-300 group-hover:border-[#d33b38]"
                        required
                      />
                    </div>
                    <div className="group">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Correo electrónico
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d33b38] focus:border-transparent transition-all duration-300 group-hover:border-[#d33b38]"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="group">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Fecha
                      </label>
                      <input
                        type="date"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d33b38] focus:border-transparent transition-all duration-300 group-hover:border-[#d33b38]"
                        required
                      />
                    </div>
                    <div className="group">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Hora
                      </label>
                      <input
                        type="time"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d33b38] focus:border-transparent transition-all duration-300 group-hover:border-[#d33b38]"
                        required
                      />
                    </div>
                  </div>
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Número de personas
                    </label>
                    <select
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d33b38] focus:border-transparent transition-all duration-300 group-hover:border-[#d33b38]"
                      required
                    >
                      <option value="">Seleccionar</option>
                      {[1, 2, 3, 4, 5, 6].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'persona' : 'personas'}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Notas especiales
                    </label>
                    <textarea
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d33b38] focus:border-transparent transition-all duration-300 group-hover:border-[#d33b38]"
                      placeholder="Alergias, ocasiones especiales, etc."
                    ></textarea>
                  </div>
                  <Button 
                    variant="primary" 
                    type="submit"
                    className="w-full group"
                  >
                    <span className="flex items-center justify-center">
                      Confirmar reservación
                      <Calendar className="ml-2 transform transition-transform group-hover:scale-110" />
                    </span>
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Restaurant: React.FC = () => {
  const location = useLocation();
  
  return (
    <div className="pt-16 md:pt-24">
      {/* Navigation Tabs */}
      <div className="bg-black sticky top-16 md:top-24 z-30">
        <div className="container mx-auto px-4">
          <div className="flex space-x-1 overflow-x-auto">
            <Link
              to="/restaurante/menu"
              className={`py-4 px-6 text-white font-medium transition-colors hover:text-[#d33b38] whitespace-nowrap ${
                (location.pathname === '/restaurante' || location.pathname === '/restaurante/menu') ? 'text-[#d33b38] border-b-2 border-[#d33b38]' : ''
              }`}
            >
              Menú
            </Link>
            <Link
              to="/restaurante/galeria"
              className={`py-4 px-6 text-white font-medium transition-colors hover:text-[#d33b38] whitespace-nowrap ${
                location.pathname === '/restaurante/galeria' ? 'text-[#d33b38] border-b-2 border-[#d33b38]' : ''
              }`}
            >
              Galería
            </Link>
            <Link
              to="/restaurante/reservaciones"
              className={`py-4 px-6 text-white font-medium transition-colors hover:text-[#d33b38] whitespace-nowrap ${
                location.pathname === '/restaurante/reservaciones' ? 'text-[#d33b38] border-b-2 border-[#d33b38]' : ''
              }`}
            >
              Reservaciones
            </Link>
          </div>
        </div>
      </div>

      <Routes>
        <Route index element={<Navigate to="menu" replace />} />
        <Route path="menu" element={<MenuSection />} />
        <Route path="galeria" element={<GallerySection />} />
        <Route path="reservaciones" element={<ReservationSection />} />
      </Routes>
    </div>
  );
};

export default Restaurant;