import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from 'embla-carousel-autoplay'
import { useRef } from "react"
import { ReactTyped } from 'react-typed'

export const Hero = () => {

  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <section className="w-full min-h-90 relative">
          <Carousel className="z-0" opts={{ loop: true }} plugins={[plugin.current]} 
          onMouseEnter={() => plugin.current.stop} onMouseLeave={() => plugin.current.play}>
            <CarouselContent className="-ml-0">
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="p-0">
                  <div>
                    <Card className="p-0">
                      <CardContent className="p-0 h-90 flex items-center justify-center">
                        <img src="/placeholder_image.webp" className="h-90 w-full" alt="" />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="absolute bottom-[10%] left-[3%]">
            <h1 className="text-xl md:text-3xl font-medium">Hello World, I am <span className="font-semibold">Samuel</span></h1>
            <h1 className="text-lg md:text-2xl font-medium">A <ReactTyped strings={['Web Developer', 'Mobile Developer', 'Designer']}
            typeSpeed={100} loop backSpeed={20} cursorChar="|" showCursor={true} /></h1>
          </div>
    </section>
  )
}
