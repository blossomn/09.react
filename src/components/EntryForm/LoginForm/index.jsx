import * as Styled from '../styled';

import { FaFacebookSquare } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import React, { useCallback } from 'react';
import { useInput } from '../../../hooks/useInput';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const navigate = useNavigate();
  const [userId, onChangeId] = useInput('');
  const [userPw, onChangePw] = useInput('');

  const login = useCallback(() => {
    if (!userId || !userPw) {
      alert('아이디와 비밀번호를 입력해주세요.');
      return;
    }

    sessionStorage.setItem('token', 'token');
    navigate('/');
  }, [navigate, userId, userPw]);

  return (
    <Styled.LoginContainer color='#dbdbdb'>
      <div>
        <form>
          <div>
            <input
              type='text'
              name='email'
              placeholder='전화번호, 사용자 이름 또는 이메일'
              value={userId}
              onChange={onChangeId}
            />
          </div>
          <div>
            <input
              type='password'
              name='password'
              placeholder='비밀번호'
              value={userPw}
              onChange={onChangePw}
            />
          </div>
          <Styled.Button onClick={login}>
            <button>로그인</button>
          </Styled.Button>
          <Styled.Or>
            <div></div>
            <div>또는</div>
            <div></div>
          </Styled.Or>
          <Styled.FacebookLogin>
            <IconContext.Provider value={{ color: '#385185' }}>
              <div>
                <FaFacebookSquare />
              </div>
            </IconContext.Provider>
            <span>Facebook으로 로그인</span>
          </Styled.FacebookLogin>
          <div>비밀번호를 잊으셨나요?</div>
        </form>
      </div>
    </Styled.LoginContainer>
  );
}
