import React from "react";
import styles from "../ci/styles.module.css";
import { LandingNav } from "../../components/Nav";
const Startup = () => {
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
                  src="https://res.cloudinary.com/dtfvdjvyr/image/upload/v1698061017/Desktop_-_15_zhwqtj.png"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Startup;
