import React, { useState, useEffect } from "react";

const TextRotator = () => {
  const paragraphs = [
    {
      header: "We Drive the Process Forward",
      content:
        "We possess a deep understanding of building solutions, and we know precisely when the right time is to initiate one. Mindful of realistic timeframes, we actively drive the process to significantly enhance your chances of success.",
    },
    {
      header: "Our In-House Venture Building Team",
      content:
        "We're fully invested in your success, which is why we've assembled our own team of experienced experts to provide guidance during those critical initial stages of building your business. We enhance your skill-set when you need it most and share your vision, drawing from the expertise of our other teams.",
    },
    {
      header: "A New, Disruptive Business Model",
      content:
        "Let's co-create a groundbreaking business, either as one of our business units or as a spin-off company that you'll lead to success. We're dedicated to consumerizing the enterprise by delivering an easy-to-use, affordable, and automated product that consistently delivers value.",
    },
  ];

  const [currentParagraphIndex, setCurrentParagraphIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentParagraphIndex(
        (prevIndex) => (prevIndex + 1) % paragraphs.length
      );
    }, 5000); // Change the interval time as needed (in milliseconds)

    return () => clearInterval(intervalId);
  }, [paragraphs.length]);

  return (
    <center>
      <div>
        <h1>{paragraphs[currentParagraphIndex].header}</h1>
        <p>{paragraphs[currentParagraphIndex].content}</p>
      </div>
    </center>
  );
};

export default TextRotator;
