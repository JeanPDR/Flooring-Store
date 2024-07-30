import React from "react";

const AboutSection = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">
          The PNV Flooring Difference
        </h2>
        <p className="text-[18px] mb-6 text-center pl-[10%] pr-[10%]">
          Our company has been in the market for 5 years, committed to providing
          high-quality flooring and exceptional installation services. We use
          premium materials and advanced techniques to ensure superior
          durability and aesthetics. Our experienced team customizes each
          installation to meet the unique needs of every client, transforming
          visions into reality with excellence and dedication!
        </p>
        <div className=" mt-[10%] flex justify-center items-center mt-4">
          <img
            className="object-cover"
            src="/images/walpaper.jpeg"
            alt="Background"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
