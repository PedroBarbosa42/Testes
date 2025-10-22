// src/OptionsCarousel.tsx
import React from 'react';

// 1. Definição da interface para cada objeto de opção (ex: uma roda)
interface Option {
  id: string;
  name: string;
  image: string; // Adicionei este campo para as URLs das imagens
}

// 2. Definição da interface para as props que o componente OptionsCarousel recebe
interface OptionsCarouselProps {
  options: Option[]; // Um array de objetos 'Option'
  selectedOption: string; // O ID da opção atualmente selecionada
  onSelectOption: (optionId: string) => void; // Função para lidar com a seleção de uma opção
}

// O componente agora recebe suas props com a tipagem definida
function OptionsCarousel({ options, selectedOption, onSelectOption }: OptionsCarouselProps) {
  return (
    <div className="w-full bg-gray-950 bg-opacity-80 backdrop-blur-sm border-t border-gray-800 p-4 overflow-x-auto">
      <div className="flex justify-center items-center gap-4 min-w-max">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => onSelectOption(option.id)}
            className={`
              w-20 h-20 flex-shrink-0 rounded-lg bg-gray-700
              border-2
              ${selectedOption === option.id ? 'border-orange-500 ring-2 ring-orange-500' : 'border-gray-600'}
              hover:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500
              flex items-center justify-center p-1
              transition duration-200
            `}
            title={option.name}
          >
            {/*
              IMPORTANTE: Aqui você deve descomentar e usar a imagem real da miniatura da roda.
              Garanta que o caminho em option.image é válido (ex: /images/wheels/roda-1.png).
            */}
            <img
              src={option.image}
              alt={option.name}
              className="w-full h-full object-cover rounded-md"
            />
            {/* Este span pode ser removido se a imagem for suficiente, ou ajustado para um tooltip */}
            {/* <span className="absolute text-xs text-white bg-black bg-opacity-50 px-1 rounded opacity-0 hover:opacity-100 transition duration-200">{option.name}</span> */}
          </button>
        ))}
      </div>
    </div>
  );
}

export default OptionsCarousel;