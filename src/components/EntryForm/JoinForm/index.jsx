import * as Styled from '../styled';

import React, { useCallback } from 'react';

import { FaFacebookSquare } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { useInput } from '../../../hooks/useInput';
import { useNavigate } from 'react-router-dom';

export default function JoinForm() {
  const navigate = useNavigate();
  const [userId, onChangeId] = useInput('');
  const [userName, onChangeName] = useInput('');
  const [userNickname, onChangeNickname] = useInput('');
  const [userPw, onChangePw] = useInput('');

  const join = useCallback(() => {
    if (!userId || !userName || !userNickname || !userPw) {
      alert('내용을 입력해주세요.');
      return;
    }

    sessionStorage.setItem('token', 'token');
    navigate('/');
  }, [navigate, userId, userName, userNickname, userPw]);

  return (
    <Styled.JoinContainer>
      <div>
        <h2>친구들의 사진과 동영상을 보려면 가입하세요.</h2>
        <Styled.Button>
          <button>
            <Styled.FacebookLogin>
              <IconContext.Provider value={{ color: '#fff' }}>
                <div>
                  <FaFacebookSquare />
                </div>
              </IconContext.Provider>
              <span>Facebook으로 로그인</span>
            </Styled.FacebookLogin>
          </button>
        </Styled.Button>
        <Styled.Or>
          <div></div>
          <div>또는</div>
          <div></div>
        </Styled.Or>
        <Styled.InputBox>
          <div>
            <input
              type='text'
              name='email'
              placeholder='휴대폰 번호 또는 이메일 주소'
              value={userId}
              onChange={onChangeId}
            />
          </div>
          <div>
            <input
              type='text'
              name='name'
              placeholder='성명'
              value={userName}
              onChange={onChangeName}
            />
          </div>
          <div>
            <input
              type='text'
              name='userName'
              placeholder='사용자 이름'
              value={userNickname}
              onChange={onChangeNickname}
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
        </Styled.InputBox>
        <Styled.Button>
          <button onClick={join}>가입</button>
        </Styled.Button>
      </div>
    </Styled.JoinContainer>
  );
}
