import React from "react";
import { LandingNav } from "../../components/Nav";
import styles from "./styles.module.css";
import { startup } from "../../assets";
import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer";
import Options from "../../components/Options/Options";
const Ci = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  const ctaText =
    "Join the Ubulu Africa community and be part of our mission to help organizations realize growth, become and remain the most relevant organization they can be, and even surpass that. Our team of hands-on entrepreneurs collaborates with industry leaders to harness their corporate influence to create successful ventures and generate new revenue streams.";
  return (
    <>
      <LandingNav />
      <main className={styles.App}>
        {/* Hero Section */}
        <div className={styles.hero} id="home">
          <img src={startup} alt="Hero-img" />
          <div className={styles.wrapper}>
            <div className={styles.hero_content}>
              <div className={styles.content}>
                {/* <h1>Ubulu Africa</h1> */}

                <h2> We Ignite Innovation in Corporations</h2>
                <p>
                  It is our mission to help organizations realize growth, become
                  and remain the most relevant organization they can be, and
                  even surpass that. Our team of hands-on entrepreneurs
                  collaborates with industry leaders to harness their corporate
                  influence to create successful ventures and generate new
                  revenue streams.
                </p>

                <div>
                  <Link to="/talent">
                    <button className="talentbtn">Build with us</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <center>
          <div className="container">
            <h2 style={{ color: "#242436" }}>
              Ubulu Africa Corporate Innovation Programs
            </h2>
          </div>
        </center>

        <br />
        <br />
        <br />
        <br />
        <div>
          <div className="container">
            <div className="row">
              <h2 style={{ color: "#242436" }}>
                Executive Insights That Transform
              </h2>
              <br />
              <br />
              <br />
              <p style={{ color: "#9E9E9E" }}>
                Discover the cutting-edge trends, powerfully efficient growth
                strategies, and precision tools perfectly tailored for your
                company's needs. Immerse yourself in a bespoke and
                results-driven session brimming with practical insights curated
                exclusively for your industry. Ubulu Africa's leadership team
                will guide you through an intensive 2-hour session, complete
                with an interactive Q&A. We'll also bring in experts from our
                worldwide network of entrepreneurs and mentors for an in-depth
                exploration of the Nigeria-African Startup Ecosystem and the
                dynamic landscape of VC trends. Join us to supercharge your path
                to success!
              </p>
            </div>
          </div>
        </div>
        <br />
        <br />

        <div style={{ backgroundColor: "#F7F8F8" }}>
          <br />
          <div className="container">
            <div className="row  col-lg-12">
              <h2 style={{ color: "#242436" }}>Excubation</h2>
              <br />

              <br />
              <br />
              <p style={{ color: "#9E9E9E" }}>
                Corporate partners can accelerate the development of an MVP or
                internal team through our flagship startup development program.
                Over three months of mentor support, events, and
                experimentation, your product and team will develop at the speed
                of a startup, making them better suited to make an impact in
                your company.
              </p>
            </div>
          </div>
          <br />
        </div>
        <br />
        <br />
        <br />
        <br />

        <div>
          <div className="container">
            <div className="row">
              <h2 style={{ color: "#242436" }}>Corporate Venturing</h2>
              <br />
              <br />
              <br />
              <p style={{ color: "#9E9E9E" }}>
                Corporate partners can engage startups in the Ubulu Africa
                startup development program for corporate innovation which opens
                up opportunities for a long-term strategic partnerships (e.g.,
                acquisition, franchising/licensing the startup’s technology,
                etc.). You will have the chance to engage with, learn from, and
                provide expertise to our startup companies in a mutually
                beneficial engagement.
              </p>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div style={{ backgroundColor: "#F7F8F8" }}>
          <br />
          <div className="container">
            <div className="row  col-lg-12">
              <h2 style={{ color: "#242436" }}>Pilot Acceleration </h2>
              <br />

              <br />
              <br />
              <p style={{ color: "#9E9E9E" }}>
                Are you looking to tap into world-leading innovation to address
                your business pain points? Look no further. At Ubulu Africa, we
                empower corporate partners by addressing their strategic
                challenges and goals in a game-changing way.
              </p>
              <br />

              <br />
              <br />
              <h2 style={{ color: "#363624", fontSize: "1.3rem" }}>
                Here's how it works:{" "}
              </h2>

              <br />
              <br />
              <p style={{ color: "#9E9E9E" }}>
                Corporate partners present us with three critical challenges or
                objectives. Our expert team leverages our extensive global
                startup network to curate a meticulously vetted shortlist of
                startups. These startups offer groundbreaking platforms,
                products, or services with the potential to directly address
                your specific issues.
              </p>
              <br />
              <br />
              <h2 style={{ color: "#363624", fontSize: "1.3rem" }}>
                But that's just the beginning:{" "}
              </h2>

              <br />
              <br />
              <p style={{ color: "#9E9E9E" }}>
                Finalist candidates have the opportunity to pitch their
                innovative solutions directly to your corporate management. You
                have the power to select 1-3 winners to embark on collaborative
                pilot projects. It's time to transform your business through
                innovation – the future is here.
              </p>
            </div>
          </div>
          <br />
        </div>
        <br />
        <br />
        <br />
        <br />
        <section className="secop">
          <center>
            <Options />
          </center>
        </section>
        <br />
        <br />
      </main>
      <Footer />
    </>
  );
};

export default Ci;
