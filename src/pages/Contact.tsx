import React from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Users } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';

const Contact: React.FC = () => {
  return (
    <div className="pt-16 md:pt-24">
      {/* Hero Section */}
      <div className="relative bg-black text-white py-16">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contacto</h1>
            <p className="text-xl text-gray-300">
              Estamos aquí para ayudarte. No dudes en contactarnos por cualquier consulta o sugerencia.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://images.pexels.com/photos/821754/pexels-photo-821754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Contact" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Contact Info and Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <SectionTitle title="Información de Contacto" />
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-[#d33b38] p-3 rounded-full text-white mr-4">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Dirección</h3>
                    <p className="text-gray-600"></p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#d33b38] p-3 rounded-full text-white mr-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Teléfono</h3>
                    <p className="text-gray-600">(+51) 987-654-321</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#d33b38] p-3 rounded-full text-white mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email</h3>
                    <p className="text-gray-600">info@versusimport.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#d33b38] p-3 rounded-full text-white mr-4">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Horario</h3>
                    <p className="text-gray-600">Lunes a Viernes: 10:00 - 20:00</p>
                    <p className="text-gray-600">Sábados y Domingos: 11:00 - 21:00</p>
                  </div>
                </div>
              </div>
              
              <div className="rounded-lg overflow-hidden h-64 mt-8">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249744.01908152536!2d-77.12786830000001!3d-12.046373999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c5f619ee3ec7%3A0x14206cb9cc452e4a!2sLima!5e0!3m2!1ses-419!2spe!4v1635789677908!5m2!1ses-419!2spe" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  title="Ubicación de Versus Importaciones"
                />
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <SectionTitle title="Envíanos un Mensaje" />
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nombre completo <span className="text-[#d33b38]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d33b38]"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Correo electrónico <span className="text-[#d33b38]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d33b38]"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Asunto <span className="text-[#d33b38]">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d33b38]"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensaje <span className="text-[#d33b38]">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d33b38]"
                    required
                  ></textarea>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="privacy"
                    className="h-4 w-4 text-[#d33b38] focus:ring-[#d33b38] border-gray-300 rounded"
                    required
                  />
                  <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
                    He leído y acepto la política de privacidad
                  </label>
                </div>
                
                <div>
                  <Button 
                    variant="primary" 
                    type="submit" 
                    className="flex items-center justify-center"
                  >
                    <Send size={16} className="mr-2" />
                    Enviar mensaje
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Preguntas Frecuentes" 
            subtitle="Encuentra respuestas a las preguntas más comunes sobre nuestros productos y servicios."
            center
          />
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: '¿Realizan envíos internacionales?',
                answer: 'Sí, realizamos envíos internacionales a la mayoría de países de Latinoamérica. Los costos y tiempos de envío varían según la ubicación. Contáctanos para obtener información específica sobre tu país.'
              },
              {
                question: '¿Cuál es la política de devoluciones?',
                answer: 'Aceptamos devoluciones dentro de los 15 días posteriores a la compra, siempre que el producto se encuentre en su empaque original y en perfectas condiciones. Para iniciar un proceso de devolución, contáctanos por correo electrónico.'
              },
              {
                question: '¿Ofrecen servicio de regalo?',
                answer: 'Sí, ofrecemos servicio de envoltura de regalo por un costo adicional. Puedes solicitar este servicio durante el proceso de compra o contáctanos si deseas más información.'
              },
              {
                question: '¿Es necesario reservar para visitar el restaurante?',
                answer: 'No es obligatorio, pero es altamente recomendable, especialmente los fines de semana y días festivos. Puedes hacer tu reserva a través de nuestra página web, por teléfono o por WhatsApp.'
              },
              {
                question: '¿Tienen programas de membresía o lealtad?',
                answer: 'Sí, contamos con el programa "Versus Club" que ofrece beneficios exclusivos como descuentos, acceso prioritario a eventos y lanzamientos. Pregunta en tienda o contacta con nuestro servicio al cliente para más información.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 border border-gray-800 rounded-lg transition-transform hover:transform hover:scale-105">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#d33b38] rounded-full mb-4">
                <MessageSquare size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Chat en vivo</h3>
              <p className="text-gray-300 mb-4">Chatea con nuestro equipo de soporte en tiempo real.</p>
              <Button variant="outline">Iniciar chat</Button>
            </div>
            
            <div className="text-center p-6 border border-gray-800 rounded-lg transition-transform hover:transform hover:scale-105">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#d33b38] rounded-full mb-4">
                <Send size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
              <p className="text-gray-300 mb-4">Contáctanos directamente por WhatsApp para atención inmediata.</p>
              <Button variant="outline">Enviar mensaje</Button>
            </div>
            
            <div className="text-center p-6 border border-gray-800 rounded-lg transition-transform hover:transform hover:scale-105">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#d33b38] rounded-full mb-4">
                <Users size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Redes sociales</h3>
              <p className="text-gray-300 mb-4">Síguenos para estar al día con nuestras novedades.</p>
              <Button variant="outline">Ver perfiles</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;