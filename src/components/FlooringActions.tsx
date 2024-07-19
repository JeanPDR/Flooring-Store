"use client";

import React, { useState } from "react";

const FlooringActions: React.FC = () => {
  return (
    <section className="relative bg-gray-100 p-8 h-96 flex items-center justify-center">
      <div className="absolute inset-0">
        <img
          src="/images/background.jfif" // Substitua pelo caminho correto para sua imagem de fundo
          alt="Background"
          className="w-full h-full object-cover opacity-80"
        />
      </div>
    </section>
  );
};

export default FlooringActions;
