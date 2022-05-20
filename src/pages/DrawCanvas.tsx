import { FC, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Box from "./Box";

const DrawCanvas: FC = () => {
  return (
    <Suspense fallback={<span>loading...</span>}>
      <Canvas>
        <PerspectiveCamera makeDefault />
        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
        <Box position={[0,0,-2.0]} />
      </Canvas>
    </Suspense>
  );
};

export default DrawCanvas;