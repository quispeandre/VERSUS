export const featuredProducts = [
  {
    id: 'prod1',
    name: 'Figura Batman - DC Comics',
    price: 5600,
    image: '/Figuras/Batman.jpg',
    category: 'Figuras DC',
    isNew: true,
  },
  {
    id: 'prod2',
    name: 'Figura Black Widow - Marvel',
    price: 5000,
    image: '/Figuras/Black_Widow.jpg',
    category: 'Figuras Marvel',
  },
  {
    id: 'prod3',
    name: 'Figura Loki - Marvel',
    price: 6000,
    image: '/Figuras/Loki.jpg',
    category: 'Figuras Marvel',
    isSale: true,
  },
  {
    id: 'prod4',
    name: 'Figura Thanos - Marvel',
    price: 5500,
    image: '/Figuras/Thanos.jpg',
    category: 'Figuras Marvel',
  },
  {
    id: 'prod5',
    name: 'Billetera Spiderman',
    price: 100,
    image: '/Figuras/Billetera-Spiderman.png',
    category: 'Accesorios Marvel',
  },
  {
    id: 'prod6',
    name: 'Billetera Mario Bros',
    price: 100,
    image: '/Figuras/Billetera-Mario.png',
    category: 'Accesorios Nintendo',
  },
  {
    id: 'prod7',
    name: 'Billetera Dragon Ball',
    price: 100,
    image: '/Figuras/Billetera-dragonBall.png',
    category: 'Accesorios Anime',
    isNew: true,
  },
  {
    id: 'prod8',
    name: 'Billetera One Piece Luffy',
    price: 100,
    image: '/Figuras/Billetera-one-piece-lufi.png',
    category: 'Accesorios Anime',
  },
];

export const categories = [
  {
    title: 'Figuras de Acción',
    image: 'https://images.pexels.com/photos/12872550/pexels-photo-12872550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: '/catalogo/figuras',
    count: 124,
  },
  {
    title: 'Accesorios',
    image: 'https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: '/catalogo/accesorios',
    count: 86,
  },
  {
    title: 'Peluches',
    image: 'https://images.pexels.com/photos/3661243/pexels-photo-3661243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: '/catalogo/peluches',
    count: 52,
  },
  {
    title: 'Decoración y Hogar',
    image: 'https://images.pexels.com/photos/844297/pexels-photo-844297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: '/catalogo/decoracion',
    count: 78,
  },
];
  
export const slides = [
  {
    video: "https://www.youtube.com/watch?v=TseBlCmwFLc",
    title: "Thunderbolts",
    subtitle: "Un grupo de antihéroes se une para una misión especial",
    buttonText: "Explorar figuras Marvel",
    buttonLink: "/catalogo/figuras",
  },
  {
    video: "https://www.youtube.com/watch?v=big1YWw_TgM",
    title: "Los Cuatro Fantásticos: Primeros Pasos",
    subtitle: "La llegada de los Cuatro Fantásticos al MCU",
    buttonText: "Ver colección Marvel",
    buttonLink: "/catalogo/figuras",
  },
  {
    video: "https://www.youtube.com/watch?v=wl2I9HOovUQ",
    title: "Capitán América: Un Nuevo Mundo",
    subtitle: "Sam Wilson asume el manto de Capitán América",
    buttonText: "Ver figuras de Capitán América",
    buttonLink: "/catalogo/figuras",
  },
];
