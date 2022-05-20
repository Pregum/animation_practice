import { FC, Suspense, useState, useEffect } from 'react';
import { animated, config, useSpring, useTransition } from 'react-spring';

const FifthArea: FC = () => {
  const [screenY, setScreenY] = useState<number>(0);

  const [h, setH] = useState<number>(30);
  const [op, setOp] = useState<number>(1);

  useEffect(() => {
    window.addEventListener('wheel', (e) => {
      console.log('on wheel....e: ', e.screenY, 'offsetY: ', e.offsetY);
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
        position: 'relative',
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
          left: '70vw',
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
          left: '70vw',
          fontSize: 34,
          color: '#ffffff',
        }}
      >
        美味しそう。 -- {screenY}
      </span>
      <div style={{ display: 'Flex' }}>
        <animated.div
          style={{
            position: 'absolute',
            width: '15vw',
            left: '12vw',
            top: 50,
            backgroundColor: '#999999',
            height: styles.height,
            opacity: styles.opacity,
          }}
        />
        <animated.div
          style={{
            position: 'absolute',
            width: '15vw',
            left: '28vw',
            top: 150,
            backgroundColor: '#999999',
            height: styles.height,
            opacity: styles.opacity,
          }}
        />
      </div>
    </div>
  );
};

export default FifthArea;
