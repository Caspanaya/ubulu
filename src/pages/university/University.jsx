import React from "react";
import styles from "../ci/styles.module.css";
import style from "./uni.module.css";
import { LandingNav } from "../../components/Nav";
import { ReactComponent as Mail } from "../../assets/Mail-Icon.svg";
import { ReactComponent as Twitter } from "../../assets/Twitter-Icon.svg";
import { ReactComponent as Linkedin } from "../../assets/LinkedIn-Icon.svg";
import { ReactComponent as Instagram } from "../../assets/Instagram-Icon.svg";
import { ReactComponent as SendMail } from "../../assets/Send-Mail-Icon.svg";
import { Footer } from "../../components/Footer";
import { Link } from "react-router-dom";
import Mind from "../../assets/mind.svg";
import Share from "../../assets/share.svg";
import Project from "../../assets/ProjectU.svg";
import Network from "../../assets/Networking.svg";
import Research from "../../assets/research.svg";
import Office from "../../assets/office.svg";
import Grow from "../../assets/Grow.svg";
import Perfromance from "../../assets/performance.svg";
import Recuitement from "../../assets/recuitement.svg";
import Money from "../../assets/money.svg";
import Id from "../../assets/id.svg";
import "./Uni.css";
// import PsychologyIcon from "@mui/icons-material/Psychology";
import Title from "../../components/Title";
import ExpandableDiv from "../../components/Expandable/ExpandableDiv";
const University = () => {
  const Strategic = [
    {
      title: "Identifying Synergies",
      text: "We analyze your specific needs and objectives to identify the right university partners, ensuring alignment with your digital innovation goals.",
      img: "https://res.cloudinary.com/dtfvdjvyr/image/upload/v1699233455/myriam-jessier-eveI7MOcSmw-unsplash_knjqjq.jpg",
    },
    {
      title: "Facilitating Introductions",
      text: "We establish connections with leading universities and relevant departments or research centers, streamlining the collaboration initiation process.",
      img: "https://res.cloudinary.com/dtfvdjvyr/image/upload/v1699256412/kvalifik-HQgj1kE2SRo-unsplash_ahspbf.jpg",
    },

    // Add more card data objects as needed
  ];
  return (
    <>
      <LandingNav />
      <main className={styles.bodyapp}>
        <div className={styles.hero} id="home">
          <img
            src="https://res.cloudinary.com/dtfvdjvyr/image/upload/v1697668128/Desktop_-_11_pvmpu9.png"
            alt="Hero-img"
          />
          <div className={styles.wrapper}>
            <div className={styles.hero_content}>
              <div className={styles.content}>
                {/* <h1>Ubulu Africa</h1> */}

                <h2>
                  {" "}
                  University-Industry Collaboration for Digital Innovation{" "}
                </h2>
                <p>
                  At Ubulu Africa, we don't just talk about growth, innovation,
                  and go-to-market strategies; we make them happen. Our proven
                  framework is the bedrock upon which we build new ventures and
                  drive businesses towards unmatched success.
                </p>
                <div>
                  <Link to="/community">
                    <button className="talentbtn">Join Us</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="container">
          {/* <h2 className={style.unihead}>
            Our University-Industry Collaboration Services
          </h2> */}
          <h1>Strategic Partnership Development</h1>
          <p>
            We facilitate strategic alliances between your organization and
            leading universities. By identifying the right academic partners, we
            lay the foundation for productive, long-term collaborations. These
            partnerships can include research projects, knowledge sharing, and
            joint initiatives to tackle digital innovation challenges.
          </p>
          <br />
          <br />
          <div className="">
            <div className="row mb-2">
              <div className="col-md-6">
                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                  <div className="col p-4 d-flex flex-column position-static">
                    <h3 className="mb-0">Identifying Synergies</h3>
                    <br />
                    <div className="mb-1 text-body-secondary"> </div>
                    <p className="card-text mb-auto">
                      We analyze your specific needs and objectives to identify
                      the right university partners, ensuring alignment with
                      your digital innovation goals.
                    </p>
                  </div>
                  <div className="col-auto d-none d-lg-block">
                    <div className="idea_svg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="150"
                        height="115"
                        fill="currentColor"
                        className="bi bi-lightbulb-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                  <div className="col p-4 d-flex flex-column position-static">
                    <h3 className="mb-0">Facilitating Introductions</h3>
                    <br />

                    <p className="mb-auto">
                      We establish connections with leading universities and
                      relevant departments or research centers, streamlining the
                      collaboration initiation process.
                    </p>
                  </div>
                  <div className="col-auto d-none d-lg-block">
                    <div className="idea_svg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="150"
                        height="115"
                        fill="currentColor"
                        className="bi bi-puzzle"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.112 3.645A1.5 1.5 0 0 1 4.605 2H7a.5.5 0 0 1 .5.5v.382c0 .696-.497 1.182-.872 1.469a.459.459 0 0 0-.115.118.113.113 0 0 0-.012.025L6.5 4.5v.003l.003.01c.004.01.014.028.036.053a.86.86 0 0 0 .27.194C7.09 4.9 7.51 5 8 5c.492 0 .912-.1 1.19-.24a.86.86 0 0 0 .271-.194.213.213 0 0 0 .039-.063v-.009a.112.112 0 0 0-.012-.025.459.459 0 0 0-.115-.118c-.375-.287-.872-.773-.872-1.469V2.5A.5.5 0 0 1 9 2h2.395a1.5 1.5 0 0 1 1.493 1.645L12.645 6.5h.237c.195 0 .42-.147.675-.48.21-.274.528-.52.943-.52.568 0 .947.447 1.154.862C15.877 6.807 16 7.387 16 8s-.123 1.193-.346 1.638c-.207.415-.586.862-1.154.862-.415 0-.733-.246-.943-.52-.255-.333-.48-.48-.675-.48h-.237l.243 2.855A1.5 1.5 0 0 1 11.395 14H9a.5.5 0 0 1-.5-.5v-.382c0-.696.497-1.182.872-1.469a.459.459 0 0 0 .115-.118.113.113 0 0 0 .012-.025L9.5 11.5v-.003a.214.214 0 0 0-.039-.064.859.859 0 0 0-.27-.193C8.91 11.1 8.49 11 8 11c-.491 0-.912.1-1.19.24a.859.859 0 0 0-.271.194.214.214 0 0 0-.039.063v.003l.001.006a.113.113 0 0 0 .012.025c.016.027.05.068.115.118.375.287.872.773.872 1.469v.382a.5.5 0 0 1-.5.5H4.605a1.5 1.5 0 0 1-1.493-1.645L3.356 9.5h-.238c-.195 0-.42.147-.675.48-.21.274-.528.52-.943.52-.568 0-.947-.447-1.154-.862C.123 9.193 0 8.613 0 8s.123-1.193.346-1.638C.553 5.947.932 5.5 1.5 5.5c.415 0 .733.246.943.52.255.333.48.48.675.48h.238l-.244-2.855zM4.605 3a.5.5 0 0 0-.498.55l.001.007.29 3.4A.5.5 0 0 1 3.9 7.5h-.782c-.696 0-1.182-.497-1.469-.872a.459.459 0 0 0-.118-.115.112.112 0 0 0-.025-.012L1.5 6.5h-.003a.213.213 0 0 0-.064.039.86.86 0 0 0-.193.27C1.1 7.09 1 7.51 1 8c0 .491.1.912.24 1.19.07.14.14.225.194.271a.213.213 0 0 0 .063.039H1.5l.006-.001a.112.112 0 0 0 .025-.012.459.459 0 0 0 .118-.115c.287-.375.773-.872 1.469-.872H3.9a.5.5 0 0 1 .498.542l-.29 3.408a.5.5 0 0 0 .497.55h1.878c-.048-.166-.195-.352-.463-.557-.274-.21-.52-.528-.52-.943 0-.568.447-.947.862-1.154C6.807 10.123 7.387 10 8 10s1.193.123 1.638.346c.415.207.862.586.862 1.154 0 .415-.246.733-.52.943-.268.205-.415.39-.463.557h1.878a.5.5 0 0 0 .498-.55l-.001-.007-.29-3.4A.5.5 0 0 1 12.1 8.5h.782c.696 0 1.182.497 1.469.872.05.065.091.099.118.115.013.008.021.01.025.012a.02.02 0 0 0 .006.001h.003a.214.214 0 0 0 .064-.039.86.86 0 0 0 .193-.27c.14-.28.24-.7.24-1.191 0-.492-.1-.912-.24-1.19a.86.86 0 0 0-.194-.271.215.215 0 0 0-.063-.039H14.5l-.006.001a.113.113 0 0 0-.025.012.459.459 0 0 0-.118.115c-.287.375-.773.872-1.469.872H12.1a.5.5 0 0 1-.498-.543l.29-3.407a.5.5 0 0 0-.497-.55H9.517c.048.166.195.352.463.557.274.21.52.528.52.943 0 .568-.447.947-.862 1.154C9.193 5.877 8.613 6 8 6s-1.193-.123-1.638-.346C5.947 5.447 5.5 5.068 5.5 4.5c0-.415.246-.733.52-.943.268-.205.415-.39.463-.557H4.605z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="container">
          <h1>Research Project Management</h1>

          <br />
          <br />
          <div className="row mb-2">
            <div className="col-md-6">
              <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                  <h3 className="mb-0">Customized Research Initiatives</h3>
                  <br />
                  <div className="mb-1 text-body-secondary"> </div>
                  <p className="card-text mb-auto">
                    We match industry-specific challenges with academic
                    expertise by facilitating collaborative research projects.
                    These projects drive digital innovation by addressing
                    industry needs with cutting-edge research.
                  </p>
                </div>
                <div className="col-auto d-none d-lg-block">
                  <div className="fix_svg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="160"
                      height="125"
                      fill="currentColor"
                      className="bi bi-globe-americas"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484-.08.08-.162.158-.242.234-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                  <h3 className="mb-0">Project Oversight</h3>
                  <br />

                  <p className="mb-auto">
                    We manage the entire research process, ensuring timelines,
                    deliverables, and budgets are met while providing
                    transparency throughout.
                  </p>
                </div>
                <div className="col-auto d-none d-lg-block">
                  <div className="idea_svg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="160"
                      height="125"
                      fill="currentColor"
                      className="bi bi-life-preserver"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm6.43-5.228a7.025 7.025 0 0 1-3.658 3.658l-1.115-2.788a4.015 4.015 0 0 0 1.985-1.985l2.788 1.115zM5.228 14.43a7.025 7.025 0 0 1-3.658-3.658l2.788-1.115a4.015 4.015 0 0 0 1.985 1.985L5.228 14.43zm9.202-9.202-2.788 1.115a4.015 4.015 0 0 0-1.985-1.985l1.115-2.788a7.025 7.025 0 0 1 3.658 3.658zm-8.087-.87a4.015 4.015 0 0 0-1.985 1.985L1.57 5.228A7.025 7.025 0 0 1 5.228 1.57l1.115 2.788zM8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                    </svg>
                  </div>
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
          <h1>Innovation Workshops, Seminars and Community Building</h1>
          <p>
            Stay at the forefront of digital innovation with our workshops and
            seminars. Led by academic and industry experts, these events focus
            on the latest trends and best practices in areas like AI, IoT,
            blockchain, and more.
          </p>
          <br />
          <br />
          <div className="row mb-2">
            <div className="col-md-6">
              <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                  <h3 className="mb-0">Knowledge Sharing </h3>
                  <br />
                  <div className="mb-1 text-body-secondary"> </div>
                  <p className="card-text mb-auto">
                    We organize workshops, seminars, webinars, and events that
                    foster the exchange of knowledge, the generation of ideas,
                    the sharing of best practices, and the exploration of
                    emerging trends in digital innovation between universities
                    and industries.
                  </p>
                </div>
                <div className="col-auto d-none d-lg-block">
                  <img
                    className="fix_svg"
                    src={Share}
                    width={160}
                    height={125}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                  <h3 className="mb-0">Networking Opportunities</h3>
                  <br />

                  <p className="mb-auto">
                    Connect with thought leaders, researchers, and industry
                    peers to nurture a culture of innovation within your
                    organization. Participate in events, forums, and conferences
                    to expand your digital innovation community. Access to a
                    network of like-minded organizations, researchers, and
                    innovators.
                  </p>
                </div>
                <div className="col-auto d-none d-lg-block">
                  <img
                    className="fix_svg"
                    src={Network}
                    width={160}
                    height={125}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />

        <br />
        <br />

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
                <p>Email Address:</p>
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
      </main>
      <Footer />
    </>
  );
};

export default University;
