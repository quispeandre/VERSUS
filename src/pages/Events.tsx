import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';

const Events: React.FC = () => {
  const events = [
    {
      id: 'event1',
      title: 'Comic Con Lima 2025',
      date: '10-12 Junio, 2025',
      image: 'https://images.pexels.com/photos/7234256/pexels-photo-7234256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Visítanos en la Comic Con Lima 2025, donde tendremos un stand con productos exclusivos, descuentos especiales y muchas sorpresas. No te pierdas la oportunidad de conocer a nuestro equipo y celebrar con nosotros el amor por los cómics y la cultura pop.',
      location: 'Centro de Convenciones de Lima',
      time: '10:00 - 20:00',
      featured: true,
    },
    {
      id: 'event2',
      title: 'Lanzamiento Colección Marvel',
      date: '25 Mayo, 2025',
      image: 'https://images.pexels.com/photos/4997875/pexels-photo-4997875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Acompáñanos en el lanzamiento de nuestra nueva colección exclusiva de figuras Marvel. Tendremos actividades especiales, sorteos y la oportunidad de adquirir piezas de edición limitada antes que nadie.',
      location: 'Tienda principal Versus Importaciones',
      time: '18:00 - 22:00',
      featured: true,
    },
    {
      id: 'event3',
      title: 'Taller de Pintura de Figuras',
      date: 'Todos los sábados',
      image: 'https://images.pexels.com/photos/5708879/pexels-photo-5708879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Aprende a personalizar tus figuras de acción en nuestros talleres semanales con expertos. Incluye materiales y una figura para practicar. Cupos limitados.',
      location: 'Sala de eventos Versus Importaciones',
      time: '15:00 - 17:00',
      featured: false,
    },
    {
      id: 'event4',
      title: 'Noche de Star Wars',
      date: '4 Mayo, 2025',
      image: 'https://images.pexels.com/photos/1716153/pexels-photo-1716153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Celebra el Día de Star Wars con nosotros. Tendremos un menú especial temático en nuestro restaurante, promociones exclusivas en productos de la saga y actividades para toda la familia.',
      location: 'Restaurante Versus Importaciones',
      time: '19:00 - 23:00',
      featured: false,
    },
    {
      id: 'event5',
      title: 'Torneo de Juegos de Mesa',
      date: '15 Julio, 2025',
      image: 'https://images.pexels.com/photos/4691555/pexels-photo-4691555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Participa en nuestro torneo mensual de juegos de mesa. Este mes: Marvel Champions, Star Wars X-Wing y Catan. Inscripción previa requerida. Premios para los ganadores.',
      location: 'Sala de juegos Versus Importaciones',
      time: '16:00 - 21:00',
      featured: false,
    },
    {
      id: 'event6',
      title: 'Meet & Greet con Artista Invitado',
      date: '20 Agosto, 2025',
      image: 'https://images.pexels.com/photos/3807319/pexels-photo-3807319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Tendremos la visita especial del reconocido artista e ilustrador Juan Pérez, quien estará firmando su último trabajo y compartiendo con los fans. Sesión de preguntas y respuestas incluida.',
      location: 'Tienda principal Versus Importaciones',
      time: '17:00 - 19:00',
      featured: false,
    },
  ];

  const featuredEvents = events.filter(event => event.featured);
  const upcomingEvents = events.filter(event => !event.featured);

  return (
    <div className="pt-16 md:pt-24">
      {/* Hero Section */}
      <div className="relative bg-black text-white py-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Eventos y Novedades</h1>
            <p className="text-xl text-gray-300 mb-8">
              Descubre nuestros próximos eventos, lanzamientos y actividades especiales para la comunidad de fans.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 z-0 opacity-50">
          <img 
            src="https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Events" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Featured Events */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle title="Eventos Destacados" center />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-2/5">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-3/5 p-6">
                    <div className="text-[#d33b38] font-medium mb-2 flex items-center">
                      <Calendar size={16} className="mr-2" />
                      {event.date}
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{event.title}</h3>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    <div className="mb-4 space-y-2">
                      <div className="flex items-center text-gray-600">
                        <MapPin size={16} className="mr-2" />
                        {event.location}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock size={16} className="mr-2" />
                        {event.time}
                      </div>
                    </div>
                    <Button variant="primary">Más información</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle title="Próximos Eventos" center />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-[#d33b38] font-medium mb-2 flex items-center">
                    <Calendar size={16} className="mr-2" />
                    {event.date}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{event.description}</p>
                  <div className="mb-4 space-y-1">
                    <div className="flex items-center text-gray-600">
                      <MapPin size={16} className="mr-2" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock size={16} className="mr-2" />
                      {event.time}
                    </div>
                  </div>
                  <Button variant="secondary" size="sm">Más información</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#d33b38] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Quieres estar al tanto de todos nuestros eventos?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Suscríbete a nuestro boletín para recibir notificaciones sobre nuevos eventos, lanzamientos y promociones exclusivas.
          </p>
          <form className="flex flex-col sm:flex-row max-w-md mx-auto gap-2">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="flex-grow px-4 py-3 rounded focus:outline-none text-black"
              required
            />
            <Button variant="secondary" type="submit">
              Suscribirse
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Events;