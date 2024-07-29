"use client";

import React, { useState } from "react";

const CookieConsent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="fixed bottom-0 w-full bg-blue-500 text-white py-3 px-4 flex justify-between items-center">
      <span>
        Utilizamos cookies essenciais e tecnologias semelhantes de acordo com a
        nossa{" "}
        <span className="font-bold cursor-pointer" onClick={handleOpenModal}>
          POLÍTICA DE PRIVACIDADE
        </span>
        , e, ao continuar navegando, você concorda com estas condições.
      </span>
      <button
        onClick={() => setIsModalOpen(false)}
        className="bg-yellow-500 text-black py-2 px-4 rounded"
      >
        ENTENDI
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded shadow-lg w-3/4 md:w-1/2">
            <h2 className="text-2xl mb-4">Política de Privacidade</h2>
            <p>
              Insira aqui o texto detalhado sobre sua política de privacidade,
              LGPD, etc. Explique como os dados dos usuários são coletados,
              usados e protegidos.
            </p>
            <button
              onClick={handleCloseModal}
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CookieConsent;
