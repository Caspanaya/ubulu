import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Pro.module.css";
const ScrollProgram = () => {
  const handleClick = (section) => {
    document.getElementById(section).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Container>
      <Row>
        <Col xs={4}>
          <div
            className={styles.Program}
            onClick={() => handleClick("section1")}
          >
            Incubator & Accelerator Programs
          </div>
        </Col>
        <Col xs={4}>
          <div
            className={styles.Program}
            onClick={() => handleClick("section2")}
          >
            Digital for Development Programs
          </div>
        </Col>
        <Col xs={4}>
          <div
            className={styles.Program}
            onClick={() => handleClick("section3")}
          >
            Advisory & Consulting Services
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ScrollProgram;
