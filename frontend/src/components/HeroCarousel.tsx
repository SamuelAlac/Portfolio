import { CarouselItem } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

export const HeroCarousel = () => {
  return (
    <CarouselItem className="p-0">
        <div>
        <Card className="p-0">
            <CardContent className="p-0 h-90 flex items-center justify-center">
            <img src="/placeholder_image.webp" className="h-90 w-full" alt="" />
            </CardContent>
        </Card>
        </div>
    </CarouselItem>
  )
}
