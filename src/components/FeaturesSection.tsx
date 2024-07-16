import React from "react";

const FeaturesSection: React.FC = () => {
  return (
    <div className="mt-[3%] flex flex-wrap justify-center items-center text-center px-1">
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4 flex flex-col items-center">
        <img
          src="/images/icons/iconWaterproof.svg"
          alt="Large and Luxurious"
          className="w-[16%]"
        />
        <h5 className="text-uppercase font-bold mt-4">WATERPROOF</h5>
        <p>
          Our floors are completely resistant to water and moisture, and won’t
          swell, peel or buckle when exposed.
        </p>
      </div>
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4 flex flex-col items-center">
        <img
          src="/images/icons/iconFireresistant.svg"
          alt="AuthenTex™ Finish"
          className="w-[16%]"
        />
        <h5 className="text-uppercase font-bold mt-4">FIRE RESISTANT</h5>
        <p>Resistant to fire damage and won't assist the spread of fires.</p>
      </div>
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4 flex flex-col items-center">
        <img
          src="/images/icons/iconPetfriendly.svg"
          alt="Quantum X™ Wear Layer"
          className="w-[16%]"
        />
        <h5 className="text-uppercase font-bold mt-4">PET FRIENDLY</h5>
        <p>
          With protection aginst accidents, stains, and scratches, no
          four-legged friend will end up "in the doghouse".
        </p>
      </div>
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4 flex flex-col items-center">
        <img
          src="/images/icons/iconAntimicrobial.svg"
          alt="ClimateGuard™ Resistance"
          className="w-[16%]"
        />
        <h5 className="text-uppercase font-bold mt-4">ANTI-MICROBIAL</h5>
        <p>
          Our floors impede the growth of microorganisms, providing long term
          protection against bacteria, fungi, and molds.
        </p>
      </div>
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4 flex flex-col items-center">
        <img
          src="/images/icons/iconIndentresistant.svg"
          alt="Heavy Commercial Use"
          className="w-[16%]"
        />
        <h5 className="text-uppercase font-bold mt-4">INDENT RESISTANT</h5>
        <p>
          The durable wear layer on our floors protects against indentations,
          and scratches, as well as stains, and discoloration.
        </p>
      </div>
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4 flex flex-col items-center">
        <img
          src="/images/icons/iconInstall.svg"
          alt="Heavy Commercial Use"
          className="w-[22%]"
        />
        <h5 className="text-uppercase font-bold mt-4">EASY INSTALLATION</h5>
        <p>Our simple click locking system makes installation a breeze.</p>
      </div>
    </div>
  );
};

export default FeaturesSection;
