import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import { useEffect, useState } from "react"
import Autoplay from "embla-carousel-autoplay"
import { skills } from "@/lib/constants/skills"
import AutoScroll from 'embla-carousel-auto-scroll'

export const SkillsCarousel = () => {

  return (
    <Carousel opts={{ loop: true }} plugins={[AutoScroll({ speed: 1, stopOnInteraction: false, stopOnMouseEnter: true })]}>
      <CarouselContent className="w-sm">
        {skills.map((skill, index) => (
          <CarouselItem key={index} className="bg-dark basis-1/4 md:basis-1/4">
              <Card className="flex items-center">
                <CardContent>
                  <img src={skill.image} className=""/>
                </CardContent>
              </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
