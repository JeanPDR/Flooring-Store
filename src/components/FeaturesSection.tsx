import React from "react";

const FeaturesSection: React.FC = () => {
  return (
    <div className="mt-[3%] mr-[10%] ml-[10%] flex flex-wrap justify-center items-center text-center px-1">
      <div className="mt-[1.5%] bg-light w-full sm:w-1/2 p-4 flex flex-col items-center">
        <img
          src="/images/icons/iconXL.svg"
          alt="Large and Luxurious"
          className="w-[11%]"
        />
        <h5 className="text-uppercase font-bold mt-4">Large and Luxurious</h5>
        <p>
          Ultra-long and extra-wide planks provide an upscale look, and are 89%
          larger than a standard 7”x48” plank.
        </p>
      </div>
      <div className="bg-light w-full sm:w-1/2 p-4 flex flex-col items-center">
        <img
          src="/images/icons/iconEIR.svg"
          alt="AuthenTex™ Finish"
          className="w-[10%]"
        />
        <h5 className="text-uppercase font-bold mt-4">AuthenTex™ Finish</h5>
        <p>
          High definition imagery plus an Embossed In Register creates an
          authentic wood look and texture.
        </p>
      </div>
      <div className="bg-light w-full sm:w-1/2 md:w-1/3 p-4 flex flex-col items-center">
        <img
          src="/images/icons/iconProtectedby.svg"
          alt="Quantum X™ Wear Layer"
          className="w-[30%]"
        />
        <h5 className="text-uppercase font-bold mt-4">Quantum X™ Wear Layer</h5>
        <p>
          Industry-leading protection against scratches, stains, and dents
          strengthened by real diamonds.
        </p>
      </div>
      <div className="bg-light w-full sm:w-1/2 md:w-1/3 p-4 flex flex-col items-center">
        <img
          src="/images/icons/iconTemperature.svg"
          alt="ClimateGuard™ Resistance"
          className="w-[16%]"
        />
        <h5 className="text-uppercase font-bold mt-4">
          ClimateGuard™ Resistance
        </h5>
        <p>
          Resists extreme temperature fluctuation, allowing product to be used
          in 3-season rooms.
        </p>
      </div>
      <div className="border-gray-500 bg-light w-full sm:w-1/2 md:w-1/3 p-4 flex flex-col items-center">
        <img
          src="/images/icons/iconElephant.svg"
          alt="Heavy Commercial Use"
          className="w-[16%]"
        />
        <h5 className="text-uppercase font-bold mt-4">Heavy Commercial Use</h5>
        <p>Durable enough to withstand heavy everyday foot traffic.</p>
      </div>
    </div>
  );
};

export default FeaturesSection;
