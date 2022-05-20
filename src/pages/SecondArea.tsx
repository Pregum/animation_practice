import { FC, Suspense, useEffect, useState } from 'react';
import { animated, useSpring } from 'react-spring';

const SecondArea: FC = () => {
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
      if (t > 800) {
        setH(20);
        setOp(0);
      } else if (t <= 800) {
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
        backgroundColor: '#882222',
        position: 'relative',
      }}
    >
      {/* ここに第２のエリアを挟む */}
        <animated.div
          style={{
            position: 'absolute',
            width: '13vw',
            left: '25vw',
            top: 190,
            backgroundColor: '#999999',
            height: styles.height,
            opacity: styles.opacity,
          }}
        />
        <animated.div
          style={{
            position: 'absolute',
            width: '13vw',
            left: '40vw',
            top: 50,
            backgroundColor: '#999999',
            height: styles.height,
            opacity: styles.opacity,
          }}
        />
        <animated.div
          style={{
            position: 'absolute',
            width: '13vw',
            left: '55vw',
            top: 110,
            backgroundColor: '#999999',
            height: styles.height,
            opacity: styles.opacity,
          }}
        />

      <span
        style={{
          position: 'absolute',
          top: 120,
          left: '60vw',
          fontSize: 48,
          color: '#ffffff',
        }}
      >
        This is tamagawa blue.
      </span>
      <span
        style={{
          position: 'absolute',
          top: 180,
          left: '60vw',
          fontSize: 32,
          color: '#ffffff',
        }}
      >
        青であり、蒼であり、碧でもある。
      </span>

    </div>
  );
};

export default SecondArea;
