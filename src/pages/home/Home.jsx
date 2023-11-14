import React, { useState } from "react";
import { ReactComponent as Rotate } from "../../assets/ROTATION.svg";
import Title from "../../components/Title";
import Partner1 from "../../assets/TechQuest.png";
import Partner2 from "../../assets/Techcircle.png";
import Partner3 from "../../assets/caspania.png";
import { ReactComponent as Mail } from "../../assets/Mail-Icon.svg";
import { ReactComponent as Twitter } from "../../assets/Twitter-Icon.svg";
import { ReactComponent as Linkedin } from "../../assets/LinkedIn-Icon.svg";
import { ReactComponent as Instagram } from "../../assets/Instagram-Icon.svg";
import { ReactComponent as SendMail } from "../../assets/Send-Mail-Icon.svg";
import styles from "./styles.module.css";
import { ServicesSection } from "../../components/ServicesSection";
import { Footer } from "../../components/Footer";
import { ScrollButton } from "../../components/ScrolltoTopBtn";
import { LandingNav } from "../../components/Nav";
import { Link } from "react-router-dom";
import CarouselWithVideos from "../../components/Carousel/CarouselWithVideos";
function Home() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };
  return (
    <div className={styles.App}>
      <LandingNav />
      {/* Hero Section */}
      <div className={styles.hero} id="home">
        <img
          src="https://res.cloudinary.com/dscuc72dw/image/upload/q_auto:good/f_auto/v1675045274/ubulu_hero.png"
          alt="Hero-img"
        />
        <div className={styles.wrapper}>
          <div className={styles.hero_content}>
            <div className={styles.content}>
              <h1>Ubulu Africa</h1>
              <h2>Making Innovation Work</h2>
              <p>Centre of Excellence for end-to-end innovation activities</p>
              <div className={styles.hero_buttons}>
                <Link to="/startup-boost ">
                  <button className="outlined"> Startup Boost</button>
                </Link>
                <div
                  className="dropdown"
                  onMouseEnter={toggleDropdown}
                  onMouseLeave={closeDropdown}
                >
                  <Link to="/corporate-innovation">
                    <button className="dropdown-button">
                      Corporate Innovation{" "}
                    </button>
                  </Link>
                  <div></div>
                </div>
                <Link to="/university">
                  <button className="outlined">
                    {" "}
                    University-Industry Collaboration
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.rotate_container}>
            <Rotate className={styles.rotate} />
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className={styles.about_us_section} id="about-us">
        <div className={styles.video__bg_overlay}></div>
        <video
          className={styles}
          src="https://res.cloudinary.com/dscuc72dw/video/upload/q_auto:good/f_auto/v1675027936/About_us_bg_video_xzcoy7.mp4"
          autoPlay
          loop
          muted
        ></video>
        <div className={styles.wrapper}>
          <Title title="About Us" subtitle="An Innovation Management Group" />
          <div className={styles.about_content_section}>
            <div className={styles.about_content}>
              <p>
                Ubulu Africa is an innovation management group dedicated to
                helping individuals and organizations use technology to achieve
                the Sustainable Development Goals (SDGs).
              </p>
              <p>
                We are building a Centre of Excellence for end-to-end innovation
                activities required to solve social and economic problems in
                Africa.
              </p>
            </div>
            <img
              src="https://res.cloudinary.com/dscuc72dw/image/upload/q_auto:good/f_auto/v1675269930/bulb_ih18kn.png"
              alt="Light Bulb"
            />
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className={styles.services_section} id="our-services">
        <div className={styles.wrapper}>
          <Title title="" subtitle="Ubulu Africa Innovation Building Blocks" />
          <ServicesSection />
        </div>
      </div>
      {/* carousel */}
      {/* <div>
        <div className={styles.services_section} id="our-services">
          <div className={styles.wrapper}>
            <Title title="Programs" subtitle="" />
            <CarouselWithVideos />
          </div>
        </div>
      </div> */}
      {/* Partners Section */}
      <div className={styles.partners_section}>
        <div className={styles.video__bg_overlay}></div>
        <video
          className={styles}
          src="https://res.cloudinary.com/dscuc72dw/video/upload/q_auto:good/f_auto/v1675027936/About_us_bg_video_xzcoy7.mp4"
          autoPlay
          loop
          muted
        ></video>
        <div className={styles.wrapper}>
          <h6>Our Partners</h6>
          <div className={styles.partners_content}>
            <div
              className={styles.partner}
              onClick={() =>
                window.open("https://www.tqstem.org/home/", "_blank")
              }
            >
              <img src={Partner1} alt="Tech Quest" />
              <a href="https://www.tqstem.org/home/">TechQuest</a>
            </div>
            <div
              className={styles.partner}
              onClick={() =>
                window.open("https://www.techcircle.ng/", "_blank")
              }
            >
              <img src={Partner2} alt="Tech Circle" />
              <a href="https://www.techcircle.ng/">TechCircle</a>
            </div>
            <div
              className={styles.partner}
              onClick={() => window.open("https://www.caspania.com/", "_blank")}
            >
              <img src={Partner3} alt="Caspania" />
              <a href="https://www.caspania.com/">Caspania</a>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
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
                <textarea placeholder="Your message" id="message"></textarea>
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

      {/* Footer Section */}
      <Footer />
      <ScrollButton />
    </div>
  );
}

export default Home;
