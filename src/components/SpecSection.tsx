import React from "react";

const SpecsSection: React.FC = () => {
  return (
    <section id="specs" className="mt-4 bg-blue-900 py-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div
            className="w-full md:w-1/2 pb-4 md:pb-0 wow pulse"
            data-wow-delay="1.1s"
          >
            <img
              src="/images/sizeMetters/SizeMatters.svg"
              alt="Size Matters"
              className="w-full md:w-[500px]"
            />
          </div>
          <div className="flex w-full md:w-1/2 justify-around pt-4 md:pt-0">
            <div className="text-center">
              <img
                src="/images/sizeMetters/xlIcon-wider.svg"
                alt="Wider Icon"
                className="w-[70%] mx-auto mb-2"
              />
            </div>
            <div className="text-center">
              <img
                src="/images/sizeMetters/xlIcon-longer.svg"
                alt="Longer Icon"
                className="w-[70%] mx-auto mb-2"
              />
            </div>
            <div className="text-center">
              <img
                src="/images/sizeMetters/xlIcon-larger.svg"
                alt="Larger Icon"
                className="w-[70%] mx-auto mb-2"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center text-center pt-4 md:pt-8">
          <div className="w-11/12 md:w-9/12">
            <img
              src="/images/sizeMetters/Plank-Reg.png"
              alt="Regular Plank"
              className="w-full mb-4"
            />
          </div>
          <div className="w-11/12 md:w-9/12">
            <img
              src="/images/sizeMetters/Plank-XL.png"
              alt="XL Plank"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecsSection;
