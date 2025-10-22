// src/Sidebar.js
import React from 'react';
// Importe ícones (ex: 'react-icons/fa')
// import { FaCar, FaPaintBrush, FaSun } from 'react-icons/fa'; 

function Sidebar({ selectedCategory, onSelectCategory }) {
  // Ícones (placeholders)
  const categories = [
  { id: 'wheels', name: 'Rodas', icon: <FaCarSide size={20} /> },
  { id: 'headlights', name: 'Faróis', icon: <FaLightbulb size={20} /> },
  { id: 'tint', name: 'Películas', icon: <FaSun size={20} /> },
  { id: 'colors', name: 'Cores', icon: <FaPaintBrush size={20} /> },
  ];

  return (
    <nav className="w-20 bg-gray-950 p-4 flex flex-col items-center gap-4 border-r border-gray-800">
      {/* Logo (placeholder) */}
      <div className="w-10 h-10 bg-gray-700 rounded-full mb-4"></div>

      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onSelectCategory(category.id)}
          className={`
            w-12 h-12 flex flex-col items-center justify-center rounded-lg 
            text-gray-400 hover:bg-gray-800 hover:text-white
            ${selectedCategory === category.id ? 'bg-gray-800 text-orange-500' : ''}
          `}
          title={category.name}
        >
          {/* <FaCar size={20} /> Substitua 'icon' pelo seu componente de ícone */}
          <span className="text-xs">{category.name}</span>
        </button>
      ))}
    </nav>
  );
}

export default Sidebar;