import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import AutoScroll from 'embla-carousel-auto-scroll'

export const SkillsCarousel = ({skills}: {skills: any}) => {

  return (
    <Carousel opts={{ loop: true }} plugins={[AutoScroll({ speed: 1, stopOnInteraction: false, stopOnMouseEnter: true })]}>
      <CarouselContent className="w-sm">
        {skills.map((skill: any, index: number) => (
          <CarouselItem key={index} className="bg-dark basis-1/4 md:basis-1/4">
              <Card className="flex items-center">
                <CardContent>
                  <img src={skill.image} className="" title={skill.language}/>
                </CardContent>
              </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
