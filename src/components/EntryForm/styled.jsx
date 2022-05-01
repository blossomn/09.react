import styled from 'styled-components';

/* COMMON */

export const FacebookLogin = styled.div`
  display: flex;
  justify-content: center;

  & > span {
    margin: 0 0 0 8px;
    font-weight: 700;
    font-size: 14px;
  }
`;

export const Or = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 40px 18px;
  color: #8e8e8e;
  font-weight: 700;
  font-size: 13px;

  & > div:first-child,
  & > div:last-child {
    width: 105px;
    height: 1px;
    background-color: #dbdbdb;
  }
`;

export const Button = styled.div`
  & > button {
    width: 268px;
    height: 32px;
    margin: 8px 40px;
    border: none;
    border-radius: 4px;
    background-color: #0095f6;
    color: #fff;
    font-weight: 700;
    font-size: 14px;
    cursor: pointer;
  }
`;

/* CONTAINER */
export const Container = styled.div`
  box-sizing: border-box;
  max-width: 935px;
  margin: 48px auto 0;
`;

export const Wrapper = styled.div`
  max-width: 350px;
  width: 350px;
  margin: 0 0 10px;
  border: 1px solid #dbdbdb;
`;

/* TOP_SECTION */
export const TopSection = styled.div`
  width: 100%;
  padding: 10px 0;
  margin: 0 0 10px;

  & > div {
    display: flex;
    justify-content: center;
  }

  & > div:first-child {
    margin: 36px 0 12px 0;
  }
`;

export const LogoImg = styled.img`
  width: 175px;
  height: 51px;
`;

/* MIDDLE_SECTION */
export const MiddleSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  height: 68px;
  padding: 10px 0;
  font-size: 14px;

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 190px;
    height: 48px;
    margin: -3px 0 -4px;
  }

  & > div {
    display: flex;
    justify-content: space-evenly;
    padding: 15px;
  }

  & > div > p > span > a {
    color: #0295f6;
    font-weight: 700;
    text-decoration: none;
  }
`;

/* BOTTOM_SECTION */
export const BottomSection = styled.div`
  width: 100%;
  height: 102px;
  font-size: 14px;
  text-align: center;
`;

export const AppStoreImg = styled.img`
  width: 136px;
  height: 40px;
  padding: 0 5px;
`;

export const GooglePlayImg = styled.img`
  width: 134.28px;
  height: 40px;
`;

/* LoginForm */
export const LoginContainer = styled.div`
  margin: 24px 0 0 0;

  & > div > form {
    width: 100%;
    text-align: center;

    & > div > input {
      box-sizing: border-box;
      width: 268px;
      height: 38px;
      margin: 0 40px 6px;
      padding: 9px 0 7px 8px;
      border: 1px solid ${props => props.color};
      border-radius: 4px;
      background-color: #fafafa;
    }

    & > div:nth-of-type(5) {
      display: flex;
      color: #385185;
    }

    & > div:nth-of-type(6) {
      margin: 12px;
      color: #385185;
      font-size: 12px;
    }
  }
`;

/* JoinForm */
export const JoinContainer = styled.div`
  box-sizing: border-box;
  padding: 0 0 10px;
  text-align: center;

  & > div > h2 {
    display: block;
    height: 40px;
    margin: 0 40px 10px 40px;
    color: #8e8e8e;
    font-size: 17px;
  }
`;

export const InputBox = styled.div`
  & > div > input {
    box-sizing: border-box;
    width: 268px;
    height: 38px;
    margin: 3px 40px;
    padding: 9px 0 7px 8px;
    border: 1px solid #dbdbdb;
    border-radius: 4px;
    background-color: #fafafa;
    font-size: 12px;
  }
`;
