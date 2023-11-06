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
import Title from "../../components/Title";
import ExpandableDiv from "../../components/Expandable/ExpandableDiv";
const University = () => {
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
                  <Link to="/talent">
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
          <div className="row mb-2">
            <div className="col-md-6">
              <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                  {/* <strong className="d-inline-block mb-2 text-primary-emphasis">
                    World
                  </strong> */}
                  <h3 className="mb-0">Identifying Synergies</h3>
                  <br />
                  {/* <div className="mb-1 text-body-secondary">Nov 12</div> */}
                  <p className="card-text mb-auto">
                    We analyze your specific needs and objectives to identify
                    the right university partners, ensuring alignment with your
                    digital innovation goals.
                  </p>
                </div>
                <div className="col-auto d-none d-lg-block">
                  <img
                    width={260}
                    height={270}
                    src="https://res.cloudinary.com/dtfvdjvyr/image/upload/v1699233455/myriam-jessier-eveI7MOcSmw-unsplash_knjqjq.jpg"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                  {/* <strong className="d-inline-block mb-2 text-success-emphasis">
                    Design
                  </strong> */}
                  <h3 className="mb-0">Facilitating Introductions</h3>
                  {/* <div className="mb-1 text-body-secondary">Nov 11</div> */}
                  <p className="mb-auto">
                    We establish connections with leading universities and
                    relevant departments or research centers, streamlining the
                    collaboration initiation process.
                  </p>
                  {/* <a
                    href="#"
                    className="icon-link gap-1 icon-link-hover stretched-link"
                  >
                    Continue reading
                    <svg className="bi">
                      <use xlinkHref="#chevron-right"></use>
                    </svg>
                  </a> */}
                </div>
                <div className="col-auto d-none d-lg-block">
                  <svg
                    className="bd-placeholder-img"
                    width="200"
                    height="250"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c"></rect>
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                      Thumbnail
                    </text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="container">
          {/* <h2 className={style.unihead}>
            Our University-Industry Collaboration Services
          </h2> */}
          <h1>Research Project Management</h1>
          {/* <p>
            We facilitate strategic alliances between your organization and
            leading universities. By identifying the right academic partners, we
            lay the foundation for productive, long-term collaborations. These
            partnerships can include research projects, knowledge sharing, and
            joint initiatives to tackle digital innovation challenges.
          </p> */}
          <br />
          <br />
          <div className="row mb-2">
            <div className="col-md-6">
              <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                  {/* <strong className="d-inline-block mb-2 text-primary-emphasis">
                    World
                  </strong> */}
                  <h3 className="mb-0">Customized Research Initiatives</h3>

                  <div className="mb-1 text-body-secondary"> </div>
                  <p className="card-text mb-auto">
                    We match industry-specific challenges with academic
                    expertise by facilitating collaborative research projects.
                    These projects drive digital innovation by addressing
                    industry needs with cutting-edge research.
                  </p>
                  {/* <a
                    href="#"
                    className="icon-link gap-1 icon-link-hover stretched-link"
                  >
                    Continue reading
                    <svg className="bi">
                      <use xlinkHref="#chevron-right"></use>
                    </svg>
                  </a> */}
                </div>
                <div className="col-auto d-none d-lg-block">
                  <svg
                    className="bd-placeholder-img"
                    width="200"
                    height="250"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c"></rect>
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                      Thumbnail
                    </text>
                  </svg>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                  {/* <strong className="d-inline-block mb-2 text-success-emphasis">
                    Design
                  </strong> */}
                  <h3 className="mb-0">Project Oversight</h3>
                  <br />
                  {/* <div className="mb-1 text-body-secondary">Nov 11</div> */}
                  <p className="mb-auto">
                    We manage the entire research process, ensuring timelines,
                    deliverables, and budgets are met while providing
                    transparency throughout.
                  </p>
                  {/* <a
                    href="#"
                    className="icon-link gap-1 icon-link-hover stretched-link"
                  >
                    Continue reading
                    <svg className="bi">
                      <use xlinkHref="#chevron-right"></use>
                    </svg>
                  </a> */}
                </div>
                <div className="col-auto d-none d-lg-block">
                  <svg
                    className="bd-placeholder-img"
                    width="200"
                    height="250"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c"></rect>
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                      Thumbnail
                    </text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="container">
          {/* <h2 className={style.unihead}>
            Our University-Industry Collaboration Services
          </h2> */}
          <h1>Technology Transfer and Licensing</h1>
          <p>
            We simplify the process of licensing cutting-edge technologies from
            universities for your organization's use. Secure exclusive rights to
            innovations that align with your digital transformation goals.
          </p>
          <br />
          <br />
          <div className="row mb-2">
            <div className="col-md-6">
              <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                  {/* <strong className="d-inline-block mb-2 text-primary-emphasis">
                    World
                  </strong> */}
                  <h3 className="mb-0">Intellectual Property Management </h3>

                  <div className="mb-1 text-body-secondary"> </div>
                  <p className="card-text mb-auto">
                    Our experts navigate intellectual property complexities,
                    helping you secure and protect innovations resulting from
                    collaborations.
                  </p>
                  {/* <a
                    href="#"
                    className="icon-link gap-1 icon-link-hover stretched-link"
                  >
                    Continue reading
                    <svg className="bi">
                      <use xlinkHref="#chevron-right"></use>
                    </svg>
                  </a> */}
                </div>
                <div className="col-auto d-none d-lg-block">
                  <svg
                    className="bd-placeholder-img"
                    width="200"
                    height="250"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c"></rect>
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                      Thumbnail
                    </text>
                  </svg>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                  {/* <strong className="d-inline-block mb-2 text-success-emphasis">
                    Design
                  </strong> */}
                  <h3 className="mb-0">Licensing and Commercialization</h3>
                  <br />
                  {/* <div className="mb-1 text-body-secondary">Nov 11</div> */}
                  <p className="mb-auto">
                    We facilitate the commercialization of intellectual property
                    generated through collaborative research, optimizing your
                    return on investment.
                  </p>
                  {/* <a
                    href="#"
                    className="icon-link gap-1 icon-link-hover stretched-link"
                  >
                    Continue reading
                    <svg className="bi">
                      <use xlinkHref="#chevron-right"></use>
                    </svg>
                  </a> */}
                </div>
                <div className="col-auto d-none d-lg-block">
                  <svg
                    className="bd-placeholder-img"
                    width="200"
                    height="250"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c"></rect>
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                      Thumbnail
                    </text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="container">
          {/* <h2 className={style.unihead}>
            Our University-Industry Collaboration Services
          </h2> */}
          <h1>Research Project Management</h1>
          {/* <p>
            We facilitate strategic alliances between your organization and
            leading universities. By identifying the right academic partners, we
            lay the foundation for productive, long-term collaborations. These
            partnerships can include research projects, knowledge sharing, and
            joint initiatives to tackle digital innovation challenges.
          </p> */}
          <br />
          <br />
          <div className="row mb-2">
            <div className="col-md-6">
              <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                  {/* <strong className="d-inline-block mb-2 text-primary-emphasis">
                    World
                  </strong> */}
                  <h3 className="mb-0">Customized Research Initiatives</h3>

                  <div className="mb-1 text-body-secondary"> </div>
                  <p className="card-text mb-auto">
                    We match industry-specific challenges with academic
                    expertise by facilitating collaborative research projects.
                    These projects drive digital innovation by addressing
                    industry needs with cutting-edge research.
                  </p>
                  {/* <a
                    href="#"
                    className="icon-link gap-1 icon-link-hover stretched-link"
                  >
                    Continue reading
                    <svg className="bi">
                      <use xlinkHref="#chevron-right"></use>
                    </svg>
                  </a> */}
                </div>
                <div className="col-auto d-none d-lg-block">
                  <svg
                    className="bd-placeholder-img"
                    width="200"
                    height="250"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c"></rect>
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                      Thumbnail
                    </text>
                  </svg>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                  {/* <strong className="d-inline-block mb-2 text-success-emphasis">
                    Design
                  </strong> */}
                  <h3 className="mb-0">Project Oversight</h3>
                  <br />
                  {/* <div className="mb-1 text-body-secondary">Nov 11</div> */}
                  <p className="mb-auto">
                    We manage the entire research process, ensuring timelines,
                    deliverables, and budgets are met while providing
                    transparency throughout.
                  </p>
                  {/* <a
                    href="#"
                    className="icon-link gap-1 icon-link-hover stretched-link"
                  >
                    Continue reading
                    <svg className="bi">
                      <use xlinkHref="#chevron-right"></use>
                    </svg>
                  </a> */}
                </div>
                <div className="col-auto d-none d-lg-block">
                  <svg
                    className="bd-placeholder-img"
                    width="200"
                    height="250"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c"></rect>
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                      Thumbnail
                    </text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="container">
          {/* <h2 className={style.unihead}>
            Our University-Industry Collaboration Services
          </h2> */}
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
                  {/* <strong className="d-inline-block mb-2 text-primary-emphasis">
                    World
                  </strong> */}
                  <h3 className="mb-0">Knowledge Sharing </h3>

                  <div className="mb-1 text-body-secondary"> </div>
                  <p className="card-text mb-auto">
                    We organize workshops, seminars, webinars, and events that
                    foster the exchange of knowledge, the generation of ideas,
                    the sharing of best practices, and the exploration of
                    emerging trends in digital innovation between universities
                    and industries.
                  </p>
                  {/* <a
                    href="#"
                    className="icon-link gap-1 icon-link-hover stretched-link"
                  >
                    Continue reading
                    <svg className="bi">
                      <use xlinkHref="#chevron-right"></use>
                    </svg>
                  </a> */}
                </div>
                <div className="col-auto d-none d-lg-block">
                  <svg
                    className="bd-placeholder-img"
                    width="200"
                    height="250"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c"></rect>
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                      Thumbnail
                    </text>
                  </svg>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                  {/* <strong className="d-inline-block mb-2 text-success-emphasis">
                    Design
                  </strong> */}
                  <h3 className="mb-0">Networking Opportunities</h3>
                  <br />
                  {/* <div className="mb-1 text-body-secondary">Nov 11</div> */}
                  <p className="mb-auto">
                    Connect with thought leaders, researchers, and industry
                    peers to nurture a culture of innovation within your
                    organization. Participate in events, forums, and conferences
                    to expand your digital innovation community. Access to a
                    network of like-minded organizations, researchers, and
                    innovators.
                  </p>
                  {/* <a
                    href="#"
                    className="icon-link gap-1 icon-link-hover stretched-link"
                  >
                    Continue reading
                    <svg className="bi">
                      <use xlinkHref="#chevron-right"></use>
                    </svg>
                  </a> */}
                </div>
                <div className="col-auto d-none d-lg-block">
                  <svg
                    className="bd-placeholder-img"
                    width="200"
                    height="250"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c"></rect>
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                      Thumbnail
                    </text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="container">
          {/* <h2 className={style.unihead}>
            Our University-Industry Collaboration Services
          </h2> */}
          <h1>Talent Pipeline Development</h1>
          <p>
            Access to a pool of bright, young minds is invaluable. Our Student
            Internship and Co-op Programs connect your organization with
            students, offering them real-world experience in exchange for fresh
            perspectives and innovative ideas.
          </p>
          <br />
          <br />
          <div className="row mb-2">
            <div className="col-md-6">
              <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                  {/* <strong className="d-inline-block mb-2 text-primary-emphasis">
                    World
                  </strong> */}
                  <h3 className="mb-0">Recruitment Assistance </h3>

                  <div className="mb-1 text-body-secondary"> </div>
                  <p className="card-text mb-auto">
                    We assist in identifying and recruiting top-tier talent from
                    academia to complement your digital innovation teams.
                  </p>
                  {/* <a
                    href="#"
                    className="icon-link gap-1 icon-link-hover stretched-link"
                  >
                    Continue reading
                    <svg className="bi">
                      <use xlinkHref="#chevron-right"></use>
                    </svg>
                  </a> */}
                </div>
                <div className="col-auto d-none d-lg-block">
                  <svg
                    className="bd-placeholder-img"
                    width="200"
                    height="250"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c"></rect>
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                      Thumbnail
                    </text>
                  </svg>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                  {/* <strong className="d-inline-block mb-2 text-success-emphasis">
                    Design
                  </strong> */}
                  <h3 className="mb-0">Internship and Co-op Programs</h3>
                  <br />
                  {/* <div className="mb-1 text-body-secondary">Nov 11</div> */}
                  <p className="mb-auto">
                    We establish programs that allow students to gain real-world
                    experience while contributing to your digital innovation
                    initiatives.
                  </p>
                  {/* <a
                    href="#"
                    className="icon-link gap-1 icon-link-hover stretched-link"
                  >
                    Continue reading
                    <svg className="bi">
                      <use xlinkHref="#chevron-right"></use>
                    </svg>
                  </a> */}
                </div>
                <div className="col-auto d-none d-lg-block">
                  <svg
                    className="bd-placeholder-img"
                    width="200"
                    height="250"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c"></rect>
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                      Thumbnail
                    </text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="container">
          {/* <h2 className={style.unihead}>
            Our University-Industry Collaboration Services
          </h2> */}
          <h1>Collaboration Metrics and Evaluation</h1>
          {/* <p>
            Access to a pool of bright, young minds is invaluable. Our Student
            Internship and Co-op Programs connect your organization with
            students, offering them real-world experience in exchange for fresh
            perspectives and innovative ideas.
          </p> */}
          <br />
          <br />
          <div className="row mb-2">
            <div className="col-md-6">
              <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                  {/* <strong className="d-inline-block mb-2 text-primary-emphasis">
                    World
                  </strong> */}
                  <h3 className="mb-0">Performance Assessment</h3>

                  <div className="mb-1 text-body-secondary"> </div>
                  <p className="card-text mb-auto">
                    We establish KPIs and evaluation frameworks to measure the
                    impact and effectiveness of university-industry
                    collaborations.
                  </p>
                  {/* <a
                    href="#"
                    className="icon-link gap-1 icon-link-hover stretched-link"
                  >
                    Continue reading
                    <svg className="bi">
                      <use xlinkHref="#chevron-right"></use>
                    </svg>
                  </a> */}
                </div>
                <div className="col-auto d-none d-lg-block">
                  <svg
                    className="bd-placeholder-img"
                    width="200"
                    height="250"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c"></rect>
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                      Thumbnail
                    </text>
                  </svg>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                  {/* <strong className="d-inline-block mb-2 text-success-emphasis">
                    Design
                  </strong> */}
                  <h3 className="mb-0">Continuous Improvement</h3>
                  <br />
                  {/* <div className="mb-1 text-body-secondary">Nov 11</div> */}
                  <p className="mb-auto">
                    Utilize data-driven insights to refine your collaborative
                    strategies and enhance digital innovation outcomes.
                  </p>
                  {/* <a
                    href="#"
                    className="icon-link gap-1 icon-link-hover stretched-link"
                  >
                    Continue reading
                    <svg className="bi">
                      <use xlinkHref="#chevron-right"></use>
                    </svg>
                  </a> */}
                </div>
                <div className="col-auto d-none d-lg-block">
                  <svg
                    className="bd-placeholder-img"
                    width="200"
                    height="250"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c"></rect>
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                      Thumbnail
                    </text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="container">
          {/* <h2 className={style.unihead}>
            Our University-Industry Collaboration Services
          </h2> */}
          <h1>Funding and Grant Procurement</h1>
          {/* <p>
            Access to a pool of bright, young minds is invaluable. Our Student
            Internship and Co-op Programs connect your organization with
            students, offering them real-world experience in exchange for fresh
            perspectives and innovative ideas.
          </p> */}
          <br />
          <br />
          <div className="row mb-2">
            <div className="col-md-6">
              <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                  {/* <strong className="d-inline-block mb-2 text-primary-emphasis">
                    World
                  </strong> */}
                  <h3 className="mb-0">Grant Identification </h3>

                  <div className="mb-1 text-body-secondary"> </div>
                  <p className="card-text mb-auto">
                    We help identify funding opportunities and assist in
                    crafting compelling grant applications for collaborative
                    digital innovation projects.
                  </p>
                  {/* <a
                    href="#"
                    className="icon-link gap-1 icon-link-hover stretched-link"
                  >
                    Continue reading
                    <svg className="bi">
                      <use xlinkHref="#chevron-right"></use>
                    </svg>
                  </a> */}
                </div>
                <div className="col-auto d-none d-lg-block">
                  <svg
                    className="bd-placeholder-img"
                    width="200"
                    height="250"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c"></rect>
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                      Thumbnail
                    </text>
                  </svg>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                  {/* <strong className="d-inline-block mb-2 text-success-emphasis">
                    Design
                  </strong> */}
                  <h3 className="mb-0">Financial Support</h3>
                  <br />
                  {/* <div className="mb-1 text-body-secondary">Nov 11</div> */}
                  <p className="mb-auto">
                    Access a network of grants and funding sources to support
                    your collaborative research initiatives.
                  </p>
                  {/* <a
                    href="#"
                    className="icon-link gap-1 icon-link-hover stretched-link"
                  >
                    Continue reading
                    <svg className="bi">
                      <use xlinkHref="#chevron-right"></use>
                    </svg>
                  </a> */}
                </div>
                <div className="col-auto d-none d-lg-block">
                  <svg
                    className="bd-placeholder-img"
                    width="200"
                    height="250"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c"></rect>
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                      Thumbnail
                    </text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
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
