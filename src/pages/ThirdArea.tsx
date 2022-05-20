import { FC, Suspense } from 'react';

const ThirdArea: FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        // top: '100vh',
        width: '100%',
        height: '80vh',
        backgroundColor: '#448822',
      }}
    >
      {/* ここに第２のエリアを挟む */}
      <span
        style={{
          position: 'relative',
          top: 120,
          left: '10vw',
          fontSize: 34,
          color: '#ffffff',
        }}
      >
        今日の空の色だって
      </span>
      <span
        style={{
          position: 'relative',
          top: 180,
          left: '-10vw',
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
