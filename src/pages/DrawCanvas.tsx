import { FC, Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import Box from './Box';
import SecondArea from './SecondArea';
import ThirdArea from './ThirdArea';
import ForthArea from './ForthArea';
import FifthArea from './FifthArea';

const DrawCanvas: FC = () => {
  const [screenY, setScreenY] = useState<number>(0);
  useEffect(() => {
    window.addEventListener('wheel', (e) => {
      console.log('on wheel....e: ', e.screenY, 'offsetY: ', e.offsetY);
      setScreenY(e.pageY - e.y);
    });
  }, []);

  return (
    <div
      style={{
        height: '600vh',
        display: 'flex',
        width: '100wh',
        overflow: 'scroll',
        flexDirection: 'column',
        zIndex: 2,
      }}
    >
      <div
        style={{
          position: 'fixed',
          top: 10,
          left: 10,
          zIndex: 10,
          color: '#ffaaaa',
        }}
      >
        {screenY}
      </div>
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
          <Canvas
            style={{ zIndex: 1 }}
            onScroll={(e) => {
              console.log('e: ', e);
            }}
          >
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
