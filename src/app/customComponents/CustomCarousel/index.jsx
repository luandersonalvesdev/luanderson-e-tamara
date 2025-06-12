import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function CustomCarousel({ contents = [] }) {
  return (
    <Carousel className="w-full sm:max-w-7/12">
      <CarouselContent>
        {contents.map((node, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
                <CardContent className="flex items-center justify-center">
                  <span className="text-4xl font-semibold">{node}</span>
                </CardContent>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}