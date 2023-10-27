import React, { useState } from "react";
import styles from "../ci/styles.module.css";
import "./Startup.css";
import { LandingNav } from "../../components/Nav";
import ubulucircle from "../../assets/ubulucircle.png";
import { Footer } from "../../components/Footer";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import ContactForm from "../../components/ContactForm/ContactForm";
Modal.setAppElement("#root");
const Startup = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <>
      <LandingNav />
      <main className={styles.bodyapp}>
        <div className={styles.hero} id="home">
          <img
            src="https://res.cloudinary.com/dtfvdjvyr/image/upload/v1698057868/Desktop_-_11_1_swzaeb.png"
            alt="Hero-img"
          />
          <div className={styles.wrapper}>
            <div className={styles.hero_content}>
              <div className={styles.content}>
                {/* <h1>Ubulu Africa</h1> */}

                <h2>
                  {" "}
                  We Design, We Build,
                  <br /> We Are Co-Founder.
                </h2>
                <p>
                  At Ubulu Africa, we specialize in co-founding and nurturing
                  innovative technology-driven startups. We shall invest in you,
                  we shall work for you, and we shall be by your side at every
                  step of the way until you make a scale-up.
                </p>
                <div>
                  <button className="talentbtn">Build with us</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="container">
          <h2 style={{ fontSize: "45px", fontWeight: "700" }}>We're All-In</h2>
          <p style={{ fontSize: "1.2rem" }}>
            We provide expertise, empathy, capital, and embedded resources to be
            the best co-founder imaginable.
          </p>
        </div>
        <br />
        <br />
        <br />
        <br />
        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <img
                  width={500}
                  height={300}
                  src="https://res.cloudinary.com/dtfvdjvyr/image/upload/v1698061017/Desktop_-_15_zhwqtj.png"
                />
              </div>
              <div className="col-lg-6">
                <h2>Explore New Horizons</h2>
                <br />
                <p>
                  At Ubulu Africa, we join forces with entrepreneurs to delve
                  into thrilling new business opportunities. We validate
                  assumptions, test potential solutions, and design robust
                  business models to underpin the launch of new and innovative
                  enterprises.{" "}
                </p>
              </div>
            </div>
          </div>
        </section>
        <br />
        <br />
        <br />
        <br />
        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h2>Build with Precision</h2>
                <br />
                <p>
                  We seamlessly integrate dedicated resources, fast-tracking
                  your journey to achieving product-market fit. Our strategic
                  approach to design sets you apart across brand, product, and
                  experience, propelling founders to reach their goals with
                  greater speed and agility.
                </p>
              </div>
              <div className="col-lg-6">
                <img
                  width={500}
                  height={300}
                  src="https://res.cloudinary.com/dtfvdjvyr/image/upload/v1698064593/Desktop_-_15_1_vua2zi.png"
                />
              </div>
            </div>
          </div>
        </section>
        <br />
        <br />
        <br />
        <br />
        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <img
                  width={500}
                  height={300}
                  src="https://res.cloudinary.com/dtfvdjvyr/image/upload/v1698143211/Desktop_-_15_3_effd6m.png"
                />
              </div>
              <div className="col-lg-6">
                <h2>Scale for Success</h2>
                <br />
                <p>
                  Our unwavering support, platform services, and carefully
                  designed programs are dedicated to assisting founders in
                  expanding their teams, growing their businesses, and securing
                  vital capital at pivotal stages of the company lifecycle.
                </p>
              </div>
            </div>
          </div>
        </section>
        <br />
        <br />
        <br />
        <br />
        <div className="container">
          <h2 style={{ fontSize: "45px", fontWeight: "700" }}>
            How Ubulu Africa Venture Building Works
          </h2>
          <p style={{ fontSize: "1.2rem" }}>
            At Ubulu Africa, we believe in the people behind great ideas. We're
            the leading venture studio and technology provider for accelerating
            the world's digital transformation. We build new companies or scale
            existing ones using platform capabilities.
          </p>
        </div>
        <br />
        <br />
        <br />
        <br />
        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <img width={510} height={500} src={ubulucircle} />
              </div>
              <div className="col-lg-6 textleft">
                <h2>We Drive the Process Forward</h2>

                <p>
                  We possess a deep understanding of building solutions, and we
                  know precisely when the right time is to initiate one. Mindful
                  of realistic timeframes, we actively drive the process to
                  significantly enhance your chances of success.
                </p>
                <br />
                <h2>Our In-House Venture Building Team</h2>

                <p>
                  We're fully invested in your success, which is why we've
                  assembled our own team of experienced experts to provide
                  guidance during those critical initial stages of building your
                  business. We enhance your skill-set when you need it most and
                  share your vision, drawing from the expertise of our other
                  teams. Let's drive your venture forward together!
                </p>
                <br />
                <h2>A New, Disruptive Business Model</h2>

                <p>
                  Let's co-create a groundbreaking business, either as one of
                  our business units or as a spin-off company that you'll lead
                  to success. We're dedicated to consumerizing the enterprise by
                  delivering an easy-to-use, affordable, and automated product
                  that consistently delivers value.
                </p>
              </div>
            </div>
          </div>
        </section>
        <br />
        <br />
        <br />
        <br />
        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 ">
                <h2>Entrepreneurship and Intrapreneurship</h2>

                <p>
                  Whether you have conceptualized ideas or need to birth them
                  from your vision and prototypes, we possess the versatility to
                  construct the ideal team. We can either tap into our in-house
                  HR resources or craft one from the ground up to fulfill your
                  unique needs.
                </p>
                <br />
                <h2>We Are Your Co-Founders</h2>

                <p>
                  In the world of business, a visionary entrepreneur requires a
                  tech-savvy co-founder, and vice versa. We step into the role
                  of your co-founders, steering you through the journey with
                  unwavering inspiration and empowerment. With us, you're never
                  alone.
                </p>
                <br />
                <h2>Seed and Growth Capital</h2>

                <p>
                  While consolidating your business model, you won't need to
                  juggle multiple investors. We significantly reduce the noise
                  and overhead associated with seeking funding. We'll finance
                  your efforts as you create value for customers and develop a
                  business around it, all while adhering to our capital
                  efficiency framework.
                </p>
                <br />
                <h2>From Idea to Execution</h2>

                <p>
                  Building a company is a formidable challenge. There are
                  various aspects of the business that will demand your
                  attention. We can manage most of that complexity for you while
                  you maintain control, allowing you to concentrate on
                  developing your product.
                </p>
              </div>
              <div className="col-lg-6 ubuSpace">
                <img className="" width={510} height={500} src={ubulucircle} />
              </div>
            </div>
          </div>
        </section>
        <br />
        <br />
        <center>
          <section className="container">
            <h2 style={{ fontSize: "45px", fontWeight: "700" }}>
              We equip founders with a competitive advantage
            </h2>
            <br />
            <p style={{ fontSize: "1.2rem" }}>
              At Ubulu Africa, we partner as co-founders with like-minded
              entrepreneurs, and we provide financial resources, infrastructure,
              a vast and dedicated team of highly skilled and specialized
              professionals, as well as our focus, know-how, energy, and
              entrepreneurial drive in order to travel the journey from
              inception to scaling-up.
            </p>
          </section>
        </center>
        <br />
        <br />
        <center>
          <section className="container">
            <div className="row">
              <div className="col-lg-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="#FFD300"
                  className="bi bi-briefcase-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z" />
                  <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z" />
                </svg>
                <p className="fw-normal">
                  <br />
                  Brand & <br />
                  Product Design
                </p>
              </div>
              <div className="col-lg-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="#FF725E"
                  className="bi bi-shop-window"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zm2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5z" />
                </svg>
                <p className="fw-normal">
                  <br />
                  Marketing <br /> & Communication
                </p>
              </div>
              <div className="col-lg-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="#1b1b1b"
                  className="bi bi-basket-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.071 1.243a.5.5 0 0 1 .858.514L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 6h1.717L5.07 1.243zM3.5 10.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3z" />
                </svg>
                <p className="fw-normal">
                  <br />
                  Product-Market-Fit
                </p>
              </div>
            </div>
          </section>
        </center>
        <br />
        <center>
          <section className="container">
            <div className="row">
              <div className="col-lg-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="#FFD300"
                  className="bi bi-briefcase-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z" />
                  <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z" />
                </svg>
                <p className="fw-normal">
                  <br />
                  Capital
                </p>
              </div>
              <div className="col-lg-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="#FF725E"
                  className="bi bi-shop-window"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zm2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5z" />
                </svg>
                <p className="fw-normal">
                  <br />
                  Finance
                </p>
              </div>
              <div className="col-lg-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="#1b1b1b"
                  className="bi bi-basket-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.071 1.243a.5.5 0 0 1 .858.514L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 6h1.717L5.07 1.243zM3.5 10.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3z" />
                </svg>
                <p className="fw-normal">
                  <br />
                  Legal
                </p>
              </div>
            </div>
          </section>
        </center>
        <br />
        <center>
          <section className="container">
            <div className="row">
              <div className="col-lg-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="#FFD300"
                  className="bi bi-briefcase-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z" />
                  <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z" />
                </svg>
                <p className="fw-normal">
                  <br />
                  Go-to-Market <br /> & Sales
                </p>
              </div>
              <div className="col-lg-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="currentColor"
                  className="bi bi-person-lines-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />
                </svg>
                <p className="fw-normal">
                  <br />
                  HR & Talent
                </p>
              </div>
            </div>
          </section>
        </center>
        <br />
        <br />
        <div className="ctajoin">
          <div className="container">
            <br />
            <br />
            <center>
              <h2 className="text-white">Work With Us, Become a Co-Founder</h2>

              <p className="text-white">
                We are inquisitive, driven by efficiency, and deeply passionate
                about startups. We’re constantly on the lookout for our next
                <br />
                hires. If you are passionate about building new ventures, new
                business models, products, and leaving your mark on the
                <br />
                industry, it is time to continue writing your entrepreneurial
                story with Ubulu Africa.
              </p>
              <br />
              <div>
                <button onClick={openModal} className="talentbtn ">
                  Join Our Talent Pool
                </button>
                <br />
                <Modal
                  isOpen={modalIsOpen}
                  onRequestClose={closeModal}
                  contentLabel="Example Modal"
                  className={{
                    base: "ReactModal__Content",
                    afterOpen: "ReactModal__Content_after-open",
                  }}
                  overlayClassName={{
                    base: "ReactModal__Overlay",
                    afterOpen: "ReactModal__Overlay_after-open",
                  }}
                >
                  <ContactForm closeModal={closeModal} />
                </Modal>
              </div>
            </center>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Startup;
