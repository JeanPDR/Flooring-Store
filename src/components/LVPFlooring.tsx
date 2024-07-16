import React from "react";
import Image from "next/image";

const LVPFlooring: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 p-4">
          <Image
            src="/images/rooms/LVP.png" // Substitua pelo caminho correto para sua imagem
            alt="LVP Flooring"
            width={500}
            height={750}
            className="rounded-md"
          />
        </div>
        <div className="md:w-1/2 p-4">
          <h2
            className="text-4xl font-bold mb-6"
            style={{ fontFamily: "'Corben', sans-serif", fontWeight: "400" }}
          >
            LVP Flooring
          </h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-indigo-100 text-indigo-700 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4">
                1
              </div>
              <div>
                <h3 className="text-xl font-light">Waterproof</h3>
                <p>Ideal for kitchens, bathrooms, and high-traffic areas.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-indigo-100 text-indigo-700 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4">
                2
              </div>
              <div>
                <h3 className="text-xl font-light">Durable</h3>
                <p>Scratch and stain-resistant, built to last.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-indigo-100 text-indigo-700 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4">
                3
              </div>
              <div>
                <h3 className="text-xl font-light">Easy Installation</h3>
                <p>Floating floor design for a quick and hassle-free setup.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-indigo-100 text-indigo-700 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4">
                4
              </div>
              <div>
                <h3 className="text-xl font-light">Versatile Styles</h3>
                <p>Wide range of colors, patterns, and wood-like textures.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LVPFlooring;
