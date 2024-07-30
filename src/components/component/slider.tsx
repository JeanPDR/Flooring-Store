"use client";
import { CardContent, Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselItem,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import React from "react";
import { Button } from "../ui/button";

export function Slider() {
  const autoplay = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <div className="relative w-full flex justify-center my-10">
      <Carousel
        className=" mt-[270px] w-full"
        key="1"
        plugins={[autoplay.current]}
      >
        <CarouselContent>
          <CarouselItem>
            <div>
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-6">
                  <div className="bg-[#24A1AE] text-white text-center grid md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4">
                      <p
                        className="text-uppercase font-bold mt-4 text-[18px] sm:mr-[2%] ml-[2%] lg:text-[32px]"
                        style={{ fontFamily: "Poppins", fontWeight: "800" }}
                      >
                        Explore our premium collection of floors that blend
                        beauty, durability, and functionality
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
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div>
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-6">
                  <div className="bg-[#24A1AE] text-white text-center grid md:grid-cols-2 gap-8 items-center">
                    <img
                      src="/images/carousel/slide2.png"
                      width={950}
                      height={400}
                      alt="Sustainable Fashion"
                      className="rounded-lg object-cover aspect-video"
                    />
                    <div className="space-y-4">
                      <p
                        className="text-uppercase font-bold mt-4 text-[18px] sm:mr-[2%] ml-[2%] lg:text-[32px]"
                        style={{ fontFamily: "Poppins", fontWeight: "800" }}
                      >
                        Transform your spaces with our floors that combine
                        unmatched elegance and resilience.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div>
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-6">
                  <div className="bg-[#24A1AE] text-white text-center grid md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4">
                      <p
                        className="text-uppercase font-bold mt-4 text-[18px] sm:mr-[2%] ml-[2%] lg:text-[32px]"
                        style={{ fontFamily: "Poppins", fontWeight: "800" }}
                      >
                        Discover a range of flooring options that elevate the
                        style and comfort of any space.
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
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
