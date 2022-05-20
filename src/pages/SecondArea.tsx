import { FC, Suspense } from 'react';

const SecondArea: FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        // top: '100vh',
        width: '100%',
        height: '80vh',
        backgroundColor: '#882222',
      }}
    >
      {/* ここに第２のエリアを挟む */}
      <span
        style={{
          position: 'relative',
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
          position: 'relative',
          top: 180,
          left: '30vw',
          fontSize: 34,
          color: '#ffffff',
        }}
      >
        青であり、蒼であり、碧でもある。
      </span>
    </div>
  );
};

export default SecondArea;
