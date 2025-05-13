import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import ProductCard from '../components/ProductCard';
import { featuredProducts } from '../data/products';

const CatalogMain = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <SectionTitle title="Catálogo Completo" subtitle="Explora nuestra colección completa de productos." />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            category={product.category}
            isNew={product.isNew}
            isSale={product.isSale}
          />
        ))}
      </div>
    </div>
  );
};

const CategoryTemplate = ({ title, products }: { title: string, products: typeof featuredProducts }) => {
  return (
    <div className="container mx-auto px-4 py-12">
      <SectionTitle title={title} subtitle={`Explora nuestra colección de ${title.toLowerCase()}.`} />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              category={product.category}
              isNew={product.isNew}
              isSale={product.isSale}
            />
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500">No hay productos disponibles en esta categoría.</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Catalog: React.FC = () => {
  // Filter products by category
  const figuras = featuredProducts.filter(p => p.category.includes('Figuras'));
  const accesorios = featuredProducts.filter(p => p.category.includes('Accesorios'));
  const peluches = featuredProducts.filter(p => p.category.includes('Peluche'));
  const decoracion = featuredProducts.filter(p => p.category.includes('Decoración'));
  
  return (
    <div className="pt-16 md:pt-24">
      <Routes>
        <Route index element={<CatalogMain />} />
        <Route path="figuras" element={<CategoryTemplate title="Figuras de Acción" products={figuras} />} />
        <Route path="accesorios" element={<CategoryTemplate title="Accesorios" products={accesorios} />} />
        <Route path="peluches" element={<CategoryTemplate title="Peluches" products={peluches} />} />
        <Route path="decoracion" element={<CategoryTemplate title="Decoración y Hogar" products={decoracion} />} />
      </Routes>
    </div>
  );
};

export default Catalog;