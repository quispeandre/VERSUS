export const navItems = [
  {
    title: 'Inicio',
    path: '/',
  },
  {
    title: 'Catálogo',
    path: '/catalogo',
    children: [
      {
        title: 'Figuras de Acción',
        path: '/catalogo/figuras',
      },
      {
        title: 'Accesorios',
        path: '/catalogo/accesorios',
      },
      {
        title: 'Peluches',
        path: '/catalogo/peluches',
      },
      {
        title: 'Decoración y Hogar',
        path: '/catalogo/decoracion',
      },
    ],
  },
  {
    title: 'Restaurante',
    path: '/restaurante',
    children: [
      {
        title: 'Menú',
        path: '/restaurante/menu',
      },
      {
        title: 'Galería',
        path: '/restaurante/galeria',
      },
      {
        title: 'Reservaciones',
        path: '/restaurante/reservaciones',
      },
    ],
  },
  {
    title: 'Sobre Nosotros',
    path: '/sobre-nosotros',
  },
  {
    title: 'Eventos',
    path: '/eventos',
  },
  {
    title: 'Galería',
    path: '/galeria',
  },
  {
    title: 'Contacto',
    path: '/contacto',
  },
];