import React from "react";
import styles from "../ci/styles.module.css";
// import styles from "./offer.module.css";
import { LandingNav } from "../../components/Nav";
import { startup } from "../../assets";
const WhatWeOffer = () => {
  const cardData = [
    {
      title: "Growth ambition and goals",
      text: "We transform inspiring ambitions into practical goals that resonate with both visionaries and pragmatists within and outside your organization.",
    },
    {
      title: "Growth opportunities ",
      text: "We challenge existing myths, uncover growth opportunities, and assess your organization's readiness to seize them.",
    },
    {
      title: "Growth execution",
      text: "In this phase, we translate growth engines and enablers into actionable plans and effective change management. We leverage both rational and emotional drivers to foster wholehearted commitment across your organization, ensuring the successful execution of your growth strategy.",
    },
    {
      title: "Growth strategy",
      text: "We work with you to define the engines of your growth, such as new market segments, innovative propositions, novel market channels, and potential acquisitions. Additionally, we address internal growth enablers like competencies, systems, and processes.",
    },
    // Add more card data objects as needed
  ];

  return (
    <>
      <LandingNav />
      <main className={styles.App}>
        <div className={styles.hero} id="home">
          <img
            src="https://res.cloudinary.com/dtfvdjvyr/image/upload/v1697541084/fixit_lpcj3w.jpg"
            alt="Hero-img"
          />
          <div className={styles.wrapper}>
            <div className={styles.hero_content}>
              <div className={styles.content}>
                {/* <h1>Ubulu Africa</h1> */}

                <h2> What We Offer </h2>
                <p>
                  At Ubulu Africa, we don't just talk about growth, innovation,
                  and go-to-market strategies; we make them happen. Our proven
                  framework is the bedrock upon which we build new ventures and
                  drive businesses towards unmatched success.
                </p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <section className="container">
          <h2 className={styles.whatoffer}>GROWTH STRATEGY</h2>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {cardData.map((card, index) => (
              <div className="col" key={index}>
                <div className="card shadow-sm">
                  <svg
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    height="225"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c"></rect>
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                      Thumbnail
                    </text>
                  </svg>
                  <div className="card-body">
                    <h1>{card.title}</h1>
                    <p className="card-text">{card.text}</p>
                    <div className="d-flex justify-content-between align-items-center"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default WhatWeOffer;
