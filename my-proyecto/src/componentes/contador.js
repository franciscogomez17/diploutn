'use client';

import React, { useState } from 'react';

// Componente de Cliente: Necesita interacción y estado
export function Contador() {
  const [contador, setContador] = useState(0);

  const handleClick = () => {
    setContador(contador + 1); // Actualiza el estado (exclusivo de cliente)
  };

  return (
    <div>
      <p>Has hecho clic {contador} veces.</p>
      {/* Manejo de Evento del lado del cliente */}
      <button onClick={handleClick}>
        Incrementar
      </button>
    </div>
  );
}
