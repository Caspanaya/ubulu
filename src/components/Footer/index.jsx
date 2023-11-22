import React from "react";
import styles from "./styles.module.css";
import { ReactComponent as Twitter } from "../../assets/Twitter-Icon.svg";
import { ReactComponent as Linkedin } from "../../assets/LinkedIn-Icon.svg";
import { ReactComponent as Instagram } from "../../assets/Instagram-Icon.svg";
import { ubuluLogo } from "../../assets";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.sec_one}>
          <img src={ubuluLogo} alt="" className={styles.logo} />

          <nav>
            <ul className="o_list">
              <li>
                <Link to="/">
                  <a>About</a>
                </Link>

                <Link to="/services">
                  <a>Services</a>
                </Link>
                <Link to="/programs">
                  <a>Programs</a>
                </Link>
                <Link to="/contact">
                  <a>Contact Us</a>
                </Link>
              </li>
            </ul>

            <Link to="/community">
              <a>Join Our Community</a>
            </Link>
          </nav>
        </div>
        <hr />
        <div className={styles.sec_three}>
          <div className={styles.copyright}>
            <p className={styles.copy}>
              © {new Date().getFullYear()} All rights reserved
            </p>
            <Link to="/privacy-policy">
              <a>Privacy Policy</a>
            </Link>
          </div>
          <div className={styles.social_links__container}>
            <a
              href="https://twitter.com/UbuluAfrica"
              target="_blank"
              rel="noreferrer"
            >
              <Twitter className={styles.socials} />
            </a>
            <a
              href="https://www.linkedin.com/company/ubulu-africa"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin className={styles.socials} />
            </a>
            <a
              href="https://www.instagram.com/Ubulu_africa/"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram className={styles.socials} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Footer };
