import { useEffect, useRef } from "react";

export default function Hero() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      Delay: 1333,
      Speed: 57,
      strings: ["Developer", "AI", "Mobile"],
    });
  }, []);

  return (
    <div className="hero" id="hero">
      <div className="left">
        <div className="img">
          <img src="" alt="your image" />      // place your own image
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Heyyy There! I'm</h2>
          <h1>Richard Lipkovitz</h1>
          <h4>
            Freelance <span ref={textRef}></span>
          </h4>
        </div>
        <a href="#portfolio">
          <img src="" alt="your portfolio" />    // place your own image
        </a>
      </div>
    </div>
  );
}
