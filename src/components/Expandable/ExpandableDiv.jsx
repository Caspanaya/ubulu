import React, { useState } from "react";
import "./Expandable.css"; // Import your CSS file

const ExpandableDiv = ({ title, subtitle, text }) => {
  const [showMore, setShowMore] = useState(false);

  // Check if 'text' is a string before using 'slice'
  const displayText = typeof text === "string" ? text : "";

  return (
    <div className={`expandable-card ${showMore ? "expanded" : ""}`}>
      <h2>{title}</h2>
      <p className="subtitle">{subtitle}</p>
      <div className="text-body">
        {showMore ? displayText : `${displayText.slice(0, 100)}...`}
      </div>
      {displayText.length > 100 && (
        <button
          className="toggle-button"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Show Less" : "Learn More"}
        </button>
      )}
    </div>
  );
};

export default ExpandableDiv;
