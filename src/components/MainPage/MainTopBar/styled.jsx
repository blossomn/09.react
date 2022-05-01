import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 935px;
  margin: 0 auto;
  padding: 8px 0;
`;

export const MainLogoImg = styled.img`
  width: 136px;
  height: 40px;
`;

export const Search = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 268px;
  height: 36px;
  padding: 0 16px;
  border-radius: 10px;
  background-color: #efefef;

  & > div {
    box-sizing: border-box;
    padding-top: 3px;
  }

  & > input {
    width: 236px;
    height: 25px;
    margin-left: 5px;
    background-color: #efefef;
    border: none;
  }
`;

export const Icons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 200px;

  & > div {
  }
`;
