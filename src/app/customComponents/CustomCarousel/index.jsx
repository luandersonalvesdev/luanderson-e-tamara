import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function CustomCarousel({ contents = [{}] }) {
  return (
    <Carousel className="w-full sm:max-w-7/12">
      <CarouselContent>
        {contents.map((content, index) => (
          <CarouselItem key={index}>
            <CardContent className="flex flex-col gap-5 justify-center items-center text-white font-bold text-xs sm:text-base">
              <p>{content.title}</p>
              {content.node}
            </CardContent>  
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
