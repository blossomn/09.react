import * as Styled from './styled';

import React, { useEffect, useState } from 'react';

import JoinForm from './JoinForm';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';
import appStore from '../../assets/icons/appStore.png';
import googlePlay from '../../assets/icons/googlePlay.png';
import logo from '../../assets/icons/logo.png';

export default function EntryForm() {
  const [isLoginPage, setIsLoginPage] = useState(false);
  const [isJoinPage, setIsJoinPage] = useState(false);

  useEffect(() => {
    if (!isJoinPage && window.location.href.search('login') > -1) {
      setIsLoginPage(true);
    }

    if (!isLoginPage && window.location.href.search('join') > -1) {
      setIsJoinPage(true);
    }
  }, [isJoinPage, isLoginPage]);

  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Styled.TopSection>
          <div>
            <Styled.FacebookLogin>
              <Styled.LogoImg src={logo} alt='logo' />
            </Styled.FacebookLogin>
          </div>
          {isLoginPage && <LoginForm />}
          {isJoinPage && <JoinForm />}
        </Styled.TopSection>
      </Styled.Wrapper>
      <Styled.Wrapper>
        <Styled.MiddleSection>
          <div>
            <p>
              {isLoginPage && '계정이 없으신가요?'}
              {isJoinPage && '계정이 있으신가요?'}
              <span>
                {isLoginPage && <Link to={'/join'}> 가입하기</Link>}
                {isJoinPage && <Link to={'/login'}> 로그인하기</Link>}
              </span>
            </p>
          </div>
        </Styled.MiddleSection>
      </Styled.Wrapper>

      <Styled.BottomSection>
        <p>앱을 다운로드하세요.</p>
        <Styled.FacebookLogin>
          <Styled.AppStoreImg src={appStore} alt='appStore' />
          <Styled.GooglePlayImg src={googlePlay} alt='googlePlay' />
        </Styled.FacebookLogin>
      </Styled.BottomSection>
    </Styled.Container>
  );
}
