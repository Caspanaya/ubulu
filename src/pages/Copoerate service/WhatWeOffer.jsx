import React, { useState } from "react";
import styles from "../ci/styles.module.css";
// import styles from "./offer.module.css";
import { LandingNav } from "../../components/Nav";
import { Footer } from "../../components/Footer";
import { startup } from "../../assets";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import ContactForm from "../../components/ContactForm/ContactForm";
const WhatWeOffer = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  const cardData = [
    {
      title: "Growth ambition and goals",
      text: "We transform inspiring ambitions into practical goals that resonate with both visionaries and pragmatists within and outside your organization.",
      img: "https://res.cloudinary.com/dtfvdjvyr/image/upload/v1699223453/paolo-margari-KVYPpbpji4E-unsplash_sjkeqi.jpg", // Add the URL for the image for this card
    },
    {
      title: "Growth opportunities ",
      text: "We challenge existing myths, uncover growth opportunities, and assess your organization's readiness to seize them.",
      img: "https://res.cloudinary.com/dtfvdjvyr/image/upload/v1699228004/javier-allegue-barros-C7B-ExXpOIE-unsplash_yd1t4j.jpg", // Add the URL for the image for this card
    },
    {
      title: "Growth execution",
      text: "In this phase, we translate growth engines and enablers into actionable plans and effective change management. We leverage both rational and emotional drivers to foster wholehearted commitment across your organization, ensuring the successful execution of your growth strategy.",
      img: "https://res.cloudinary.com/dtfvdjvyr/image/upload/v1699228173/cytonn-photography-n95VMLxqM2I-unsplash_fke0zy.jpg", // Add the URL for the image for this card
    },
    {
      title: "Growth strategy",
      text: "We work with you to define the engines of your growth, such as new market segments, innovative propositions, novel market channels, and potential acquisitions. Additionally, we address internal growth enablers like competencies, systems, and processes.",
      img: "https://res.cloudinary.com/dtfvdjvyr/image/upload/v1699228456/kaleidico-26MJGnCM0Wc-unsplash_qpz8jq.jpg", // Add the URL for the image for this card
    },
    // Add more card data objects as needed
  ];
  const innData = [
    {
      title: "Innovation North Star",
      text: "Do you have an inspiring vision for your innovation efforts? If you don’t know where you are going, how can you be sure to be successful? We can help you link your business goals to an effective innovation strategy.",
      img: "https://res.cloudinary.com/dtfvdjvyr/image/upload/v1699228573/ramon-salinero-vEE00Hx5d0Q-unsplash_boz3h8.jpg", // Add the URL for the image for this card
    },
    {
      title: "Innovation Roadmap ",
      text: "We assist in transforming your Innovation North Star into a comprehensive innovation roadmap. This roadmap guides your journey towards sustainable, innovative growth over time, and it helps you build a portfolio that aligns with your innovation goals.",
      img: "https://res.cloudinary.com/dtfvdjvyr/image/upload/v1699228857/matt-duncan-IUY_3DvM__w-unsplash_glt9tz.jpg", // Add the URL for the image for this card
    },
    {
      title: "Strategy Execution",
      text: "In today's landscape, strategy and execution are inseparable. The urgency brought about by digital disruptions emphasizes the importance of effective execution.Do you have the skills and competencies to deliver on your strategy?",
      img: "https://res.cloudinary.com/dtfvdjvyr/image/upload/v1699228956/patrick-perkins-ETRPjvb0KM0-unsplash_1_goswwg.jpg", // Add the URL for the image for this card
    },

    // Add more card data objects as needed
  ];
  const growData = [
    {
      title: "What’s your offering?",
      text: "Your offering goes beyond being merely your product or core process. It encompasses more than just a comprehensive set of product or service features and benefits. It involves creating a user and buyer experience that optimally aligns with their rational and emotional needs.",
      img: "https://res.cloudinary.com/dtfvdjvyr/image/upload/v1699229169/microsoft-365-TLiWhlDEJwA-unsplash_qdznje.jpg",
    },
    {
      title: "Who is your client? ",
      text: "It all begins with the realization of who your true client is and understanding their genuine needs. We guide you through the intricacies of today's markets, value chains, buying powers, and processes, helping you discover the often latent needs of your actual buyers and users.",
      img: "https://res.cloudinary.com/dtfvdjvyr/image/upload/v1699229735/docusign-AKKhZqyLeJ4-unsplash_khesbr.jpg",
    },
    {
      title: "Organisational Enhancement ",
      text: "Enhancing your go-to-market strategy significantly involves making improvements in marketing, sales, and other front-end disciplines within your organization. These are not the easiest areas to change. We leverage all available avenues for change, a matter of critical importance in achieving successful implementation.",
      img: "https://res.cloudinary.com/dtfvdjvyr/image/upload/v1699229933/paico-oficial-ZDYN7azwO6c-unsplash_fqskz4.jpg",
    },
    {
      title: " Integration ",
      text: "Establishing and maintaining a business relationship is a complex and time-consuming psychological process. We create a customer journey roadmap that outlines interactions between your client and your offering, deploying the most effective channels and triggering influential mental processes.",
      img: "https://res.cloudinary.com/dtfvdjvyr/image/upload/v1699230079/nasa-Q1p7bh3SHj8-unsplash_izzikl.jpg",
    },

    // Add more card data objects as needed
  ];

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

                <h2> What We Offer </h2>
                <p>
                  At Ubulu Africa, we don't just talk about growth, innovation,
                  and go-to-market strategies; we make them happen. Our proven
                  framework is the bedrock upon which we build new ventures and
                  drive businesses towards unmatched success.
                </p>
                <div>
                  <Link to="/talent">
                    <button className="talentbtn">Join us</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <section className="container">
          <h2 className={styles.whatoffer}>GROWTH STRATEGY</h2>
          <p>
            Embarking on the journey to growth demands a robust strategic
            foundation. Our service, designed to help you craft and execute your
            growth strategy, rests on four pillars
          </p>
          <br />

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {cardData.map((card, index) => (
              <div className="col" key={index}>
                <div className="card shadow-sm">
                  <img
                    width={360}
                    height={225}
                    src={card.img}
                    alt={card.title}
                  />
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
        <br />
        <br />
        <br />
        <section className="container">
          <h2 className={styles.whatoffer}>INNOVATION STRATEGY</h2>
          <p>
            Innovation is the catalyst for growth, and we help organizations
            outperform the market with a winning innovation strategy. Our
            services to enhance your relevance and transform your organization
            into a powerhouse of innovation are built on three fundamental
            pillars
          </p>
          <br />
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {innData.map((card, index) => (
              <div className="col" key={index}>
                <div className="card shadow-sm">
                  <img
                    width={360}
                    height={225}
                    src={card.img}
                    alt={card.title}
                  />
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
        <br />
        <br />
        <br />
        <section className="container">
          <h2 className={styles.whatoffer}> GO-TO-MARKET STRATEGY</h2>
          <p>
            Ultimately, growth hinges on successfully bringing your products and
            services to your customers. Our service, designed to help you craft
            and execute an enhanced go-to-market strategy, rests on four pillars
          </p>
          <br />
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {growData.map((card, index) => (
              <div className="col" key={index}>
                <div className="card shadow-sm">
                  <img
                    width={360}
                    height={225}
                    src={card.img}
                    alt={card.title}
                  />
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
        <br />
        <br />
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
        <br />
        <br />
      </main>

      <Footer />
    </>
  );
};

export default WhatWeOffer;
