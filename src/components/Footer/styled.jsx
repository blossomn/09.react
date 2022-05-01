import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 52px;
  padding: 16px;
  color: #8e8e8e;
  font-size: 12px;

  & > div > div {
    display: flex;
    justify-content: center;
    & > div {
      margin: 0 8px 12px;
    }
  }

  & > div > div > select {
    box-sizing: border-box;
    margin-top: -11px;
    border: none;
    background-color: #fafafa;
    color: #8e8e8e;
    font-size: 12px;
  }
`;
