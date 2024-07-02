import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { ContactShadows, OrbitControls } from "@react-three/drei";
import Model from "../../public/planet/Earth";

const EarthModel = () => {
  return (
    <Canvas>
      <ambientLight />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <OrbitControls enableZoom={false} />
      <ContactShadows
        opacity={1}
        scale={10}
        blur={1}
        resolution={256}
        color="#000000"
      />
    </Canvas>
  );
};

export default EarthModel;
