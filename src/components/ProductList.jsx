// components/ProductList.jsx
import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ products, onEdit, onDelete }) => {
  if (products.length === 0) {
    return <p>No hay productos para mostrar.</p>;
  }

  return (
    <div>
      {products.map(product => (
        <ProductItem
          key={product.id}
          product={product}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default ProductList;