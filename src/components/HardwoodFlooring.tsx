import React from "react";
import Image from "next/image";

const HardwoodFlooring: React.FC = () => {
  return (
    <section className=" flex flex-col md:flex-row items-center p-8 pl-[10%] pr-[10%] rounded">
      <div className="md:w-1/2 md:pr-8">
        <h2
          className="text-4xl  mb-8"
          style={{ fontFamily: "'Corben', sans-serif" }}
        >
          Hardwood Flooring
        </h2>
        <div className="space-y-4">
          <div className="bg-blue-100 p-4 rounded-lg">
            <h3 className="text-2xl font-light mb-2">Natural Beauty</h3>
            <p>
              Hardwood floors add timeless elegance and warmth to any space.
            </p>
          </div>
          <div className="bg-blue-100 p-4 rounded-lg">
            <h3 className="text-2xl font-light mb-2">Durability</h3>
            <p>Properly cared for, hardwood floors can last for decades.</p>
          </div>
          <div className="bg-blue-100 p-4 rounded-lg">
            <h3 className="text-2xl font-light mb-2">Customization</h3>
            <p>Choose from a variety of wood species, stains, and finishes.</p>
          </div>
          <div className="bg-blue-100 p-4 rounded-lg">
            <h3 className="text-2xl font-light mb-2">Increased Home Value</h3>
            <p>
              Hardwood floors are a valuable investment that can boost resale
              value.
            </p>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0">
        <Image
          src="/images/hallway_117.webp" // Substitua pelo caminho correto para sua imagem
          alt="Hardwood Flooring"
          width={600}
          height={900}
          className="rounded-lg"
        />
      </div>
    </section>
  );
};

export default HardwoodFlooring;
