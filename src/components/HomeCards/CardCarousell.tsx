import React from 'react'
import { CardCarousel } from '../ui/card-carousel'


const images = [
    { src: "/card/img1.jpg", alt: "Image 1" },
    { src: "/card/img3.jpg", alt: "Image 2" },
    // { src: "/card/img4.jpg", alt: "Image 4" },
    // { src: "/card/img5.jpg", alt: "Image 5" },
    { src: "/card/img6.jpg", alt: "Image 6" },
    { src: "/card/img7.jpg", alt: "Image 7" },
    { src: "/card/img8.jpg", alt: "Image 8" },
  ]

const CardCarousell = () => {
  return (
    <div>
        <CardCarousel
        images={images}
        autoplayDelay={2000}
        showPagination={false}
        showNavigation={true}        
        />
    </div>
  )
}

export default CardCarousell