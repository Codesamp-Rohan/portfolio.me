import { useState, useEffect } from "react";

const MouseFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [dataValue, setDataValue] = useState(null); // State to store dataValue

  const mouseMove = (e) => {
    setMousePosition({
      x: e.pageX,
      y: e.pageY,
    });
    const targetElement = document.elementFromPoint(e.clientX, e.clientY);
    if (targetElement) {
      const dataValue = targetElement.dataset
        ? targetElement.dataset.value
        : null; // Check for dataset existence
      setDataValue(dataValue);
    } else {
      setDataValue(null); // Reset dataValue if no element found
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  const followerStyle = {
    left: `${mousePosition.x}px`,
    top: `${mousePosition.y}px`,
    position: "absolute",
  };

  return (
    <div
      id="mouse-follower"
      className="pointer-events-none z-[1000]"
      style={followerStyle}>
      <span className="flex rounded-r-xl rounded-b-xl bg-[#e6e6e65b] backdrop-blur-lg border-[1px] border-[#bbb] shadow-lg px-4 py-2 ml-[20px] mt-[10px]">
        {dataValue ? `${dataValue}` : "portfolio. "}
      </span>
    </div>
  );
};

export default MouseFollower;
