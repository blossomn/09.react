import * as Styled from './styled';

import React from 'react';
import mainProfile from '../../../assets/images/mainProfile.jpg';
import story01 from '../../../assets/images/story/story01.jpg';
import story02 from '../../../assets/images/story/story02.jpg';
import story03 from '../../../assets/images/story/story03.jpg';

export default function Info() {
  return (
    <>
      <Styled.Container>
        <div>
          <Styled.MainProfileImg src={mainProfile} alt='mainProfile' />
        </div>
        <Styled.Info>
          <Styled.InfoTitle>
            <div>luna</div>
            <button>메시지 보내기</button>
            <button>팔로우</button>
          </Styled.InfoTitle>
          <Styled.InfoStatistic>
            <div>
              <span>게시물 </span>
              <span>1,805</span>
            </div>
            <div>
              <span>팔로워 </span>
              <span>316백만</span>
            </div>
            <div>
              <span>팔로우 </span>
              <span>218</span>
            </div>
          </Styled.InfoStatistic>
          <div>
            <Styled.InfoName>Luna</Styled.InfoName>
            <Styled.InfoJob>개발자 / IT</Styled.InfoJob>
            <Styled.InfoEtc>
              <span>Developer</span>
              <Styled.Link>@luna-dev</Styled.Link>
            </Styled.InfoEtc>

            <Styled.InfoEtc>
              <Styled.Link style={{ fontWeight: 'bold' }}>luna.dev.com</Styled.Link>
            </Styled.InfoEtc>
          </div>
        </Styled.Info>
      </Styled.Container>
      <Styled.TagContainer>
        <div>
          <div>
            <div>
              <Styled.TagImage src={story01} alt='mainProfile' />
            </div>
            <div>Life</div>
          </div>
          <div>
            <div>
              <Styled.TagImage src={story02} alt='mainProfile' />
            </div>
            <div>Travel</div>
          </div>
          <div>
            <div>
              <Styled.TagImage src={story03} alt='mainProfile' />
            </div>
            <div>Work</div>
          </div>
        </div>
      </Styled.TagContainer>
    </>
  );
}
