import { HeroCarousel } from "@/components/HeroCarousel"
import { Carousel, CarouselContent } from "@/components/ui/carousel"
import { featuredImgs } from "@/lib/constants/featured"
import Autoplay from 'embla-carousel-autoplay'
import { useRef } from "react"
import { ReactTyped } from 'react-typed'

export const Hero = () => {

  const plugin = useRef(
    Autoplay({ delay: 7000, stopOnInteraction: true })
  )

  return (
    <section className="w-full md:h-100 relative text-black">
          <Carousel opts={{ loop: true }} plugins={[plugin.current]} 
          onMouseEnter={() => plugin.current.stop} onMouseLeave={() => plugin.current.play}>
            <CarouselContent className="-ml-0">
              {featuredImgs.map((featuredImage, index) => (
                <HeroCarousel featuredImage={featuredImage} key={index}/>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="absolute bottom-[10%] left-[3%] text-white">
            <h1 className="text-xl md:text-3xl font-medium">Hello World, I am <span className="font-semibold">Samuel</span></h1>
            <h1 className="text-lg md:text-2xl font-medium">A <ReactTyped strings={['Web Developer', 'Mobile Developer', 'Designer']}
            typeSpeed={100} loop backSpeed={20} cursorChar="|" showCursor={true} /></h1>
          </div>
    </section>
  )
}
