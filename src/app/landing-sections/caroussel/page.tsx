import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const images = [
        {
            title: 'Risk ',
            content: '',
            source:'/images/carousel/finCrime1.png'
        },
        {
            title: 'Competitive Itenlligence',
            content: '',
            source:'/images/carousel/finCrime3.jpeg'
        },
        {
            title: 'Market Research',
            content: '',
            source:'/images/carousel/transaction.svg'
        },
        {
          title:"Training",
          content:" ",
          source:'/images/carousel/finCrime.png'
        }
    ]

function CarouselAFC() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-min h-min"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >

      <CarouselContent>
        {images.map((pictures, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className={'bg-[url(/images/carousel/finCrime1.png)]'}>
                <CardHeader>
                  <span className="text-4xl font-semibold text-center">{pictures.title}</span>

                </CardHeader>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  
                  <Image src={pictures.source} alt={"test"} width={500} height={500}/>
                  
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
export default CarouselAFC;
