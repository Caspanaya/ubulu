import React, { useState } from "react";
import styles from "./Option.module.css"; // Import the main CSS module
// Import the CSS module for ComponentB
// Import the CSS modules for ComponentC and ComponentD

function Options() {
  const [activeComponent, setActiveComponent] = useState(null);

  const renderComponent = (component) => {
    setActiveComponent(component);
  };

  return (
    <div className={styles.appContainer}>
      <h1>Ancillary Options</h1>
      <br />
      <br />
      <div className={styles.buttonContainer}>
        <button
          onClick={() => renderComponent("ComponentA")}
          className={styles.button}
        >
          Sponsorship
        </button>
        <button
          onClick={() => renderComponent("ComponentB")}
          className={styles.button}
        >
          Startup For A Day
        </button>
        <button
          onClick={() => renderComponent("ComponentC")}
          className={styles.button}
        >
          Startup Bootcamp Week
        </button>
        <button
          onClick={() => renderComponent("ComponentD")}
          className={styles.button}
        >
          Other Events
        </button>
      </div>
      <br />
      <br />
      <div className={styles.componentContainer}>
        {activeComponent === "ComponentA" && <ComponentA />}
        {activeComponent === "ComponentB" && <ComponentB />}
        {activeComponent === "ComponentC" && <ComponentC />}
        {activeComponent === "ComponentD" && <ComponentD />}
        {/* Include rendering logic for ComponentC and ComponentD */}
      </div>
    </div>
  );
}

function ComponentA() {
  return (
    <div className={styles.component}>
      Enjoy primary logo promotion across Ubulu Africa's social channels,
      newsletters, PR announcements, and all other online and offline marketing
      materials, as well as speaking slots at major events, etc.
    </div>
  );
}

function ComponentB() {
  return (
    <div className={styles.component}>
      Participation in workshops, sitting side-by-side startups to ask
      questions, brainstorm, and explore alternative solutions relevant to your
      organisation.{" "}
    </div>
  );
}
function ComponentC() {
  return (
    <div className={styles.component}>
      {" "}
      A 5-day crash course program on market entry for international
      growth-stage companies considering cross-border expansion. Staying true to
      the lean startup approach, Startup Bootcamp Week provides a window for
      companies to explore and learn from experts on ideation, validation, and
      iteration. Experience Ubulu Africa's program and mentor ecosystem for one
      week and learn for life.
    </div>
  );
}
function ComponentD() {
  return (
    <div className={styles.component}>
      Enjoy primary logo promotion across Ubulu Africa's social channels,
      newsletters, PR announcements, and all other online and offline marketing
      materials, as well as speaking slots at major events, etc.
    </div>
  );
}
// Implement ComponentC and ComponentD in a similar way

export default Options;
