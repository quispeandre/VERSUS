"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, Shield, Swords, Hammer, Zap } from "lucide-react"
import Carousel from "../components/Carousel"
import SectionTitle from "../components/SectionTitle"
import Button from "../components/Button"
import { featuredProducts, categories, slides } from "../data/products"
import { motion, useScroll, useTransform } from "framer-motion"

const Home: React.FC = () => {
  // State for animations
  const [scrollY, setScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const scrollIndicatorRef = useRef<HTMLDivElement>(null)

  // Track scroll position for animations
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)

      // Check which elements are in viewport
      document.querySelectorAll(".animate-on-scroll").forEach((el) => {
        const rect = el.getBoundingClientRect()
        const isInViewport = rect.top <= window.innerHeight * 0.8

        if (isInViewport) {
          el.classList.add("animate-visible")
        }
      })

      // Determine active section for side navigation
      const sections = document.querySelectorAll("section")
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect()
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          setActiveSection(index)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Track mouse position for hover effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Add CSS for animations directly in the component
  useEffect(() => {
    // Create style element
    const style = document.createElement("style")

    // Add animation styles
    style.innerHTML = `
      /* Base animation classes */
      .animate-on-scroll {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.8s ease, transform 0.8s ease;
      }
      
      .animate-visible {
        opacity: 1;
        transform: translateY(0);
      }
      
      /* Delay classes */
      .delay-100 { transition-delay: 0.1s; }
      .delay-200 { transition-delay: 0.2s; }
      .delay-300 { transition-delay: 0.3s; }
      .delay-400 { transition-delay: 0.4s; }
      .delay-500 { transition-delay: 0.5s; }
      
      /* Hover animations */
      .hover-scale {
        transition: transform 0.5s ease, box-shadow 0.5s ease;
      }
      
      .hover-scale:hover {
        transform: translateY(-10px);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
      }
      
      /* Pulse animation */
      .pulse-animation {
        animation: pulse 2s infinite;
      }
      
      @keyframes pulse {
        0% {
          box-shadow: 0 0 0 0 rgba(143, 25, 30, 0.7);
        }
        70% {
          box-shadow: 0 0 0 10px rgba(143, 25, 30, 0);
        }
        100% {
          box-shadow: 0 0 0 0 rgba(143, 25, 30, 0);
        }
      }
      
      /* Shine effect */
      .shine-effect {
        position: relative;
        overflow: hidden;
      }
      
      .shine-effect::after {
        content: '';
        position: absolute;
        top: -100%;
        left: -100%;
        width: 50%;
        height: 300%;
        background: linear-gradient(
          to right,
          rgba(255, 255, 255, 0) 0%,
          rgba(255, 255, 255, 0.3) 50%,
          rgba(255, 255, 255, 0) 100%
        );
        transform: rotate(25deg);
        transition: transform 0.7s;
      }
      
      .shine-effect:hover::after {
        transform: rotate(25deg) translateX(300%);
      }
      
      /* Floating animation */
      .floating {
        animation: floating 3s ease-in-out infinite;
      }
      
      @keyframes floating {
        0% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-10px) rotate(5deg); }
        100% { transform: translateY(0px) rotate(0deg); }
      }
      
      /* Category card animations */
      .category-card {
        position: relative;
        overflow: hidden;
        transition: transform 0.5s ease, box-shadow 0.5s ease;
      }
      
      .category-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
      }
      
      .category-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 40%, rgba(0, 0, 0, 0) 100%);
        z-index: 1;
        transition: opacity 0.5s ease;
      }
      
      .category-card:hover::before {
        opacity: 0.9;
      }
      
      .category-card img {
        transition: transform 0.7s ease;
      }
      
      .category-card:hover img {
        transform: scale(1.1);
      }
      
      .category-card .category-content {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 1.5rem;
        z-index: 2;
        transition: transform 0.5s ease;
      }
      
      .category-card:hover .category-content {
        transform: translateY(-10px);
      }
      
      .category-card .category-icon {
        position: absolute;
        right: 1.5rem;
        bottom: 1.5rem;
        background: #8F191E;
        color: white;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transform: translateX(20px);
        transition: opacity 0.5s ease, transform 0.5s ease;
        z-index: 2;
      }
      
      .category-card:hover .category-icon {
        opacity: 1;
        transform: translateX(0);
      }
      
      /* Product card animations */
      .product-card {
        position: relative;
        transition: transform 0.5s ease, box-shadow 0.5s ease;
        height: 100%;
        display: flex;
        flex-direction: column;
      }
      
      .product-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
      }
      
      .product-card .product-image {
        position: relative;
        overflow: hidden;
        height: 260px; /* Fixed height for all product images */
        width: 100%;
      }
      
      .product-card .product-image img {
        width: 100%;
        height: 100%;
        object-fit: contain; /* Changed from cover to contain to avoid cutting off figures */
        transition: transform 0.7s ease;
        background-color: #f8f8f8; /* Light background to make products stand out */
      }
      
      .product-card:hover .product-image img {
        transform: scale(1.05);
      }
      
      .product-card .product-title {
        transition: color 0.3s ease;
      }
      
      .product-card:hover .product-title {
        color: #8F191E;
      }
      
      /* Restaurant section animations */
      .parallax-bg {
        position: relative;
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      }
      
      /* Button animations */
      .btn-hover-grow {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }
      
      .btn-hover-grow:hover {
        transform: scale(1.05);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
      }
      
      /* Scroll progress indicator */
      .scroll-progress {
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: #8F191E;
        z-index: 1000;
        transition: width 0.1s ease;
      }
      
      /* Marvel-themed floating icons */
      .marvel-icon {
        filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.5));
      }
      
      /* Restaurant section text */
      .restaurant-title {
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
        color: rgba(255, 255, 255, 0.95);
        letter-spacing: 1px;
        position: relative;
      }
      
      .restaurant-title::after {
        content: 'Experiencia Gastronómica Única';
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        color: white;
        filter: blur(1px);
        opacity: 0.8;
      }
      
      .restaurant-text {
        text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
      }
      
      .restaurant-buttons {
        filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3));
      }
    `

    // Add style to head
    document.head.appendChild(style)

    // Clean up
    return () => {
      document.head.removeChild(style)
    }
  }, [])

  // Update scroll progress indicator
  useEffect(() => {
    // Fix: Use ref instead of querySelector
    if (scrollIndicatorRef.current) {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (winScroll / height) * 100
      // Fix: Use proper TypeScript typing for style property
      scrollIndicatorRef.current.style.width = `${scrolled}%`
    }
  }, [scrollY])

  // Floating elements animation
  const floatingAnimation = {
    y: [0, -10, 0],
    rotate: [0, 5, 0],
    transition: {
      duration: 3,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  }

  // Parallax effect for background elements
  const getParallaxStyle = (depth = 0.1) => {
    if (typeof window === "undefined") return {}

    const x = (mousePosition.x - window.innerWidth / 2) * depth
    const y = (mousePosition.y - window.innerHeight / 2) * depth

    return {
      transform: `translate(${x}px, ${y}px)`,
    }
  }

  return (
    <div className="pt-3 md:pt-12 overflow-x-hidden" ref={containerRef}>
      {/* Scroll Progress Indicator */}
      <div className="scroll-progress" ref={scrollIndicatorRef}></div>

      {/* Side Navigation Dots */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden md:block">
        <div className="flex flex-col gap-4">
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <a
                key={index}
                href={`#section-${index}`}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeSection === index ? "bg-[#8F191E] scale-125" : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Navigate to section ${index + 1}`}
              />
            ))}
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#8F191E]/5 blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-40 right-20 w-80 h-80 rounded-full bg-blue-500/5 blur-3xl"
          animate={{
            x: [0, -70, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      {/* Hero Carousel */}
      <section id="section-0" className="relative">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <Carousel slides={slides} />
        </motion.div>

        {/* Marvel-themed floating decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <motion.div
            className="absolute top-[20%] left-[10%] text-[#8F191E] marvel-icon"
            animate={floatingAnimation}
            style={getParallaxStyle(0.05)}
          >
            <Shield size={36} strokeWidth={1.5} />
          </motion.div>
          <motion.div
            className="absolute top-[30%] right-[15%] text-[#8F191E] marvel-icon"
            animate={floatingAnimation}
            transition={{ delay: 0.5, ...floatingAnimation.transition }}
            style={getParallaxStyle(0.08)}
          >
            <Hammer size={30} strokeWidth={1.5} />
          </motion.div>
          <motion.div
            className="absolute bottom-[25%] left-[20%] text-[#8F191E] marvel-icon"
            animate={floatingAnimation}
            transition={{ delay: 1, ...floatingAnimation.transition }}
            style={getParallaxStyle(0.06)}
          >
            <Swords size={34} strokeWidth={1.5} />
          </motion.div>
          <motion.div
            className="absolute bottom-[35%] right-[25%] text-[#8F191E] marvel-icon"
            animate={floatingAnimation}
            transition={{ delay: 1.5, ...floatingAnimation.transition }}
            style={getParallaxStyle(0.07)}
          >
            <Zap size={32} strokeWidth={1.5} />
          </motion.div>
        </div>
      </section>

      {/* Categories - Enhanced with better animations */}
      <section id="section-1" className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="animate-on-scroll">
            <SectionTitle
              title="Categorías"
              subtitle="Explora nuestras colecciones exclusivas de productos para fans."
              center
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
            {categories.map((category, index) => (
              <div key={category.title} className={`animate-on-scroll delay-${(index % 4) * 100}`}>
                <div className="category-card rounded-xl overflow-hidden shadow-md">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="category-content">
                    <h3 className="text-xl font-bold text-white mb-1">{category.title}</h3>
                    <p className="text-sm text-gray-200">{category.count} productos</p>
                  </div>
                  <Link to={category.link} className="category-icon">
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Animated background pattern */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg
            className="absolute right-0 top-0 h-full text-[#8F191E]/[0.02]"
            width="400"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M0,0 L100,0 L100,100 L0,100 Z"
              fill="currentColor"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              viewport={{ once: true }}
            />
          </svg>
        </div>
      </section>

      {/* Featured Products */}
      <section id="section-2" className="py-20 bg-gray-50 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12">
            <div className="animate-on-scroll">
              <SectionTitle
                title="Productos Destacados"
                subtitle="Descubre los artículos más populares entre nuestros clientes."
              />
            </div>
            <Link
              to="/catalogo"
              className="animate-on-scroll delay-200 inline-flex items-center text-[#8F191E] font-medium hover:underline mt-4 md:mt-0 group"
            >
              Ver todo el catálogo
              <ArrowRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.slice(0, 8).map((product, index) => (
              <div key={product.id} className={`animate-on-scroll delay-${(index % 4) * 100}`}>
                <div className="product-card bg-white rounded-xl overflow-hidden shadow-md">
                  <div className="product-image">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-contain"
                    />

                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-2">
                      {product.isNew && (
                        <span className="bg-[#8F191E] text-white text-xs font-bold px-2.5 py-1.5 rounded">NUEVO</span>
                      )}
                      {product.isSale && (
                        <span className="bg-black text-white text-xs font-bold px-2.5 py-1.5 rounded">OFERTA</span>
                      )}
                    </div>
                  </div>

                  <div className="p-5 flex-grow">
                    <Link to={`/producto/${product.id}`}>
                      <p className="text-sm text-[#8F191E] font-medium mb-1">{product.category}</p>
                      <h3 className="product-title text-lg font-bold mb-2">{product.name}</h3>
                      <p className="text-xl">Bs {product.price}</p>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Animated background pattern */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute left-0 top-0 w-full h-full"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(143, 25, 30, 0.05) 0%, transparent 50%)`,
              transition: "background 0.3s ease",
            }}
          />
        </div>
      </section>

      {/* Restaurant Promo - with parallax effect and improved text visibility */}
      <section id="section-3" className="py-24 relative parallax-bg">
        <motion.div className="absolute inset-0 z-0" style={{ y: useTransform(scrollYProgress, [0, 1], [0, 40]) }}>
          <img
            src="https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Restaurant background"
            className="w-full h-full object-cover"
          />
          {/* Darker overlay for better text visibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center text-white animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight restaurant-title mix-blend-overlay">
              Experiencia Gastronómica Única
            </h2>
            <p className="text-xl mb-10 restaurant-text">
              Visita nuestro restaurante temático y disfruta de platillos inspirados en tus personajes favoritos en un
              ambiente increíble.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center restaurant-buttons">
              <Button variant="primary" size="lg" className="bg-[#8F191E] hover:bg-[#7a1319] text-white">
                <Link to="/restaurante/menu">Ver Menú</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link to="/restaurante/reservaciones">Reservar Mesa</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Marvel-themed floating food icons */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute top-[20%] left-[10%] text-white/40 floating marvel-icon"
            style={{ animationDelay: "0s" }}
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7z" />
            </svg>
          </div>
          <div
            className="absolute top-[60%] right-[15%] text-white/40 floating marvel-icon"
            style={{ animationDelay: "1s" }}
          >
            {/* Simplified Iron Man helmet icon */}
            <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L4 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-8-3zm0 2.08L18 7v4c0 4.52-3.13 8.72-6 9.93-2.87-1.21-6-5.41-6-9.93V7l6-2.92z" />
            </svg>
          </div>
          <div
            className="absolute bottom-[30%] left-[25%] text-white/40 floating marvel-icon"
            style={{ animationDelay: "2s" }}
          >
            {/* Simplified Captain America shield icon */}
            <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
              <circle cx="12" cy="12" r="5" />
            </svg>
          </div>
        </div>
      </section>

      {/* Events and Promotions */}
      <section id="section-4" className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="animate-on-scroll">
            <SectionTitle
              title="Eventos y Promociones"
              subtitle="Mantente al tanto de nuestros próximos eventos y promociones especiales."
              center
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="animate-on-scroll shine-effect bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 relative z-10">
              <div className="overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/7234256/pexels-photo-7234256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Comic Con"
                  className="w-full h-56 object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <div className="p-7">
                <div className="text-sm text-[#8F191E] font-medium mb-2">10-12 Junio, 2025</div>
                <h3 className="text-xl font-bold mb-3 transition-colors duration-300 hover:text-[#8F191E]">
                  Comic Con Lima 2025
                </h3>
                <p className="text-gray-600 mb-5">
                  Visítanos en la Comic Con Lima 2025, donde tendremos un stand con productos exclusivos y muchas
                  sorpresas.
                </p>
                <Button
                  variant="secondary"
                  size="sm"
                  className="hover:bg-[#8F191E] hover:text-white transition-colors duration-300"
                >
                  Más información
                </Button>
              </div>
            </div>

            <div className="animate-on-scroll delay-200 shine-effect bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 relative z-10">
              <div className="overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/4997875/pexels-photo-4997875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Lanzamiento"
                  className="w-full h-56 object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <div className="p-7">
                <div className="text-sm text-[#8F191E] font-medium mb-2">25 Mayo, 2025</div>
                <h3 className="text-xl font-bold mb-3 transition-colors duration-300 hover:text-[#8F191E]">
                  Lanzamiento Colección Marvel
                </h3>
                <p className="text-gray-600 mb-5">
                  No te pierdas el lanzamiento de nuestra nueva colección de figuras exclusivas de Marvel.
                </p>
                <Button
                  variant="secondary"
                  size="sm"
                  className="hover:bg-[#8F191E] hover:text-white transition-colors duration-300"
                >
                  Más información
                </Button>
              </div>
            </div>

            <div className="animate-on-scroll delay-400 shine-effect bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 relative z-10">
              <div className="overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/5708879/pexels-photo-5708879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Taller"
                  className="w-full h-56 object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <div className="p-7">
                <div className="text-sm text-[#8F191E] font-medium mb-2">Todos los sábados</div>
                <h3 className="text-xl font-bold mb-3 transition-colors duration-300 hover:text-[#8F191E]">
                  Taller de Pintura de Figuras
                </h3>
                <p className="text-gray-600 mb-5">
                  Aprende a personalizar tus figuras de acción en nuestros talleres semanales con expertos.
                </p>
                <Button
                  variant="secondary"
                  size="sm"
                  className="hover:bg-[#8F191E] hover:text-white transition-colors duration-300"
                >
                  Más información
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Animated background pattern */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <svg
            className="absolute left-0 bottom-0 w-full h-40 text-gray-50"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              fill="currentColor"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
            />
          </svg>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-black relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-[#8F191E]/10"></div>

        {/* Animated particles */}
        {Array(15)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/20 floating"
              style={{
                width: Math.random() * 10 + 5 + "px",
                height: Math.random() * 10 + 5 + "px",
                left: Math.random() * 100 + "%",
                top: Math.random() * 100 + "%",
                animationDuration: Math.random() * 3 + 2 + "s",
                animationDelay: Math.random() * 2 + "s",
              }}
            />
          ))}

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-xl mx-auto text-center animate-on-scroll">
            <h2 className="text-3xl font-bold text-white mb-5">Únete a nuestra comunidad</h2>
            <p className="text-gray-300 mb-8">
              Suscríbete a nuestro boletín para recibir las últimas novedades, lanzamientos y promociones exclusivas.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="flex-grow px-5 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8F191E] transition-all duration-300"
                required
              />
              <Button
                variant="primary"
                type="submit"
                className="bg-[#8F191E] hover:bg-[#7a1319] text-white btn-hover-grow"
              >
                Suscribirse
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Scroll to top button */}
      {scrollY > 500 && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 bg-[#8F191E] text-white p-3 rounded-full shadow-lg z-50 hover:bg-[#7a1319] transition-colors duration-300"
          aria-label="Volver arriba"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 15l-6-6-6 6" />
          </svg>
        </button>
      )}
    </div>
  )
}

export default Home
