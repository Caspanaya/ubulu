import React from "react";
import styles from "../ci/styles.module.css";
import { LandingNav } from "../../components/Nav";
import { Footer } from "../../components/Footer";
import ReactPlayer from "react-player";
import Title from "../../components/Title";
import { ReactComponent as Mail } from "../../assets/Mail-Icon.svg";
import { ReactComponent as Twitter } from "../../assets/Twitter-Icon.svg";
import { ReactComponent as Linkedin } from "../../assets/LinkedIn-Icon.svg";
import { ReactComponent as Instagram } from "../../assets/Instagram-Icon.svg";
import { ReactComponent as SendMail } from "../../assets/Send-Mail-Icon.svg";
import { Link } from "react-router-dom";
const Program = () => {
  const youtubeLink = "https://www.youtube.com/watch?v=XW7B-sCD2rg";
  const coporate = "https://youtu.be/4pyb_Bg4JdA";
  const building = "https://youtu.be/VCDAzz7pShQ";
  const collaboration = "https://youtu.be/jlXUzvHSoEY";
  return (
    <>
      <LandingNav />
      <main className={styles.bodyapp}>
        <div className={styles.hero} id="home">
          <img
            src="https://res.cloudinary.com/dtfvdjvyr/image/upload/v1698784947/tianyi-ma-WiONHd_zYI4-unsplash_pexjd9.jpg"
            alt="Hero-img"
          />
          <div className={styles.wrapper}>
            <div className={styles.hero_content}>
              <div className={styles.content}>
                {/* <h1>Ubulu Africa</h1> */}

                <h2>Programs</h2>
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
        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2 style={{ font: "30px", fontWeight: "600" }}>Pitch2Win </h2>
                <br />
                <p>
                  Pitch2Win is a startup pitching program and competition event
                  organized to support the Tech Ecosystem by providing grants to
                  young and promising startup founders, enabling them to raise
                  funds and grow their businesses. With approximately 600
                  applications from across Africa, selected startup innovators
                  and founders were granted the invaluable opportunity to
                  present their business ideas before a distinguished panel of
                  local, home-based, and international investors. This platform
                  afforded them the chance to secure funding of up to $10,000,
                  free from equity commitments, and to gain access to mentorship
                  support from renowned industry experts. Pitch2Win is more than
                  an event; it's a dynamic bridge connecting visionary founders
                  with potential investors, paving the way for growth,
                  collaboration, and promising investment opportunities.
                </p>
              </div>
              <br />
              <br />
              <div className="col-lg-12">
                <br />
                <br />
                <div className="video-div">
                  <ReactPlayer
                    url={youtubeLink}
                    width="90vw"
                    height="80vh"
                    playing={true}
                  />
                </div>
                <br />
                <br />
              </div>
            </div>
          </div>
        </section>
        <br />
        <br />
        <br />
        <section>
          <div className="container">
            <div className="row">
              <br />
              <br />
              <div className="col-lg-12">
                <h2 style={{ font: "30px", fontWeight: "600" }}>
                  Corporate Innovation Unleashed{" "}
                </h2>
                <br />
                <p>
                  At Ubulu Africa, we host a monthly panel webinar series on
                  corporate innovation and venture building, featuring prominent
                  guests including the Chief Innovation Officer/Head of
                  Innovation at a corporate organization, a Venture Builder and
                  Startup Ecosystem Expert, a Startup Founder/Scale-up
                  Entrepreneur/Serial Entrepreneur, and a Corporate Innovation
                  Manager/Consultant. Together, they engage in discussions about
                  corporate innovation in Nigeria-Africa, the opportunities it
                  presents for corporations, the startup ecosystem and beyond,
                  and everything in-between
                </p>
                <br />

                <h2 style={{ font: "30px", fontWeight: "600" }}>
                  Introduction to Corporate Innovation and Venture Building
                </h2>
                <br />
                <p>
                  In this inaugural panel webinar, our esteemed experts delve
                  into the vital aspects of Corporate Innovation and Venture
                  Building within the context of the dynamic business landscape
                  of Nigeria-Africa. Discover why it is imperative for
                  organizations to venture beyond their comfort zones and
                  embrace innovation as a catalyst for sustainable growth.
                </p>
                <br />
                <br />
              </div>
              <div className="col-lg-12">
                <div className="video-div">
                  <ReactPlayer url={coporate} width="100%" height="80vh" />
                </div>
                <br />
                <br />
              </div>
            </div>
          </div>
        </section>
        <br />
        <br />
        <br />
        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2 style={{ font: "30px", fontWeight: "600" }}>
                  Building an Innovation Ecosystem - Collaborating with Startups{" "}
                </h2>
                <br />
                <p>
                  In this edition, our esteemed panelists illuminate the
                  transformative potential of forging alliances with startups to
                  cultivate dynamic innovation ecosystems. Our discussion
                  centers on the profound benefits, strategic considerations,
                  and solutions for seamlessly integrating startups into the
                  corporate fabric. As organizations continue to grapple with
                  the demands of a rapidly evolving business landscape,
                  understanding the power of collaboration with startups has
                  never been more critical.
                </p>
              </div>
              <br />
              <br />
              <div className="col-lg-12">
                <br />
                <br />
                <div className="video-div">
                  <ReactPlayer url={building} width="90vw" height="80vh" />
                </div>
                <br />
                <br />
              </div>
            </div>
          </div>
        </section>
        <br />
        <br />
        <br />
        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2 style={{ font: "30px", fontWeight: "600" }}>
                  Corporate-Startup Collaboration - Structuring Successful
                  Partnerships
                </h2>
                <br />
                <p>
                  In today's rapidly evolving business landscape, innovation is
                  the key to success. Many organizations recognize the value of
                  innovation but often find themselves limited by their internal
                  capabilities. At Ubulu Africa, we firmly believe that to truly
                  thrive in innovative growth, businesses need to break free
                  from their comfort zones. They must venture outside their
                  organizational walls and embrace strategic collaborations with
                  startups.
                </p>
              </div>
              <br />
              <br />
              <div className="col-lg-12">
                <br />
                <br />
                <div className="video-div">
                  <ReactPlayer url={collaboration} width="90vw" height="80vh" />
                </div>
                <br />
                <br />
              </div>
            </div>
          </div>
        </section>
        <br />
        <br />

        <section className="">
          <div className={styles.contact_section} id="contact-us">
            <div className={styles.wrapper}>
              <Title title="Let’s connect" subtitle="Contact us" />
              <div className={styles.contact_content}>
                <div className={styles.social}>
                  <Link className={styles.links} to="/sociallinks" />
                  <p>Social links</p>
                  <div className={styles.social_links}>
                    <Link to="https://twitter.com/UbuluAfrica" target="_blank">
                      <Twitter className={styles.iconlinks} />
                    </Link>
                    <Link
                      to="https://www.linkedin.com/company/ubulu-africa"
                      target="_blank"
                    >
                      <Linkedin />
                    </Link>
                    <Link
                      to="https://www.instagram.com/Ubulu_africa"
                      target="_blank"
                    >
                      <Instagram />
                    </Link>
                  </div>
                </div>
                <div className={styles.email}>
                  <Mail className={styles.links} />
                  <p>Email Address</p>
                  <p>hello@ubulu.africa</p>
                </div>
                <div className={styles.contact_form}>
                  <div className={styles.form_group}>
                    <label htmlFor="message">message</label>
                    <textarea
                      placeholder="Your message"
                      id="message"
                    ></textarea>
                  </div>
                  <div className={styles.form_group}>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <button>
                    {" "}
                    <SendMail className={styles.send_mail} /> Send message{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Program;
