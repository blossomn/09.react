import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-bottom: 40px;
`;

export const Navigation = styled.div`
  display: flex;
  justify-content: center;
  margin: 16px 0;

  & > div {
    display: flex;
    font-weight: 500;
    font-size: 13px;
    & > span {
      margin-left: 4px;
    }
  }

  & > div:not(:first-child) {
    color: #8e8e8e;
  }

  & > div:not(:last-child) {
    margin-right: 40px;
  }
`;

export const Posts = styled.div`
  width: 100%;
  margin-top: -35px;

  & > div {
    display: flex;
    margin-bottom: 28px;

    &:nth-of-type(1) {
      margin-top: 52px;
    }

    & > div:hover {
      & > div {
        display: block;
      }
    }

    & > div {
      position: relative;
      width: 293px;
      height: 293px;
      cursor: pointer;

      &:not(:nth-child(3n)) {
        margin-right: 28px;
      }

      & > img {
        width: 100%;
        height: 100%;
      }

      & > div {
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #3934344a;
        color: white;
        font-weight: bold;
        font-size: 18px;

        & > div {
          display: flex;
          justify-content: space-around;
          position: absolute;
          top: calc(50% - 7px);
          left: 50%;
          margin-left: -118px;
          width: 238px;

          & > div {
            display: flex;
          }
        }
      }
    }
  }
`;
