"use client";

import React, { useState } from "react";

const FlooringActions: React.FC = () => {
  const [isShopModalOpen, setShopModalOpen] = useState(false);
  const [isQuoteModalOpen, setQuoteModalOpen] = useState(false);
  const [isImageModalOpen, setImageModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const flooringItems = [
    {
      name: "OYSTER",
      image: "/images/floors/colorOyster.jpg",
      fullImage: "/images/rooms/roomOyster.jpg",
    },
    {
      name: "PORCINI",
      image: "/images/floors/colorPorcini.jpg",
      fullImage: "/images/rooms/roomPorcini.jpg",
    },
    {
      name: "OAT",
      image: "/images/floors/colorOat.jpg",
      fullImage: "/images/rooms/roomOat.jpg",
    },
    {
      name: "CARAMEL",
      image: "/images/floors/colorCaramel.jpg",
      fullImage: "/images/rooms/roomCaramel.jpg",
    },
    {
      name: "BISCOTTI",
      image: "/images/floors/colorBiscotti.jpg",
      fullImage: "/images/rooms/roomBiscotti.jpg",
    },
    {
      name: "MAPLE",
      image: "/images/floors/colorMaple.jpg",
      fullImage: "/images/rooms/roomMaple.jpg",
    },
    {
      name: "BONBON",
      image: "/images/floors/colorBonbon.jpg",
      fullImage: "/images/rooms/roomBonbon.jpg",
    },
    {
      name: "TRUFFLE",
      image: "/images/floors/colorTruffle.jpg",
      fullImage: "/images/rooms/roomTruffle.jpg",
    },
    {
      name: "MOCHA",
      image: "/images/floors/colorMocha.jpg",
      fullImage: "/images/rooms/roomMocha.jpg",
    },
  ];

  const handleImageClick = (fullImage: string) => {
    setSelectedImage(fullImage);
    setImageModalOpen(true);
  };

  return (
    <section className="relative bg-gray-100 p-8 h-96 flex items-center justify-center">
      <div className="absolute inset-0">
        <img
          src="/images/background.jpg" // Substitua pelo caminho correto para sua imagem de fundo
          alt="Background"
          className="w-full h-full object-cover opacity-80"
        />
      </div>
      <div className="relative z-10 flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-4">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 flex items-center"
          onClick={() => setShopModalOpen(true)}
        >
          Shop Flooring
        </button>
        <button
          className="bg-white text-blue-500 py-2 px-4 rounded border border-blue-500 hover:bg-blue-100 flex items-center"
          onClick={() => setQuoteModalOpen(true)}
        >
          Request Quote
        </button>
      </div>

      {/* Shop Flooring Modal */}
      {isShopModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
          <div className="bg-white p-8 rounded shadow-lg max-w-4xl w-full max-h-full overflow-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl">Shop Flooring</h2>
              <button
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                onClick={() => setShopModalOpen(false)}
              >
                Close
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {flooringItems.map((item, index) => (
                <div
                  key={index}
                  className="border rounded overflow-hidden cursor-pointer"
                  onClick={() => handleImageClick(item.fullImage)}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  <div
                    className=" text-black text-left  py-2"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      marginLeft: "7px",
                    }}
                  >
                    {item.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Request Quote Modal */}
      {isQuoteModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
          <div className="bg-white p-8 rounded shadow-lg">
            <h2 className="text-2xl mb-4">Request Quote</h2>
            <p>Here is some content for the Request Quote modal.</p>
            <button
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              onClick={() => setQuoteModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Image Modal */}
      {isImageModalOpen && selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-30">
          <div className="relative bg-transparent p-8 rounded shadow-lg max-w-full max-h-full overflow-auto">
            <button
              className="absolute top-4 right-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
              onClick={() => setImageModalOpen(false)}
            >
              X
            </button>
            <img
              src={selectedImage}
              alt="Selected Flooring"
              className="w-[700px] h-auto"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default FlooringActions;
