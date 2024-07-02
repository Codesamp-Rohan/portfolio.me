import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Model from "../../public/roll/Roll";
import { ContactShadows, OrbitControls } from "@react-three/drei";

const RollModel = () => {
  return (
    <Canvas>
      <ambientLight />
      <Suspense>
        <Model />
      </Suspense>
      <OrbitControls enableZoom={false} />
      <ContactShadows
        opacity={1}
        scale={10}
        blur={1}
        resolution={256}
        color="#fff"
      />
    </Canvas>
  );
};

export default RollModel;
