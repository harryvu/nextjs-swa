import React from "react"
import Image from "next/image"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader

const MainCarousel = () => {
  const banners = [
    "https://res.cloudinary.com/dwewg2ssb/image/upload/v1691033632/First_Banner_a_b585aa7e30.jpg",
    "https://res.cloudinary.com/dwewg2ssb/image/upload/v1691034347/Red_Talapia_9fa26ab191.png",
    "https://res.cloudinary.com/dwewg2ssb/image/upload/v1691034127/Pipi_Clam_8f86ae25cd.png",
    "https://res.cloudinary.com/dwewg2ssb/image/upload/v1691034257/Prawn_95f63c378a.png",
    "https://res.cloudinary.com/dwewg2ssb/image/upload/v1691034420/Ribbon_Fish_64e8252524.png",
    "https://res.cloudinary.com/dwewg2ssb/image/upload/v1691033902/Basa_Fillet_7b35cdae9b.png",
    "https://res.cloudinary.com/dwewg2ssb/image/upload/v1691033996/Basa_Sliced_329d4de04a.png"
  ]
  console.log(banners)

  return (
    <Carousel showThumbs={false} autoPlay infiniteLoop>
      {banners.map((itemUrl, index) => (
        <div key={index}>
          <Image src={itemUrl} alt={index} width={600} height={200} />
        </div>
      ))}
    </Carousel>
  )
}

export default MainCarousel