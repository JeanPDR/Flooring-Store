import { url } from "inspector";
import React from "react";

const AboutUsSection = () => {
  return (
    <section
      className="relative flex items-center justify-center h-64 mt-[21%] bg-cover bg-center"
      style={{ backgroundImage: "url('/images/rooms/roomMaple.jpg')" }}
    >
      <h2 className="text-4xl font-bold text-white">About Us</h2>
    </section>
  );
};

export default AboutUsSection;
