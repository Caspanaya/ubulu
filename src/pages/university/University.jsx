import React from "react";
import styles from "../ci/styles.module.css";
import style from "./uni.module.css";
import { LandingNav } from "../../components/Nav";
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
      </main>
    </>
  );
};

export default University;
