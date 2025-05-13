"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Link, NavLink } from "react-router-dom"
import { Menu, X, Search, ChevronDown } from "lucide-react"
import { navItems } from "../data/navigation"
import Logo from "./Logo"

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isMediumScreen, setIsMediumScreen] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMediumScreen(window.innerWidth <= 1024 && window.innerWidth >= 768)
    }

    // Comprobar al cargar
    checkScreenSize()

    // Comprobar al cambiar el tamaño de la ventana con debounce para mejor rendimiento
    let timeoutId: ReturnType<typeof setTimeout>
    const handleResize = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(checkScreenSize, 100)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      clearTimeout(timeoutId)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Función para manejar el toggle del menú móvil
  const handleMenuToggle = () => {
    setIsOpen(!isOpen)
    // Si estamos cerrando el menú, resetear los dropdowns activos
    if (isOpen) {
      setActiveDropdown(null)
    }
  }

  const toggleDropdown = (title: string) => {
    setActiveDropdown((prev) => (prev === title ? null : title))
  }

  // Bloquear el scroll cuando el menú está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <>
      <header
        className={`${
          scrolled
            ? "bg-gradient-to-r from-black/95 via-black/90 to-black/95 backdrop-blur-md shadow-lg py-1 sm:py-2"
            : "bg-gradient-to-r from-black/90 via-black/85 to-black/90 py-2 sm:py-3 md:py-4"
        } fixed top-0 left-0 right-0 z-40 transition-all duration-500`}
      >
        <div className="container mx-auto px-2 sm:px-4">
          <div className="flex justify-between items-center">
            <Logo />

            {/* Desktop Navigation - Optimizado para 1024x768 */}
            <nav className={`hidden ${isMediumScreen ? "md:flex" : "lg:flex"} items-center space-x-1`}>
              {navItems.map((item) => (
                <div key={item.title} className="relative group">
                  {item.children ? (
                    <div className="relative group">
                      <button
                        className={`py-2 ${
                          isMediumScreen ? "px-2 text-sm" : "px-3"
                        } font-medium text-white hover:text-[#d33b38] transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#d33b38] after:transition-all after:duration-300 hover:after:w-full flex items-center gap-1`}
                        type="button"
                        aria-haspopup="true"
                      >
                        {item.title}{" "}
                        <ChevronDown
                          size={isMediumScreen ? 14 : 16}
                          className="transition-transform duration-300 group-hover:rotate-180"
                        />
                      </button>
                      <div className="absolute left-0 top-full opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-black/95 border border-zinc-800 rounded-md min-w-[180px] z-50 shadow-lg">
                        <div className="py-2">
                          {item.children.map((child) => (
                            <NavLink
                              key={child.title}
                              to={child.path}
                              className={({ isActive }) =>
                                `block px-4 py-2 ${
                                  isMediumScreen ? "text-sm" : ""
                                } text-white hover:text-[#d33b38] hover:bg-white/5 transition-colors ${
                                  isActive ? "text-[#d33b38]" : ""
                                }`
                              }
                            >
                              {child.title}
                            </NavLink>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `py-2 ${
                          isMediumScreen ? "px-2 text-sm" : "px-3"
                        } font-medium text-white hover:text-[#d33b38] transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#d33b38] after:transition-all after:duration-300 hover:after:w-full ${
                          isActive ? "text-[#d33b38]" : ""
                        }`
                      }
                    >
                      {item.title}
                    </NavLink>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop Icons */}
            <div
              className={`hidden ${isMediumScreen ? "md:flex" : "lg:flex"} items-center ${isMediumScreen ? "space-x-3" : "space-x-6"}`}
            >
              <button
                className="text-white hover:text-[#d33b38] transition-all duration-300 hover:scale-110"
                aria-label="Search"
                type="button"
              >
                <Search size={isMediumScreen ? 18 : 22} />
              </button>
            </div>

            {/* Mobile menu button - Ahora también visible en pantallas medianas si es necesario */}
            <button
              onClick={handleMenuToggle}
              className={`${isMediumScreen ? "md:hidden" : "lg:hidden"} text-white focus:outline-none z-50 p-2 hover:bg-white/10 rounded-full transition-colors`}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              type="button"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation - Ahora como un overlay independiente */}
      {isOpen && (
        <div
          className={`fixed inset-0 bg-black/95 z-50 ${isMediumScreen ? "md:hidden" : "lg:hidden"} overflow-auto pt-16`}
        >
          <div className="absolute top-4 right-4">
            <button
              onClick={handleMenuToggle}
              className="text-white p-2 hover:bg-white/10 rounded-full transition-colors"
              aria-label="Close menu"
              type="button"
            >
              <X size={24} />
            </button>
          </div>

          <div className="container mx-auto px-4 py-6 sm:py-8">
            <div className="flex flex-col space-y-4 sm:space-y-6">
              {navItems.map((item) => (
                <div key={item.title} className="border-b border-zinc-800 pb-4">
                  {item.children ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(item.title)}
                        className="text-white font-medium text-xl mb-2 flex items-center justify-between w-full"
                        type="button"
                      >
                        <span>{item.title}</span>
                        <ChevronDown
                          size={20}
                          className={`transition-transform duration-300 ${
                            activeDropdown === item.title ? "rotate-180 text-[#d33b38]" : ""
                          }`}
                        />
                      </button>
                      <div
                        className={`ml-4 flex flex-col space-y-3 transition-all duration-300 ${
                          activeDropdown === item.title
                            ? "max-h-[500px] opacity-100"
                            : "max-h-0 opacity-0 overflow-hidden"
                        }`}
                      >
                        {item.children.map((child) => (
                          <NavLink
                            key={child.title}
                            to={child.path}
                            className={({ isActive }) =>
                              `text-gray-300 hover:text-[#d33b38] transition-colors py-1 ${
                                isActive ? "text-[#d33b38]" : ""
                              }`
                            }
                            onClick={() => setIsOpen(false)}
                          >
                            {child.title}
                          </NavLink>
                        ))}
                      </div>
                    </>
                  ) : (
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `text-white font-medium text-xl hover:text-[#d33b38] transition-colors block ${
                          isActive ? "text-[#d33b38]" : ""
                        }`
                      }
                      onClick={() => setIsOpen(false)}
                    >
                      {item.title}
                    </NavLink>
                  )}
                </div>
              ))}

              <div className="flex justify-center space-x-10 pt-6">
                <Link
                  to="/search"
                  className="text-white hover:text-[#d33b38] transition-all duration-300 hover:scale-110"
                  onClick={() => setIsOpen(false)}
                  aria-label="Search"
                >
                  <Search size={24} />
                </Link>
                <Link
                  to="/account"
                  className="text-white hover:text-[#d33b38] transition-all duration-300 hover:scale-110"
                  onClick={() => setIsOpen(false)}
                  aria-label="Account"
                ></Link>
                <Link
                  to="/cart"
                  className="text-white hover:text-[#d33b38] transition-all duration-300 hover:scale-110 relative"
                  onClick={() => setIsOpen(false)}
                  aria-label="Cart"
                >
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Logo brands strip */}
      <div className="bg-white py-3 sm:py-4 border-t border-b border-gray-200 mt-[60px] sm:mt-[70px] md:mt-[80px] overflow-hidden w-full">
        <div className="animate-marquee flex space-x-8 sm:space-x-12 md:space-x-16 px-2 sm:px-4">
          {[
            { name: "Star Wars", src: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg" },
            { name: "Marvel", src: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Marvel_Logo.svg" },
            { name: "DC", src: "https://upload.wikimedia.org/wikipedia/commons/3/3d/DC_Comics_logo.svg" },
            { name: "Disney", src: "https://pngimg.com/uploads/walt_disney/walt_disney_PNG5.png" },
            {
              name: "Pokémon",
              src: "https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pokémon_logo.svg",
            },
            // Duplicates for seamless loop
            { name: "Star Wars", src: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg" },
            { name: "Marvel", src: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Marvel_Logo.svg" },
            { name: "DC", src: "https://upload.wikimedia.org/wikipedia/commons/3/3d/DC_Comics_logo.svg" },
            { name: "Disney", src: "https://pngimg.com/uploads/walt_disney/walt_disney_PNG5.png" },
            {
              name: "Pokémon",
              src: "https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pokémon_logo.svg",
            },
          ].map((brand, index) => (
            <Link
              key={index}
              to={`/collections/${brand.name.toLowerCase().replace(" ", "-")}`}
              className="group flex items-center justify-center transition-transform duration-300 hover:scale-105"
            >
              <img
                src={brand.src || "/placeholder.svg"}
                alt={brand.name}
                className="h-6 sm:h-8 md:h-10 lg:h-12 object-contain transition-transform duration-500"
                onError={(e) => {
                  e.currentTarget.src = "/placeholder.svg"
                }}
              />
            </Link>
          ))}
        </div>
      </div>

      {/* Marquee animation styles */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
          width: max-content;
          will-change: transform;
        }
        @media (max-width: 640px) {
          .animate-marquee {
            animation-duration: 15s;
          }
        }
        @media (max-width: 480px) {
          .animate-marquee {
            animation-duration: 12s;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation: none;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  )
}

export default Header
