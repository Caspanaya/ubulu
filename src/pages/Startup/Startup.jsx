import React, { useState } from "react";
import styles from "../ci/styles.module.css";
import "./Startup.css";
import { LandingNav } from "../../components/Nav";
import ubulucircle from "../../assets/ubulucircle.png";
import Communication from "../../assets/communication.svg";
import Capital from "../../assets/capital.svg";
import Legal from "../../assets/legal.svg";
import Finance from "../../assets/finance.svg";
import Design from "../../assets/design.svg";
import { Footer } from "../../components/Footer";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import { Card, Container, Row, Col } from "react-bootstrap";

import ContactForm from "../../components/ContactForm/ContactForm";
import CarouselWithImages from "../../components/Carousel/CarouselWithImages";
Modal.setAppElement("#root");
const Startup = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const talentUrl = () => {
    const url = "https://forms.gle/ijb1eQ6vsuzhtTM99";

    window.open(url, "_blank");
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
                <br />
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
        <div className="container">
          <h2 style={{ fontSize: "45px", fontWeight: "700" }}>We're All-In</h2>
          <p style={{ fontSize: "1.2rem" }}>
            We provide expertise, empathy, capital, and embedded resources to be
            the best co-founder imaginable.
          </p>
        </div>
        <br />
        <br />

        <Container>
          <Row>
            <Col md={4}>
              <Card className="shadow" style={{ borderRadius: "20px" }}>
                <br />

                <br />
                <center>
                  <div>
                    <img
                      style={{ borderRadius: "20px" }}
                      width={280}
                      height={200}
                      src="https://res.cloudinary.com/dtfvdjvyr/image/upload/v1698061017/Desktop_-_15_zhwqtj.png"
                    />
                  </div>
                </center>

                <br />
                <center>
                  <Card.Body>
                    <Card.Title>Scale for Success</Card.Title>
                    <Card.Text>
                      Our unwavering support, platform services, and carefully
                      designed programs are dedicated to assisting founders in
                      expanding their teams, growing their businesses, and
                      securing vital capital at pivotal stages of the company
                      lifecycle.
                    </Card.Text>
                  </Card.Body>
                </center>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="shadow" style={{ borderRadius: "20px" }}>
                <br />

                <br />
                <center>
                  <div>
                    <img
                      style={{ borderRadius: "20px" }}
                      width={280}
                      height={200}
                      src="https://res.cloudinary.com/dtfvdjvyr/image/upload/v1698064593/Desktop_-_15_1_vua2zi.png"
                    />
                  </div>
                </center>

                <br />
                <center>
                  <Card.Body>
                    <Card.Title>Build with Precision</Card.Title>
                    <Card.Text>
                      We seamlessly integrate dedicated resources, fast-tracking
                      your journey to achieving product-market fit. Our
                      strategic approach to design sets you apart across brand,
                      product, and experience, propelling founders to reach
                      their goals with greater speed and agility.
                    </Card.Text>
                  </Card.Body>
                </center>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="shadow" style={{ borderRadius: "20px" }}>
                <br />

                <br />
                <center>
                  <div>
                    <img
                      style={{ borderRadius: "20px" }}
                      width={280}
                      height={200}
                      src="https://res.cloudinary.com/dtfvdjvyr/image/upload/v1698143211/Desktop_-_15_3_effd6m.png"
                    />
                  </div>
                </center>

                <br />
                <center>
                  <Card.Body>
                    <Card.Title>Explore New Horizons</Card.Title>
                    <Card.Text>
                      At Ubulu Africa, we join forces with entrepreneurs to
                      delve into thrilling new business opportunities. We
                      validate assumptions, test potential solutions, and design
                      robust business models to underpin the launch of new and
                      innovative enterprises.
                    </Card.Text>
                  </Card.Body>
                </center>
              </Card>
            </Col>
          </Row>
        </Container>
        <br />
        <br />
        <br />

        <br />
        <center>
          <div className="container">
            <h2 style={{ fontSize: "45px", fontWeight: "700" }}>
              How Ubulu Africa Venture Building Works
            </h2>
          </div>
        </center>
        <br />
        <br />
        <br />
        <div className="container">
          <CarouselWithImages />
        </div>
        <br />

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
                <img src={Design} width={50} height={50} />
                <p className="fw-normal">
                  <br />
                  <strong>
                    {" "}
                    Brand & <br />
                    Product Design
                  </strong>
                </p>
              </div>
              <div className="col-lg-4">
                <img src={Communication} height={50} width={50} />
                <p className="fw-normal">
                  <br />
                  <strong>
                    Marketing <br /> & Communication
                  </strong>
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
                  <strong>Product-Market-Fit</strong>
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
                <img src={Capital} height={50} width={50} />
                <p className="fw-normal">
                  <br />
                  <strong>Capital</strong>
                </p>
              </div>
              <div className="col-lg-4">
                <img height={50} width={50} src={Finance} />
                <p className="fw-normal">
                  <br />
                  <strong>Finance</strong>
                </p>
              </div>
              <div className="col-lg-4">
                <img height={50} width={50} src={Legal} />
                <p className="fw-normal">
                  <br />
                  <strong>Legal</strong>
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
                  className="bi bi-briefcase-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z" />
                  <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z" />
                </svg>
                <p className="fw-normal">
                  <br />
                  <strong>
                    Go-to-Market <br /> & Sales
                  </strong>
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
                  <strong>HR & Talent</strong>
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
                <button onClick={talentUrl} className="talentbtn ">
                  Join Our Talent Pool
                </button>
                <br />
                <Modal
                  isOpen={modalIsOpen}
                  onRequestClose={closeModal}
                  contentLabel="Example Modal"
                  // className={{
                  //   base: "ReactModal__Content",
                  //   afterOpen: "ReactModal__Content_after-open",
                  // }}
                  // overlayClassName={{
                  //   base: "ReactModal__Overlay",
                  //   afterOpen: "ReactModal__Overlay_after-open",
                  // }}
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
