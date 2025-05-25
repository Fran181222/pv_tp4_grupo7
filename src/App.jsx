import React, { useState, useMemo, useCallback } from 'react';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import SearchBar from './components/SearchBar';
import './App.css'


const App = () => {
   const [products, setProducts] = useState([]);
   const [editingProduct, setEditingProduct] = useState(null);
   const [searchTerm, setSearchTerm] = useState('');

 const handleAdd = useCallback((product) => {
     setProducts(prev => {
       if (prev.find(p => p.id === product.id)) {
         alert('Ya existe un producto con ese ID.');
         return prev;
       }
       return [...prev, product];
     });
   }, []);

  // const handleUpdate = useCallback((updatedProduct) => {
  //   setProducts(prev => prev.map(p => p.id === updatedProduct.id ? updatedProduct : p));
  //   setEditingProduct(null);
  // }, []);

  // const handleDelete = useCallback((id) => {
  //   setProducts(prev => prev.filter(p => p.id !== id));
  // }, []);

  const handleSearch = useCallback((term) => {
    setSearchTerm(term);
  }, []);

   const handleEdit = useCallback((product) => {
     setEditingProduct(product);
   }, []);

  const filteredProducts = useMemo(() => {
  const term = searchTerm.toLowerCase();
  return products.filter(p =>
    p.descripcion.toLowerCase().includes(term) ||
    p.id.toString().includes(term)
  );
}, [products, searchTerm]);

  return (
    <div>
      <h1>Trabajo Practico 4</h1>
      <SearchBar onSearch={handleSearch} />
      {/* <ProductForm
        onAdd={handleAdd}
        onUpdate={handleUpdate}
        editingProduct={editingProduct}
      /> */}
      <ProductList
        products={filteredProducts}
         onEdit={handleEdit}
         onDelete={handleDelete}
      />
    </div>
  );
};

export default App;