import React, { useState } from 'react';


const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const galleries = {
    products: [
      { src: 'https://images.pexels.com/photos/207456/pexels-photo-207456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Figura Marvel' },
      { src: 'https://images.pexels.com/photos/3661243/pexels-photo-3661243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Peluche Disney' },
      { src: 'https://images.pexels.com/photos/1793035/pexels-photo-1793035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Taza DC' },
      { src: 'https://images.pexels.com/photos/844297/pexels-photo-844297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Lámpara Pokémon' },
      { src: 'https://images.pexels.com/photos/1895015/pexels-photo-1895015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Mochila Star Wars' },
      { src: 'https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Figura Star Wars' },
      { src: 'https://images.pexels.com/photos/163036/pokemon-pokemon-go-mobile-trends-smartphone-163036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Accesorios Pokémon' },
      { src: 'https://images.pexels.com/photos/12872550/pexels-photo-12872550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Figuras de Acción' },
    ],
    restaurant: [
      { src: 'https://images.pexels.com/photos/2290070/pexels-photo-2290070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Área principal' },
      { src: 'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Barra temática' },
      { src: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Hamburguesa especial' },
      { src: 'https://images.pexels.com/photos/761854/pexels-photo-761854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Zona de exhibición' },
      { src: 'https://images.pexels.com/photos/2454533/pexels-photo-2454533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Ambiente nocturno' },
      { src: 'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Coctelería especial' },
    ],
    events: [
      { src: 'https://images.pexels.com/photos/7234256/pexels-photo-7234256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Comic Con' },
      { src: 'https://images.pexels.com/photos/4997875/pexels-photo-4997875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Lanzamiento' },
      { src: 'https://images.pexels.com/photos/5708879/pexels-photo-5708879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Taller' },
      { src: 'https://images.pexels.com/photos/1716153/pexels-photo-1716153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Noche temática' },
      { src: 'https://images.pexels.com/photos/4691555/pexels-photo-4691555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Juegos de mesa' },
      { src: 'https://images.pexels.com/photos/3807319/pexels-photo-3807319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Meet & Greet' },
    ],
  };

  const [activeTab, setActiveTab] = useState<'products' | 'restaurant' | 'events'>('products');
  
  const openLightbox = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    document.body.style.overflow = 'hidden'; // Disable scrolling when lightbox is open
  };
  
  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling when lightbox is closed
  };
  
  return (
    <div className="pt-16 md:pt-24">
      {/* Hero Section */}
      <div className="relative bg-black text-white py-16">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Galería</h1>
            <p className="text-xl text-gray-300">
              Explora imágenes de nuestros productos, restaurante y eventos.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://images.pexels.com/photos/1047319/pexels-photo-1047319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Gallery" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      {/* Gallery Tabs */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-10">
            <div className="inline-flex rounded-md shadow-sm">
              <button
                onClick={() => setActiveTab('products')}
                className={`px-6 py-3 text-sm font-medium rounded-l-lg ${
                  activeTab === 'products'
                    ? 'bg-[#d33b38] text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                Productos
              </button>
              <button
                onClick={() => setActiveTab('restaurant')}
                className={`px-6 py-3 text-sm font-medium ${
                  activeTab === 'restaurant'
                    ? 'bg-[#d33b38] text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                Restaurante
              </button>
              <button
                onClick={() => setActiveTab('events')}
                className={`px-6 py-3 text-sm font-medium rounded-r-lg ${
                  activeTab === 'events'
                    ? 'bg-[#d33b38] text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                Eventos
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleries[activeTab].map((image, index) => (
              <div 
                key={index} 
                className="relative overflow-hidden rounded-lg aspect-square cursor-pointer group"
                onClick={() => openLightbox(image.src)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="font-medium">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div 
            className="relative max-w-4xl max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage} 
              alt="Enlarged view" 
              className="max-w-full max-h-[90vh] object-contain"
            />
            <button 
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-colors"
              onClick={closeLightbox}
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

export default Gallery;