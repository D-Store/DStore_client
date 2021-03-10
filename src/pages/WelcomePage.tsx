import React from 'react';
import 'styles/App.scss';

function WelcomePage() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '5rem',
      }}
    >
      <h1
        style={{
          fontSize: '30px',
          color: 'blue',
          marginBottom: '3rem',
        }}
      >
        D'Store develop에 오신것을 환영합니다!
      </h1>
      <p>
        개발을 하실 때에는{' '}
        <span
          style={{
            fontWeight: 'bold',
          }}
        >
          develop브랜치에 커밋을 하셔야하고,
        </span>{' '}
        프로젝트 메니저가 배포를 할때 master브랜치에 커밋을 하는 방식입니다. <br />꼭 Pull Request
        사이클을 정해서 개발을 하시고,{' '}
        <span
          style={{
            fontWeight: 'bold',
          }}
        >
          작업공간이 겹쳐서 충돌하는 일이 없도록 해야합니다.
        </span>
        <div
          style={{
            margin: '1rem',
            textAlign: 'center',
          }}
        >
          <h1>코드는 체계적으로, 반복작업을 줄이고, 최적화를 항상 생각하면서 개발합시다.</h1>
          <h1>즐거운 개발 되세요!</h1>
          <h1
            style={{
              fontWeight: 'bold',
            }}
          >
            감사합니다.
          </h1>
        </div>
      </p>
      <div
        style={{
          border: '1px solid black',
          width: '100%',
          margin: '1rem',
        }}
      ></div>
      링크
      <a href="https://www.notion.so/44242504aab74283ae229b422fea458d">Notion Link</a>
      <a href="https://github.com/D-Store/DStore_client">Github Link</a>
    </div>
  );
}

export default WelcomePage;
