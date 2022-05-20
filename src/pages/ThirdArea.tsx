import { FC, Suspense, useEffect, useState } from 'react';
import { animated, useSpring } from 'react-spring';

const ThirdArea: FC = () => {
  const [screenY, setScreenY] = useState<number>(0);

  const [h, setH] = useState<number>(30);
  const [op, setOp] = useState<number>(1);

  useEffect(() => {
    window.addEventListener('wheel', (e) => {
      console.log('on wheel....e: ', e.screenY, 'offsetY: ', e.offsetY);
      const t = e.pageY - e.y;
      setScreenY(t);
      if (t > 1500) {
        setH(20);
        setOp(0);
      } else if (t <= 1500) {
        setH(400);
        setOp(1);
      }
    });
  }, []);

  const styles = useSpring({
    to: {
      height: h,
      opacity: op,
    },
  });

  return (
    <div
      style={{
        display: 'flex',
        // top: '100vh',
        width: '100%',
        height: '80vh',
        backgroundColor: '#448822',
        position: 'relative',
      }}
    >
      <div style={{ display: 'flex' }}>
        <animated.div
          style={{
            position: 'absolute',
            width: '14vw',
            left: '50vw',
            top: 120,
            backgroundColor: '#999999',
            height: styles.height,
            opacity: styles.opacity,
          }}
        />
        <animated.div
          style={{
            position: 'absolute',
            width: '14vw',
            left: '65vw',
            top: 40,
            backgroundColor: '#999999',
            height: styles.height,
            opacity: styles.opacity,
          }}
        />
        <animated.div
          style={{
            position: 'absolute',
            width: '6vw',
            left: '48vw',
            top: 50,
            backgroundColor: '#99ff99',
            // height: styles.height,
            height: 120,
            opacity: styles.opacity,
          }}
        />
        <animated.div
          style={{
            position: 'absolute',
            width: '6vw',
            left: '76vw',
            top: 340,
            backgroundColor: '#2200aa',
            // height: styles.height,
            height: 120,
            opacity: styles.opacity,
          }}
        />
      </div>

      <span
        style={{
          position: 'absolute',
          top: 320,
          left: '24vw',
          fontSize: 34,
          color: '#ffffff',
        }}
      >
        今日の空の色だって
      </span>
      <span
        style={{
          position: 'absolute',
          top: 380,
          left: '24vw',
          fontSize: 34,
          color: '#ffffff',
        }}
      >
        タイルにできる。
      </span>
    </div>
  );
};

export default ThirdArea;
