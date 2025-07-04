import React, { useState } from "react";
import "./LogoGrid.css";

const logos = [
  { id: 1, icon: "🚀", title: "Enhanced Potency", description: "Identifying the most effective strains and enhancing their virulence many fold." },
  { id: 2, icon: "🧬", title: "Innovative Microbials", description: "Production of high CFU, zero contamination and long shelf life products in various formulations." },
  { id: 3, icon: "📅", title: "Long shelf life", description: "High shelf life (up to 24 months) even in unfavorable storage conditions." },
  { id: 4, icon: "🌱", title: "Enduring Adversity", description: "High-efficacy products in wide and unfavorable conditions of humidity, temperature, soil pH, etc." },
  { id: 5, icon: "💧", title: "Moisture Resistant", description: "Products designed to maintain efficacy even in moist environments." },
  { id: 6, icon: "🌞", title: "Heat Tolerant", description: "Ensuring stability under high temperature exposure." }
];

const LogoGrid = () => {
  const [activeLogoId, setActiveLogoId] = useState(null);

  const handleClick = (id) => {
    setActiveLogoId(activeLogoId === id ? null : id);
  };

  return (
    <div className="grid-container">
      {logos.map((logo, index) => {
        const isActive = activeLogoId === logo.id;
        const isRightColumn = index % 2 === 1;
        const shouldShiftLeft = activeLogoId && isRightColumn && !isActive;

        return (
          <div
            key={logo.id}
            className={`logo-card ${shouldShiftLeft ? "shift-left" : ""}`}
            onClick={() => handleClick(logo.id)}
          >
            <div className="logo-icon">{logo.icon}</div>
            <div className="logo-title">{logo.title}</div>

            {isActive && (
              <div className="info-panel">
                <h3>{logo.title}</h3>
                <p>{logo.description}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default LogoGrid;
