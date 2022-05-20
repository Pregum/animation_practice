import { FC, Suspense, useState, useEffect } from 'react';

const SixthArea: FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        position: 'relative',
        width: '100%',
        height: '120vh',
        backgroundColor: '#336699',
      }}
    >
      <span
        style={{
          position: 'absolute',
          left: '10vw',
          top: 120,
          fontSize: 128,
          color: '#ffffff',
        }}
      >ABOUT</span>
      <span
        style={{
          position: 'absolute',
          left: '10vw',
          top: 240,
          fontSize: 24,
          color: '#ffffff',
        }}
      >私たちについて</span>
      <span
        style={{
          position: 'absolute',
          left: '10vw',
          top: 400,
          fontSize: 40,
          height: 300,
          color: '#ffffff',
        }}
      >あたらしいものを  <br/>
      生み出し続けるからこそ、<br/>
      守られる技術がある。
      </span>
      <span
        style={{
          position: 'absolute',
          left: '50vw',
          top: 400,
          width: '40vw',
          fontSize: 22,
          height: 300,
          color: '#ffffff',
        }}
      >
玉川釉薬は、タイルに色と艶を生み出す“釉薬”を製造している会社です。岐阜県瑞浪市で50年、技術を磨いてきました。釉薬は性質上、配合量の少しの違いで全く別の色ができあがります。同じ色を出し続けることも大切な技術ですが、繊細な色の変化を絶えず研究し続けるのも伝統を守るために必要な技術。つまり私たちは、常にあたらしいことに挑戦してきた会社なのです。その気概は、あたらしい時代になっても変わりません。これからも、タイルの可能性を、釉薬の可能性を探し、試し、生み出していきます。
      </span>
    </div>
  );
};

export default SixthArea;
