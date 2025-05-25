import React from 'react';

const ProductItem = ({ product, onEdit, onDelete }) => {
  const {
    id,
    descripcion,
    precioUnitario,
    descuento,
    precioConDescuento,
    stock
  } = product;

  return (
    <div>
      <p><strong>ID:</strong> {id}</p>
      <p><strong>Descripción:</strong> {descripcion}</p>
      <p><strong>Precio Unitario:</strong> ${precioUnitario.toFixed(2)}</p>
      <p><strong>Descuento:</strong> {descuento}%</p>
      <p><strong>Precio con Descuento:</strong> ${precioConDescuento.toFixed(2)}</p>
      <p><strong>Stock:</strong> {stock}</p>
      <div>
        <button
          onClick={() => onEdit(product)}
        >
          Editar
        </button>
        <button
          onClick={() => onDelete(id)}
          >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default ProductItem;