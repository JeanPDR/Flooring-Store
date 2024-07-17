"use client";

import React, { useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export function Slider() {
  const autoplay = useRef(Autoplay({ delay: 1000, stopOnInteraction: false }));
  const [emblaRef] = useEmblaCarousel({ loop: true }, [autoplay.current]);

  return (
    <div className="mt-[160px] w-[100%] mx-auto py-12 px-4 md:px-6">
      <div className="embla" ref={emblaRef}>
        <Carousel className="rounded-lg overflow-hidden">
          <CarouselContent>
            <CarouselItem>
              <div className="bg-[#24A1AE] text-white text-center grid md:grid-cols-2 gap-8 items-center ">
                <div className="space-y-4">
                  <p
                    className="text-uppercase font-bold mt-4 text-[18px] sm:mr-[2%] ml-[2%] lg:text-[32px]"
                    style={{ fontFamily: "Poppins", fontWeight: "800" }}
                  >
                    Explore our premium collection of floors that blend beauty,
                    durability, and functionality
                  </p>
                </div>
                <img
                  src="/images/carousel/slide1.png"
                  width={950}
                  height={400}
                  alt="Outdoor Gear"
                  className="rounded-lg object-cover aspect-video"
                />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="bg-[#24A1AE] text-white text-center grid md:grid-cols-2 gap-8 items-center">
                <img
                  src="/images/carousel/slide2.png"
                  width={950}
                  height={400}
                  alt="Sustainable Fashion"
                  className="rounded-lg object-cover aspect-video"
                />
                <div className="space-y-4 ">
                  <p
                    className="text-uppercase font-bold mt-4 text-[18px] lg:text-[32px]"
                    style={{ fontFamily: "Poppins", fontWeight: "800" }}
                  >
                    Transform your spaces with our floors that combine unmatched
                    elegance and resilience.
                  </p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="bg-[#24A1AE] text-white text-center grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <p
                    className="text-uppercase font-bold mt-4 text-[18px] sm:mr-[2%] ml-[2%] lg:text-[32px]"
                    style={{ fontFamily: "Poppins", fontWeight: "800" }}
                  >
                    Discover a range of flooring options that elevate the style
                    and comfort of any space.
                  </p>
                </div>
                <img
                  src="/images/carousel/slider3.png"
                  width={950}
                  height={400}
                  alt="Kitchen Essentials"
                  className="rounded-lg object-cover aspect-video"
                />
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
