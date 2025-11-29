import { CarouselItem } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

export const HeroCarousel = ({ featuredImage }: { featuredImage: any }) => {
  return (
    <CarouselItem className="p-0">
        <div>
        <Card className="p-0">
            <CardContent className="p-0 md:h-100 flex items-center justify-center">
            <img src={featuredImage.img} className="md:h-100 w-full opacity-40" alt="" />
            </CardContent>
        </Card>
        </div>
    </CarouselItem>
  )
}
