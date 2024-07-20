import React, { useState } from "react";
import Contact from "./contact";

const FlooringActions: React.FC = () => {
  return (
    <section className="relative bg-gray-100 p-8 flex items-center justify-center h-screen">
      <div className="absolute inset-0">
        <img
          src="/images/rooms/roomPorcini.jpg" // Substitua pelo caminho correto para sua imagem de fundo
          alt="Background"
          className="w-full h-full object-cover opacity-80"
        />
      </div>
      <div className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <Contact />
      </div>
    </section>
  );
};

export default FlooringActions;
