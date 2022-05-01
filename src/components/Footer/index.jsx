import * as Styled from './styled';

import React from 'react';

export default function Footer() {
  return (
    <Styled.Container>
      <div>
        <div>
          <div>Mega</div>
          <div>소개</div>
          <div>블로그</div>
          <div>채용 정보</div>
          <div>도움말</div>
          <div>API</div>
          <div>개인정보처리방침</div>
          <div>약관</div>
          <div>인기 계정</div>
          <div>해시태그</div>
          <div>위치</div>
          <div>Outstagram Lite</div>
        </div>
        <div>
          <div>댄스</div>
          <div>식음료</div>
          <div>집 및 정원</div>
          <div>음악</div>
          <div>시각 예술</div>
        </div>
        <div>
          <select name='language'>
            <option value='korean'>한국어</option>
            <option value='english'>english</option>
          </select>
          <div>&copy; 2022 Outstagram from Mega</div>
        </div>
      </div>
    </Styled.Container>
  );
}
