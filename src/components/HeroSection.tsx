"use client";

import Image from "next/image";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="mt-[100px] flex items-center justify-center bg-gray-100 p-8">
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex-1 flex justify-center animate-slideInRight">
          <Image
            src="/images/Transparent-Logo.avif" // Substitua pelo caminho correto para sua imagem de logo
            alt="PNV Flooring Logo"
            width={400} // Ajuste o tamanho conforme necessário
            height={400} // Ajuste o tamanho conforme necessário
          />
        </div>
        <div className="flex-1 md:ml-8 mt-4 md:mt-0 text-left animate-slideInLeft">
          <h1
            className="text-6xl leading-tight"
            style={{ fontFamily: "'Corben', sans-serif" }}
          >
            Welcome to our Flooring Store
          </h1>
          <p
            className="mt-4 text-base text-gray-700"
            style={{ maxWidth: "400px" }}
          >
            Discover the perfect flooring for your home at PNV Flooring. Our
            wide selection and expert installation services will transform your
            space.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
