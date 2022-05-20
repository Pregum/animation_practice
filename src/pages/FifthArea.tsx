import { FC, Suspense, useEffect, useState } from 'react';
import { animated, useSpring } from 'react-spring';

const FifthArea: FC = () => {
  const [screenY, setScreenY] = useState<number>(0);
  const [h, setH] = useState<number>(30);
  const [op, setOp] = useState<number>(1);

  const styles = useSpring({
    to: {
      height: h,
      opacity: op,
    },
  });

  useEffect(() => {
    window.addEventListener('wheel', (e) => {
      // console.log('on wheel....e: ', e.screenY, 'offsetY: ', e.offsetY);
      const t = e.pageY - e.y;
      setScreenY(t);
      if (t > 2800) {
        setH(20);
        setOp(0);
      } else if (t <= 2800) {
        setH(400);
        setOp(1);
      }
    });
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        // top: '100vh',
        width: '100%',
        height: '80vh',
        backgroundColor: '#224444',
        position: 'relative',
      }}
    >
      <animated.div
        style={{
          position: 'absolute',
          width: '13vw',
          left: '75vw',
          top: 80,
          backgroundColor: '#999999',
          height: styles.height,
          opacity: styles.opacity,
        }}
      />
      {/* ここに第２のエリアを挟む */}
      <span
        style={{
          position: 'absolute',
          top: 220,
          left: '50vw',
          fontSize: 34,
          color: '#ffffff',
        }}
      >
        きれいなタイルって
      </span>
      <span
        style={{
          position: 'absolute',
          top: 280,
          left: '50vw',
          fontSize: 34,
          color: '#ffffff',
        }}
      >
        美味しそう。
      </span>
    </div>
  );
};

export default FifthArea;
