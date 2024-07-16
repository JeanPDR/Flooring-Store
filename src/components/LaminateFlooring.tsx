import React from "react";
import Image from "next/image";

const LaminateFlooring: React.FC = () => {
  return (
    <section className="py-12  bg-gray-50">
      <div className=" container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 p-4">
          <Image
            src="/images/rooms/laminate.png" // Substitua pelo caminho correto para sua imagem
            alt="Laminate Flooring"
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
            Laminate Flooring
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-light">Wood-Like Appearance</h3>
              <p>Laminate replicates the look of authentic hardwood.</p>
            </div>
            <div>
              <h3 className="text-xl font-light">Scratch-Resistant</h3>
              <p>Durable surface withstands high traffic and daily wear.</p>
            </div>
            <div>
              <h3 className="text-xl font-light">Water-Resistant</h3>
              <p>Laminate is a great option for moisture-prone areas.</p>
            </div>
            <div>
              <h3 className="text-xl font-light">Cost-Effective</h3>
              <p>Laminate offers a more affordable flooring solution.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaminateFlooring;
