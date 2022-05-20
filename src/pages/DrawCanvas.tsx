import { FC, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import Box from './Box';
import SecondArea from './SecondArea';
import ThirdArea from './ThirdArea';
import ForthArea from './ForthArea';
import FifthArea from './FifthArea';

const DrawCanvas: FC = () => {
  return (
    <div
      style={{
        height: '500vh',
        display: 'flex',
        width: '100wh',
        overflow: 'scroll',
        flexDirection: 'column',
        // backgroundColor: '#444488',
        // opacity: 0.2,
        zIndex: -2,
      }}
    >
      {/* <div style={{ height: 50, width: 50 }}> */}
      <div
        style={{
          height: '100vh',
          transform: 'transrateZ(0)',
          backgroundColor: '#444488',
          zIndex: -2,
        }}
      >
        <div
          style={{
            position: 'relative',
            left: 800,
            top: 400,
            color: '#ffffff',
          }}
        >
          <span>hogehoge</span>
        </div>
        <Suspense fallback={<span>loading...</span>}>
          <Canvas style={{ zIndex: 1 }}>
            <PerspectiveCamera makeDefault />
            <OrbitControls
              enablePan={true}
              enableZoom={true}
              enableRotate={true}
            />
            <Box position={[0, 0, -20.0]} />
          </Canvas>
        </Suspense>
      </div>
      <SecondArea />
      <ThirdArea />
      <ForthArea />
      <FifthArea />
    </div>
  );
};

export default DrawCanvas;
