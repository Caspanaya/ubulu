import React from "react";
import { Carousel } from "react-bootstrap";
import ReactPlayer from "react-player";

const videos = [
  {
    url: "https://www.youtube.com/watch?v=XW7B-sCD2rg",
    caption: "Pitch2Win",
    description:
      "Pitch2Win is a startup pitching program and competition event",
  },
  {
    url: "https://youtu.be/4pyb_Bg4JdA",
    caption: "Corporate Innovation Unleashed",
    description: "Some description for the second video.",
  },
  {
    url: "https://youtu.be/VCDAzz7pShQ",
    caption: "Building an Innovation Ecosystem",
    description: "Understanding the power of collaboration with startups ",
  },
];

const CarouselWithVideos = () => {
  return (
    <Carousel>
      {videos.map((video, index) => (
        <Carousel.Item key={index}>
          <ReactPlayer url={video.url} controls width="100%" height="60vh" />
          <Carousel.Caption>
            {/* <h5 className="text-dark font-weight-bold">{video.caption}</h5>
            <p className="text-dark">{video.description}</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselWithVideos;
