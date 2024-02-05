/*

Prototyping a main component for a "devfolio"

The idea is it is almost too easy to view more
items, perhaps even accidently. Project pics
will load. One of them will probably be GIF
based. The point is to be seen and I think
this accomplishes that.

*/


import React, { useState } from "react";

const hrPortfolio = {
  name: "HR Portfolio",
  url: "https://www.google.com",
  items: [
    { name: "Portfolio Item 1" },
    { name: "Portfolio Item 2" },
  ],
};

const nerdFolio = {
  name: "nerdfolio",
  url: "https://www.google.com",
  items: [
    { whatever: "Nerdfolio Item 1" },
    { whatever: "Nerdfolio Item 2" },
  ],
};

export default function MyButton() {
  const [hoveredType, setHoveredType] = useState(null);


  function handleHover(type) {
    setHoveredType(type);
  }

  function handleMouseLeave() {
    setHoveredType(null);
  }

  return (
    <div onMouseLeave={handleMouseLeave}>
      <button onMouseEnter={() => handleHover("HR")}>HR Portfolio</button>
      {hoveredType === "HR" && (
        <>
          <a href={hrPortfolio.url} target="_blank" rel="noopener noreferrer">
            {hrPortfolio.name}
          </a>
          <ul>
            {hrPortfolio.items.map((item) => (
              <li key={item.name}>{item.name}</li>
            ))}
          </ul>
        </>
      )}
      <button onMouseEnter={() => handleHover("nerds")}>Nerdfolio</button>
      {hoveredType === "nerds" && (
        <>
          <a href={nerdFolio.url} target="_blank" rel="noopener noreferrer">
            {nerdFolio.name}
          </a>
          <ul>
            {nerdFolio.items.map((item) => (
              <li key={item.whatever}>{item.whatever}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
