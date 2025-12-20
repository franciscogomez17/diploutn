'use client';

import React, { useState } from 'react';

export function BotonLuz() {
  // Inicialización del Estado
  const [isOn, setIsOn] = useState(true); // true -> encendido

  // Manejo del Click
  const handleToggle = () => {
    // operador ! -> negacion
    setIsOn(!isOn); // false -> apagado
  };

  return (
    <button onClick={handleToggle}>
      {/* Texto dinamico basado en el estado */}
      {isOn ? 'Encendido' : 'Apagado'}
    </button>
  );
}
