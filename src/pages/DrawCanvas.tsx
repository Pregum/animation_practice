import { FC, Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import Box from './Box';
import SecondArea from './SecondArea';
import ThirdArea from './ThirdArea';
import ForthArea from './ForthArea';
import FifthArea from './FifthArea';
import SixthArea from './SixthArea';
import SeventhArea from './SeventhArea';

const DrawCanvas: FC = () => {
  const [screenY, setScreenY] = useState<number>(0);
  const [rand1, setRand1] = useState<number>(0);
  const [rand2, setRand2] = useState<number>(0);
  const [rand3, setRand3] = useState<number>(0);
  useEffect(() => {
    window.addEventListener('wheel', (e) => {
      console.log('on wheel....e: ', e.screenY, 'offsetY: ', e.offsetY);
      setScreenY(e.pageY - e.y);
    });
    setRand1(Math.random() + 0.1);
    setRand2(Math.random() + 0.1);
    setRand3(Math.random() + 0.1);
  }, []);

  const FrontTiles = () => {
    return (
      <div style={{ display: 'flex', position: 'relative', zIndex: 2 }}>
        {Array(10)
          .fill(1)
          .map((elem, index) => index)
          .map((elem) => {
            return (
              <div
                key={'key_' + elem}
                style={{
                  height: 300,
                  width: 150,
                  backgroundColor: '#abc333',
                  display: 'flex',
                  position: 'absolute',
                  top: 20 - screenY * 1.5,
                  // left: elem * 170 - 50,
                  left:
                    elem < 5
                      ? elem * 170 - 50 - screenY * (rand1 + Math.abs(elem - 5))
                      : elem * 170 -
                        50 +
                        screenY * (rand1 + Math.abs(elem - 5)),
                }}
              />
            );
          })}
        {Array(10)
          .fill(1)
          .map((elem, index) => index)
          .map((elem) => {
            return (
              <div
                key={'sec_key_' + elem}
                style={{
                  height: 300,
                  width: 150,
                  backgroundColor: '#abc333',
                  display: 'flex',
                  position: 'absolute',
                  // top: 340,
                  top: 340 - screenY * 2,
                  // left: elem * 170 - 50,
                  left:
                    elem < 5
                      ? elem * 170 - 50 - screenY * (rand2 + Math.abs(elem - 4))
                      : elem * 170 -
                        50 +
                        screenY * (rand2 + Math.abs(elem - 4)),
                }}
              />
            );
          })}
        {Array(10)
          .fill(1)
          .map((elem, index) => index)
          .map((elem) => {
            return (
              <div
                key={'third_key_' + elem}
                style={{
                  height: 300,
                  width: 150,
                  backgroundColor: '#abc333',
                  display: 'flex',
                  position: 'absolute',
                  top: 660 - screenY,
                  left:
                    elem < 5
                      ? elem * 170 - 50 - screenY * (rand3 + Math.abs(elem - 4))
                      : elem * 170 -
                        50 +
                        screenY * (rand3 + Math.abs(elem - 4)),
                }}
              />
            );
          })}
      </div>
    );
  };

  return (
    <div
      style={{
        height: '800vh',
        display: 'flex',
        width: '100vw',
        overflow: 'scroll',
        flexDirection: 'column',
        zIndex: 2,
        position: 'relative',
      }}
    >
      <div
        style={{
          display: 'flex',
          position: 'relative',
          width: '100vw',
        }}
      >
        {FrontTiles()}
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
            width: '100vw',
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
      </div>
      <SecondArea />
      <ThirdArea />
      <ForthArea />
      <FifthArea />
      <SixthArea />
      <SeventhArea />
    </div>
  );
};

export default DrawCanvas;
