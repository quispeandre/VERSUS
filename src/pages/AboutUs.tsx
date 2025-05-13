import React from 'react';
import { Users, Award, Target, Heart } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const AboutUs: React.FC = () => {
  return (
    <div className="pt-16 md:pt-24">
      {/* Hero Section */}
      <div className="relative bg-black text-white py-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre Versus Importaciones</h1>
            <p className="text-xl text-gray-300 mb-8">
              Somos más que una tienda, somos una comunidad de fans apasionados por la cultura pop, los cómics, el cine y todo lo que acompaña este maravilloso universo.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://images.pexels.com/photos/7234223/pexels-photo-7234223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="About Us" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="md:flex md:items-center md:space-x-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <SectionTitle title="Nuestra Historia" />
              <div className="space-y-4">
                <p>
                  Versus Importaciones nació en 2015 con una simple pasión: traer productos de calidad a los fans peruanos que antes tenían que pagar sobrecostos exorbitantes para conseguir sus figuras y accesorios favoritos.
                </p>
                <p>
                  Lo que comenzó como un pequeño negocio en línea, rápidamente creció hasta convertirse en nuestra primera tienda física en 2017. Con la demanda creciente y el apoyo de nuestra comunidad, decidimos expandirnos en 2020 con nuestro innovador restaurante temático, creando así un espacio donde los fans no solo podían comprar, sino también vivir experiencias únicas.
                </p>
                <p>
                  Hoy, Versus Importaciones es reconocido como uno de los principales referentes en el mercado de coleccionables en Perú, con un catálogo de más de 5,000 productos y un restaurante que se ha convertido en punto de encuentro para fans de todas las edades.
                </p>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Our Story" 
                className="rounded-lg shadow-lg h-96 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle title="Nuestra Misión, Visión y Valores" center />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#d33b38] rounded-full mb-4">
                <Target size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Misión</h3>
              <p>
                Conectar a los fans con los productos que aman y crear espacios donde puedan compartir su pasión, ofreciendo la mejor experiencia de compra y servicio en cada interacción.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#d33b38] rounded-full mb-4">
                <Award size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Visión</h3>
              <p>
                Ser reconocidos como la comunidad líder para fans y coleccionistas en Latinoamérica, innovando constantemente en productos y experiencias que celebren la cultura pop.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#d33b38] rounded-full mb-4">
                <Heart size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Valores</h3>
              <ul className="text-left space-y-2">
                <li>• Pasión por lo que hacemos</li>
                <li>• Autenticidad en nuestros productos</li>
                <li>• Comunidad e inclusión</li>
                <li>• Innovación constante</li>
                <li>• Servicio excepcional</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Nuestro Equipo" 
            subtitle="Conoce a las personas apasionadas que hacen posible Versus Importaciones."
            center
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Alejandro Torres', position: 'Fundador & CEO', image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
              { name: 'Carolina Méndez', position: 'Directora de Operaciones', image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
              { name: 'Diego Sánchez', position: 'Chef Ejecutivo', image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
              { name: 'Valeria Rojas', position: 'Gerente de Marketing', image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 relative mx-auto w-48 h-48 rounded-full overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-[#d33b38]">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="md:flex md:items-center md:space-x-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="aspect-video rounded-lg overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Our Culture" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <SectionTitle title="Nuestra Cultura" />
              <div className="space-y-4 text-gray-300">
                <p>
                  En Versus Importaciones, creemos que la clave de nuestro éxito radica en nuestra cultura organizacional. Somos fans atendiendo a fans, lo que nos permite entender las necesidades y expectativas de nuestra comunidad.
                </p>
                <p>
                  Fomentamos un ambiente de trabajo colaborativo, donde cada miembro del equipo puede aportar ideas y crecer profesionalmente. Celebramos la diversidad y creemos que diferentes perspectivas enriquecen nuestra visión.
                </p>
                <p>
                  Nuestro compromiso es mantener viva la pasión que dio origen a este proyecto, asegurando que cada cliente que nos visita se sienta parte de nuestra familia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;