import React from "react";
import Contact from "./contact";

const FlooringActions: React.FC = () => {
  return (
    <section
      className="relative bg-gray-100 p-8 flex items-center h-[90%]"
      id="form"
    >
      <div className="absolute inset-0">
        <img
          src="/images/rooms/roomMaple.jpg" // Substitua pelo caminho correto para sua imagem de fundo
          alt="Background"
          className="w-full h-full object-cover opacity-80"
        />
      </div>
      <div className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto md:mx-0 md:ml-auto mt-16">
        <Contact />
      </div>
    </section>
  );
};

export default FlooringActions;
