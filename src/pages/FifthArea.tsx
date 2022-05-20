import { FC, Suspense } from 'react';

const FifthArea: FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        // top: '100vh',
        width: '100%',
        height: '80vh',
        backgroundColor: '#224444',
      }}
    >
      {/* ここに第２のエリアを挟む */}
      <span
        style={{
          position: 'relative',
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
          position: 'relative',
          top: 180,
          left: '48vw',
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