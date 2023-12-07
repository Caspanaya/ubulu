import React from "react";
import { Carousel } from "react-bootstrap";

const images = [
  {
    url: "https://res.cloudinary.com/dtfvdjvyr/image/upload/v1701168526/Frame_1000004041_1_xjrdak.svg",
    caption: "Beautiful Landscape",
    description: "A stunning landscape with mountains and a lake.",
  },
  {
    url: "https://res.cloudinary.com/dtfvdjvyr/image/upload/v1701169580/Frame_1000004041_2_qadgca.svg",
    caption: "Beautiful Landscape",
    description: "A stunning landscape with mountains and a lake.",
  },
  {
    url: "https://res.cloudinary.com/dtfvdjvyr/image/upload/v1701170249/Frame_1000004041_3_uoqrix.svg",
    caption: "Beautiful Landscape",
    description: "A stunning landscape with mountains and a lake.",
  },
  {
    url: "https://res.cloudinary.com/dtfvdjvyr/image/upload/v1701171248/Frame_1000004041_5_jwdefe.svg",
    caption: "Beautiful Landscape",
    description: "A stunning landscape with mountains and a lake.",
  },
  {
    url: "https://res.cloudinary.com/dtfvdjvyr/image/upload/v1701171955/Frame_1000004041_6_vl1sjj.svg",
    caption: "Beautiful Landscape",
    description: "A stunning landscape with mountains and a lake.",
  },
  {
    url: "https://res.cloudinary.com/dtfvdjvyr/image/upload/v1701172348/Frame_1000004041_7_nnnlfg.svg",
    caption: "Beautiful Landscape",
    description: "A stunning landscape with mountains and a lake.",
  },
  {
    url: "https://res.cloudinary.com/dtfvdjvyr/image/upload/v1701172592/Frame_1000004041_8_kcktml.svg",
    caption: "Beautiful Landscape",
    description: "A stunning landscape with mountains and a lake.",
  },
  // Add more image objects as needed
];

const CarouselWithImages = () => {
  return (
    <Carousel interval={2000}>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            width={500}
            height={500}
            src={image.url}
            alt={image.caption}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselWithImages;
