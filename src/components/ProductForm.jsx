import React, { useState, useEffect } from 'react';

const ProductForm = ({ onAdd, onUpdate, editingProduct }) => {
  const initialState = {
    id: '',
    descripcion: '',
    precioUnitario: '',
    descuento: '',
    stock: ''
  };

  const [form, setForm] = useState(initialState);

  useEffect(() => {
    if (editingProduct) {
      setForm(editingProduct);
    } else {
      setForm(initialState);
    }
  }, [editingProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const id = parseInt(form.id);
    const precioUnitario = parseFloat(form.precioUnitario);
    const descuento = parseFloat(form.descuento);
    const stock = parseInt(form.stock);

    if (isNaN(id) || isNaN(precioUnitario) || isNaN(descuento) || isNaN(stock) || !form.descripcion) {
      alert('Todos los campos son obligatorios y deben tener valores válidos.');
      return;
    }

    const precioConDescuento = precioUnitario * (1 - descuento / 100);

    const newProduct = {
      id,
      descripcion: form.descripcion,
      precioUnitario,
      descuento,
      stock,
      precioConDescuento
    };

    if (editingProduct) {
      onUpdate(newProduct);
    } else {
      onAdd(newProduct);
    }

    setForm(initialState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        name="id"
        value={form.id}
        onChange={handleChange}
        placeholder="ID"
       />
      <input
        type="text"
        name="descripcion"
        value={form.descripcion}
        onChange={handleChange}
        placeholder="Descripción"
        />
      <input
        type="number"
        name="precioUnitario"
        value={form.precioUnitario}
        onChange={handleChange}
        placeholder="Precio Unitario"
        step="0.01"
      />
      <input
        type="number"
        name="descuento"
        value={form.descuento}
        onChange={handleChange}
        placeholder="Descuento (%)"
        step="0.01"
      />
      <input
        type="number"
        name="stock"
        value={form.stock}
        onChange={handleChange}
        placeholder="Stock"
      />
      <button type="submit">
        {editingProduct ? 'Guardar cambios' : 'Agregar producto'}
      </button>
    </form>
  );
};

export default ProductForm;