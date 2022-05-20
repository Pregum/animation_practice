import { FC, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Box from "./Box";

const DrawCanvas: FC = () => {
  return (
    <div style={{height: '500vh', display: 'flex', width: '100wh', backgroundColor: '#444488', overflow: 'scroll', flexDirection: 'column'}} >
      {/* <div style={{ height: 50, width: 50 }}> */}
      <div style={{ height: 300 }}>
    <Suspense fallback={<span>loading...</span>}>
      <Canvas>
        <PerspectiveCamera makeDefault />
        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
        <Box position={[0,0,-20.0]} />
      </Canvas>
    </Suspense>
      </div>

      {/* </div> */}

      <div style={{ display: 'flex', top: '200vh', width: '100wh', backgroundColor: '#882222' }}>ここに第２のエリアを挟む</div>
    </div>
  );
};

export default DrawCanvas;