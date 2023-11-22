import React, { useState } from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import styles from "../ci/styles.module.css";
import { LandingNav } from "../../components/Nav";
import { Footer } from "../../components/Footer";
const Webinar = () => {
  const [readInnovate, setReadInnovate] = useState(false);
  const [readStart, setReadStart] = useState(false);
  const [readBuild, setReadBuild] = useState(false);
  const Innovations =
    "In this inaugural panel webinar, our esteemed experts delve into the vital aspects of Corporate Innovation and Venture Building within the context of the dynamic business landscape of Nigeria-Africa. Discover why it is imperative for organizations to venture beyond their comfort zones and embrace innovation as a catalyst for sustainable growth.";
  const buildings =
    " In this edition, our esteemed panelists illuminate thetransformative potential of forging alliances withstartups to cultivate dynamic innovation ecosystems. Our discussion centers on the profound benefits, strategicconsiderations, and solutions for seamlessly integratingstartups into the corporate fabric. As organizationscontinue to grapple with the demands of a rapidly evolvingbusiness landscape, understanding the power ofcollaboration with startups has never been more critical.";

  const Startup =
    "In today's rapidly evolving business landscape, innovation is the key to success. Many organizations recognize the value of innovation but often find themselves limited by their internal capabilities. At Ubulu Africa, we firmly believe that to truly thrive in innovative growth, businesses need to break free from their comfort zones. They must venture outside their organizational walls and embrace strategic collaborations with startups.";
  const corporate = "https://youtu.be/4pyb_Bg4JdA";
  const building = "https://youtu.be/VCDAzz7pShQ";
  const collaboration = "https://youtu.be/jlXUzvHSoEY";
  return (
    <>
      <LandingNav />
      <main className={styles.App}>
        <div className={styles.hero} id="home">
          <img
            src="https://res.cloudinary.com/dtfvdjvyr/image/upload/v1699230079/nasa-Q1p7bh3SHj8-unsplash_izzikl.jpg"
            alt="Hero-img"
          />
          <div className={styles.wrapper}>
            <div className={styles.hero_content}>
              <div className={styles.content}>
                <h2> Corporate Innovation Webinar Series</h2>
                <p>
                  Ubulu Africa aims to drive organizational growth and enhance
                  their relevance. We partner with industry leaders to create
                  successful ventures.
                </p>

                <div>
                  {/* <Link to="/community">
                    <button className="talentbtn">Join Us</button>
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        {/* <div className="container">
          <h2 style={{ fontSize: "50px", fontWeight: "600" }}>
            Corporate Innovation Webinar Series
          </h2>
          <br />
          <p>
            At Ubulu Africa, we host monthly webinars on corporate innovation
            and venture building. Our panel includes distinguished guests, such
            as corporate innovation leaders, venture builders, startup founders,
            and more. Together, they explore opportunities in corporate
            innovation in Nigeria-Africa and beyond.
          </p>
        </div> */}
        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="video-div">
                  <ReactPlayer url={corporate} width="100%" height="40vh" />
                  <br />

                  <div id="section1" className="">
                    <h2 style={{ fontSize: "24px", fontWeight: "600" }}>
                      Introduction to Corporate Innovation and Venture Building
                    </h2>
                    <br />

                    <p>
                      <p>
                        {readBuild
                          ? buildings
                          : `${buildings.substring(0, 200)}...`}
                        <button
                          className="pad"
                          onClick={() => setReadBuild(!readBuild)}
                        >
                          {readBuild ? "show less" : "  read more"}
                        </button>
                      </p>
                    </p>
                    <br />
                    <br />
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="video-div">
                  <ReactPlayer url={building} width="100%" height="40vh" />
                  <br />
                  <div className="">
                    <h2 style={{ fontSize: "24px", fontWeight: "600" }}>
                      Building an Innovation Ecosystem - Collaborating with
                      Startups
                    </h2>
                    <br />

                    <p>
                      <p>
                        {readInnovate
                          ? Innovations
                          : `${Innovations.substring(0, 200)}...`}
                        <button
                          className="pad"
                          onClick={() => setReadInnovate(!readInnovate)}
                        >
                          {readInnovate ? "show less" : "  read more"}
                        </button>
                      </p>
                    </p>
                    <br />
                    <br />
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="video-div">
                  <ReactPlayer url={collaboration} width="100%" height="40vh" />
                  <br />

                  <div className="">
                    <h2 style={{ fontSize: "24px", fontWeight: "600" }}>
                      Corporate-Startup Collaboration - Structuring Successful
                      Partnerships
                    </h2>
                    <br />

                    <p>
                      <p>
                        {readStart
                          ? Startup
                          : `${Startup.substring(0, 200)}...`}
                        <button
                          className="pad"
                          onClick={() => setReadStart(!readStart)}
                        >
                          {readStart ? "show less" : "  read more"}
                        </button>
                      </p>
                    </p>
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br />
        <br />
        <br />
        <br />
      </main>
      <Footer />
    </>
  );
};

export default Webinar;
