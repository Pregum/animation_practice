import React, { FC, Suspense, useState, useEffect } from 'react';

import Image from 'next/image';

const SeventhArea: FC = () => {
  const woman1 = () => {
    return (
      <React.Fragment>
        <div
          style={{
            position: 'absolute',
            width: '20vw',
            left: '12vw',
            top: 200,
            backgroundColor: '#999999',
            height: 400,
          }}
        >
          <Image
            src='/stand_woman2.png'
            width='280px'
            height='360px'
            alt='woman1'
          />
        </div>
        <span
          style={{
            position: 'absolute',
            left: '12vw',
            top: 650,
            fontSize: 18,
            color: '#ffffff',
          }}
        >
          釉薬職人/玉川釉薬専務
        </span>
        <span
          style={{
            position: 'absolute',
            left: '12vw',
            top: 680,
            fontSize: 22,
            color: '#ffffff',
          }}
        >
          井戸(玉川) 尋子
        </span>
        <span
          style={{
            position: 'absolute',
            left: '12vw',
            top: 750,
            fontSize: 16,
            width: '15vw',
            color: '#ffffff',
          }}
        >
          1982年岐阜県瑞浪市生まれ。玉川家四姉妹の次女。業界唯一の女性釉薬職人として、タイルの色開発に取り組む。関西大学マスコミュニケーション学科に入学するも就職を間近に控えた三
        </span>
      </React.Fragment>
    );
  };

  const man1 = () => {
    return (
      <React.Fragment>
        <div
          style={{
            position: 'absolute',
            width: '20vw',
            left: '40vw',
            top: 50,
            backgroundColor: '#999999',
            height: 400,
          }}
        >
          <Image
            src='/sitting_man.png'
            width='280px'
            height='360px'
            alt='woman1'
          />
        </div>
        <span
          style={{
            position: 'absolute',
            left: '40vw',
            top: 500,
            fontSize: 18,
            color: '#ffffff',
          }}
        >
          釉薬職人/玉川釉薬代表取締役
        </span>
        <span
          style={{
            position: 'absolute',
            left: '40vw',
            top: 530,
            fontSize: 22,
            color: '#ffffff',
          }}
        >
          玉川 勉
        </span>
        <span
          style={{
            position: 'absolute',
            left: '40vw',
            top: 600,
            fontSize: 16,
            width: '15vw',
            color: '#ffffff',
          }}
        >
          釉薬職人/玉川釉薬代表取締役 玉川 勉 1947年長崎県佐世保市生まれ。
          職人歴59年。中学卒業と同時に集団就職で岐阜県へ移住。釉薬会社に就職し夜学に通いながら職人として働く。その後、長崎から家族を呼び寄せ、親と妹三人を支える一家の大黒柱として仕事に従事。釉薬職人として同会社に28年間勤務し番頭を務める。1978年に結婚し、四姉妹の
        </span>
      </React.Fragment>
    );
  };

  const woman2 = () => {
    return (
      <React.Fragment>
        <div
          style={{
            position: 'absolute',
            width: '20vw',
            left: '65vw',
            top: 280,
            backgroundColor: '#999999',
            height: 400,
          }}
        >
          <Image
            src='/staff_woman.png'
            width='280px'
            height='360px'
            alt='woman1'
          />
        </div>
        <span
          style={{
            position: 'absolute',
            left: '65vw',
            top: 730,
            fontSize: 18,
            color: '#ffffff',
          }}
        >
          タイルプロデューサー
        </span>
        <span
          style={{
            position: 'absolute',
            left: '65vw',
            top: 760,
            fontSize: 22,
            color: '#ffffff',
          }}
        >
          玉川 幸枝
        </span>
        <span
          style={{
            position: 'absolute',
            left: '65vw',
            top: 830,
            fontSize: 16,
            width: '15vw',
            color: '#ffffff',
          }}
        >
          1984年岐阜県瑞浪市生まれ。玉川家四姉妹の三女。合同会社プロトビ・TILE
          made代表。焼き物の産地・岐阜の東美濃で作られるタイルの魅力を発信し文化を継承すべく、家業の釉薬技術を活かしたタイルブランド「TILE
          m
        </span>
      </React.Fragment>
    );
  };

  return (
    <div
      style={{
        display: 'flex',
        position: 'relative',
        width: '100%',
        height: 1200,
        backgroundColor: '#996633',
      }}
    >
      {woman1()}
      {man1()}
      {woman2()}
    </div>
  );
};

export default SeventhArea;
