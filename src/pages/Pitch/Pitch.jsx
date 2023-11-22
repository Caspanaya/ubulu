import React, { useState } from "react";
import ReactPlayer from "react-player";
import styles from "../ci/styles.module.css";
import { Link } from "react-router-dom";

import { LandingNav } from "../../components/Nav";
import { Footer } from "../../components/Footer";
const Pitch = () => {
  const info =
    "Pitch2Win stands as a dynamic startup pitching program and competition dedicated to empowering promising founders throughout Africa. Selected innovators gain an exclusive chance to showcase their ideas before a discerning panel of investors.Pitch2Win serves as a continuous bridge, linking visionary founders with potential investors, facilitating growth, collaboration, and promising investment opportunities. Winners stand to secure funding of up to $10,000 without sacrificing equity, coupled with invaluable mentorship from industry experts.";
  const [readMore, setReadMore] = useState(false);
  const [nogMore, setNogMore] = useState(false);
  const youtubeLink = "https://www.youtube.com/watch?v=XW7B-sCD2rg";
  const nogtech = "https://www.youtube.com/watch?v=GlxgJnVkKJQ";
  const nog =
    "The NOGTECH Hackathon is a program that drives local collaboration in the oil and gas tech revolution, fostering innovative solutions for industry challenges. It offers seed funding, mentorship, and incubation to selected ideas, creating employment opportunities and addressing pressing issues in the sector.";
  return (
    <>
      <LandingNav />
      <main className={styles.bodyapp}>
        <div className={styles.hero} id="home">
          <img
            src="https://res.cloudinary.com/dtfvdjvyr/image/upload/v1699142632/jackson-david-8qudl9pDZJ0-unsplash_shj7um.jpg"
            alt="Hero-img"
          />
          <div className={styles.wrapper}>
            <div className={styles.hero_content}>
              <div className={styles.content}>
                {/* <h1>Ubulu Africa</h1> */}

                <h2> Incubator & Accelerator Programs</h2>
                <p>
                  At Ubulu Africa, we don't just talk about growth, innovation,
                  and go-to-market strategies; we make them happen. Our proven
                  framework is the bedrock upon which we build new ventures and
                  drive businesses towards unmatched success.
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
        <section>
          <div className="container">
            <h2 style={{ fontSize: "40px", fontWeight: "600" }}>PITCH2WIN</h2>
          </div>
          <br />
        </section>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div style={{ backgroundColor: "#F7F8F8", width: "100%" }}>
                  <h1 style={{ fontSize: "30px", color: "#242436" }}>
                    Innovation, Networking, Opportunities
                  </h1>
                </div>

                <p>
                  {readMore ? info : `${info.substring(0, 200)}...`}
                  <button
                    className="pad"
                    onClick={() => setReadMore(!readMore)}
                  >
                    {readMore ? "show less" : "  read more"}
                  </button>
                </p>
              </div>

              <div className="col-lg-6">
                <div className="video-div">
                  <ReactPlayer url={youtubeLink} width="100%" height="40vh" />
                </div>
                <br />
                <br />
              </div>
            </div>
          </div>
        </section>
        <br />
        <br />

        <section>
          <div className="container">
            <h2 style={{ fontSize: "40px", fontWeight: "600" }}>NOGTECH</h2>
          </div>
          <br />
        </section>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div style={{ backgroundColor: "#F7F8F8", width: "100%" }}>
                  <h1 style={{ fontSize: "30px", color: "#242436" }}>
                    Technology , Innovation, Collaboration
                  </h1>
                </div>
                <p>
                  {nogMore ? nog : `${nog.substring(0, 200)}...`}
                  <button className="pad" onClick={() => setNogMore(!nogMore)}>
                    {nogMore ? "show less" : "  read more"}
                  </button>
                </p>
              </div>

              <div className="col-lg-6">
                <div className="video-div">
                  <ReactPlayer url={nogtech} width="100%" height="40vh" />
                </div>
                <br />
                <br />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Pitch;
