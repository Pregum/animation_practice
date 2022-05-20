import { FC, Suspense, useState, useEffect } from 'react';
import { animated, config, useSpring, useTransition } from 'react-spring';

const FifthArea: FC = () => {
  const [screenY, setScreenY] = useState<number>(0);

  const [h, setH] = useState<number>(30);

  useEffect(() => {
    window.addEventListener('wheel', (e) => {
      console.log('on wheel....e: ', e.screenY, 'offsetY: ', e.offsetY);
      const t = e.pageY - e.y;
      setScreenY(t);
      if (t > 2700) {
        console.log('call ttt!!!!');
        setH(20);
      } else if (t <= 2700) {
        setH(500);
      }
    });
  }, []);

  const styles = useSpring({
    to: {
      height: h,
    },
  });

  return (
    <div
      style={{
        display: 'flex',
        position: 'relative',
        // top: '100vh',
        width: '100%',
        height: '80vh',
        backgroundColor: '#222222',
      }}
    >
      {/* ここに第２のエリアを挟む */}
      <span
        style={{
          position: 'absolute',
          top: 120,
          left: '60vw',
          fontSize: 34,
          color: '#ffffff',
        }}
      >
        きれいなタイルって
      </span>
      <span
        style={{
          position: 'absolute',
          top: 180,
          left: '60vw',
          fontSize: 34,
          color: '#ffffff',
        }}
      >
        美味しそう。 -- {screenY}
      </span>
      <div style={{ display: 'Flex' }}>
        <animated.div
          style={{
            width: 200,
            left: '40vw',
            top: 50,
            height: styles.height,
            backgroundColor: '#999999',
          }}
        ></animated.div>
      </div>
    </div>
  );
};

export default FifthArea;
