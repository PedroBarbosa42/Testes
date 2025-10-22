// src/Simulator.tsx
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import OptionsCarousel from './OptionsCarousel';

// --- DADOS DE EXEMPLO PARA AS RODAS (Mocados) ---
// Substitua '/images/wheels/...' pelos caminhos reais das suas imagens!
const wheelOptions = [
  { id: 'wheel-1', name: 'Esportiva 1', image: '/workspaces/Testes/autodata-visual-frontend/src/public/images/wheels/transferir 2.jfifwheel-1.png' },
  { id: 'wheel-2', name: 'Clássica 2', image: '/workspaces/Testes/autodata-visual-frontend/src/public/images/wheels/transferir 2.jfifwheel-2.png' },
  { id: 'wheel-3', name: 'Off-road 3', image: '/workspaces/Testes/autodata-visual-frontend/src/public/images/wheels/transferir 2.jfifwheel-3.png' },
  { id: 'wheel-4', name: 'Aero 4', image: '/workspaces/Testes/autodata-visual-frontend/src/public/images/wheels/transferir 2.jfifwheel-4.png' },
  { id: 'wheel-5', name: 'Raiada 5', image: '/workspaces/Testes/autodata-visual-frontend/src/public/images/wheels/transferir 2.jfifwheel-5.png' },
  { id: 'wheel-6', name: 'Multi-raio 6', image: '/workspaces/Testes/autodata-visual-frontend/src/public/images/wheels/transferir 2.jfifwheel-6.png' },
];
// --- FIM DOS DADOS DE EXEMPLO ---

function Simulator() {
  const [selectedCategory, setSelectedCategory] = useState('wheels'); // 'wheels', 'headlights', 'tint', 'colors'
  const [selectedWheel, setSelectedWheel] = useState(wheelOptions[0].id); // ID da roda selecionada

  return (
    <div className="flex h-screen overflow-hidden">
      {/* 1. Barra Lateral (Sidebar) */}
      <Sidebar
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* 2. Área Principal: Visualizador do Carro e Botões de Ação */}
      <main className="flex-1 flex flex-col relative bg-gray-800">
        {/* Botões de Ação (Topo Direito) */}
        <div className="absolute top-4 right-4 z-10 flex gap-2">
          <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm transition duration-200">
            Salvar Configuração
          </button>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-4 py-2 rounded-lg text-sm transition duration-200">
            Pedir Orçamento
          </button>
        </div>

        {/* Área do Visualizador do Carro (Placeholder por enquanto) */}
        <div className="flex-1 flex items-center justify-center p-4">
          {/*
            ***************************************************
            * AQUI É ONDE SEU COMPONENTE 3D (ex: CarVisualizer) IRIA
            *
            * Ex: <CarVisualizer
            * carModel="audi-a3" // Nome do modelo do carro
            * selectedWheelId={selectedWheel}
            * selectedHeadlightId={selectedCategory === 'headlights' ? 'your_headlight_id' : null}
            * // ...outras props para outras customizações
            * />
            *
            * Por enquanto, é um placeholder visual:
            ***************************************************
          */}
          <div className="relative w-4/5 h-4/5 flex items-center justify-center">
            {/* Exemplo de um Audi A3 (substitua pela sua renderização 3D real) */}
            <img
              src="https://www.audi.co.uk/content/dam/nemo/models/a3/a3-sportback/my23/1920x1080/1920x1080_AUDI_A3_2020_0005.jpg"
              alt="Carro de exemplo"
              className="max-w-full max-h-full object-contain"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-30 text-gray-400 text-lg">
              [Simulador 3D do Carro aqui]
              <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-white bg-black bg-opacity-50 px-3 py-1 rounded">
                Roda selecionada: {selectedWheel}
              </p>
            </div>
          </div>
        </div>

        {/* 3. Carrossel de Opções (Inferior), visível apenas para a categoria selecionada */}
        {selectedCategory === 'wheels' && (
          <OptionsCarousel
            options={wheelOptions}
            selectedOption={selectedWheel}
            onSelectOption={setSelectedWheel}
          />
        )}
        {/* Adicione mais blocos para outras categorias (faróis, etc.) se precisar */}
      </main>
    </div>
  );
}

export default Simulator;