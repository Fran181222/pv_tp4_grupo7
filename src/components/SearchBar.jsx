import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(input.trim());
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Buscar por ID o descripción"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        >
        Buscar
      </button>
    </form>
  );
};

export default SearchBar;
//xd