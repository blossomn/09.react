import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  margin-top: 32px;
`;

export const Info = styled.div`
  & > div:not(:last-child) {
    display: flex;
  }
  margin-left: 20px;
`;

export const MainProfileImg = styled.img`
  width: 150px;
  height: 150px;
  overflow: hidden;
  margin: 0 80px;
  border: 3px solid transparent;
  border-radius: 50%;
  background-origin: border-box;
  background-clip: content-box, border-box;
`;

export const InfoTitle = styled.div`
  display: flex;
  align-items: center;
  height: 52px;
  margin-bottom: 28px;

  & > div {
    margin-right: 32px;
    font-weight: 300;
    font-size: 28px;
  }

  & > button {
    width: 96px;
    height: 30px;
    border: none;
    border-radius: 5px;
    background-color: #0095f6;
    color: #fff;
    font-weight: bold;
    font-size: 14px;
  }

  & > button:nth-of-type(1) {
    margin-right: 16px;
    background-color: transparent;
    color: #333;
    border: 1px solid #dbdbdb;
  }
`;

export const InfoStatistic = styled.div`
  margin-bottom: 24px;

  & > div {
    &:not(:last-child) {
      margin-right: 24px;
    }

    & > span:first-child {
      font-weight: bold;
    }
  }
`;

export const InfoName = styled.div`
  margin-bottom: 4px;
  font-weight: bold;
`;

export const InfoJob = styled.div`
  margin-bottom: 4px;
  color: #8e8e8e;
`;

export const InfoEtc = styled.div`
  margin-bottom: 4px;
`;

export const Link = styled.span`
  color: #00376b;
  cursor: pointer;
`;

export const TagContainer = styled.div`
  border-bottom: 1px solid #dbdbdb;

  & > div {
    display: flex;
    margin: 60px 0 0 40px;
    padding-bottom: 40px;
    text-align: center;

    & > div:not(:last-child) {
      margin-right: 48px;
    }

    & > div {
      font-weight: 500;
    }
  }
`;

export const TagImage = styled.img`
  width: 80px;
  height: 80px;
  overflow: hidden;
  border-radius: 50%;
  border: 3px solid #dbdbdb;
  background-origin: border-box;
  background-clip: content-box, border-box;
`;
