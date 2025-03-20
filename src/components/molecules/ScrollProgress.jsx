import { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const ScrollProgress = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    setScrollPercentage(progress);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          width: 60,
          height: 60,
        }}
      >
        <CircularProgressbar
          value={scrollPercentage}
          text={""}
          strokeWidth={5}
          styles={buildStyles({
            textColor: "black",
            pathColor: "#f64c53",
            trailColor: "#e0e0e0",
          })}
        />
        {/* Custom Overlay with Icon and Text */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            fontSize: "12px",
            color: "black",
          }}
        >
          <div>Content</div>
        </div>
      </div>
    </div>
  );
};

export default ScrollProgress;
