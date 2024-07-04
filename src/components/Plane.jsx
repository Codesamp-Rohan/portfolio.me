import { Environment, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import Model from "../../public/plane/Plane";
import gsap from "gsap";

const Plane = ({ isMobile }) => {
  gsap.to(".fly-text", {
    // Target the specific h1 element
    scrollTrigger: {
      trigger: ".fly-text", // Trigger on the same element
      start: "top bottom", // Start animation halfway through the element
      end: "bottom top", // End animation 30% from the bottom
      scrub: true, // Animate based on scroll position
    },
    scale: 2,
    duration: 2, // Animation duration in seconds
    ease: "linear", // Easing function for smoother animation
  });

  return (
    <div className="w-screen h-screen flex bg-[#000] items-center justify-center">
      <div className="w-[80vw] md:w-[100vw] h-[80vh] md:h-[150vh] flex items-center bg-[#000] text-[#fff] goBold justify-center relative">
        <div className="absolute fly-text top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h1 className="font-extrabold whitespace-nowrap text-[2rem] md:text-[5rem]">
            TIME TO FLY!!!
          </h1>
          <h1 className="font-extrabold whitespace-nowrap text-[2rem] md:text-[5rem]">
            TIME TO FLY!!!
          </h1>
          <h1 className="font-extrabold whitespace-nowrap text-[2rem] md:text-[5rem]">
            TIME TO FLY!!!
          </h1>
        </div>
        <Canvas
          dpr={[1, 2]}
          camera={{ position: [0, 10, 0] }}
          style={{ position: "relative" }}>
          <ambientLight />
          <OrbitControls enableZoom={false} />
          <Suspense fallback={null}>
            <Model scale={isMobile ? "0.8" : "1.3"} />
          </Suspense>
          <Environment preset="sunset" />
        </Canvas>
        <h1 className="absolute bottom-10">3D model made by Darren McNerney</h1>
      </div>
    </div>
  );
};
export default Plane;
