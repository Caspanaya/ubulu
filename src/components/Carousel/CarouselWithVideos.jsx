import React from "react";
import { Carousel } from "react-bootstrap";
import ReactPlayer from "react-player";

const videos = [
  {
    url: "video1.mp4",
    caption: "First Video",
    description: "Some description for the first video.",
  },
  {
    url: "video2.mp4",
    caption: "Second Video",
    description: "Some description for the second video.",
  },
  {
    url: "video3.mp4",
    caption: "Third Video",
    description: "Some description for the third video.",
  },
];

const CarouselWithVideos = () => {
  return (
    <Carousel>
      {videos.map((video, index) => (
        <Carousel.Item key={index}>
          <ReactPlayer url={video.url} controls width="100%" height="auto" />
          <Carousel.Caption>
            <h5>{video.caption}</h5>
            <p>{video.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselWithVideos;
