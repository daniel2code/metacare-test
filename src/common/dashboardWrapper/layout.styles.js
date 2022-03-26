import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  box-sizing: border-box;
`;

export const TopBox = styled.div`
  width: calc(100% - 270px);
  position: fixed;
  z-index: 1;

  @media screen and (max-width: 1100px) {
    width: 100%;
    margin-left: 0px;
  }
`;

export const BodyBox = styled.div`
  display: flex;
  width: calc(100% - 270px);
  margin-left: 270px;
  box-sizing: border-box;

  @media screen and (max-width: 1100px) {
    width: 100%;
    margin-left: 0px;
  }

  .pageContent {
    width: 100%;
    margin-top: 150px;
    padding: 20px 3%;
  }
`;

export const SideMenuBox = styled.div`
  width: 270px;
  position: fixed;

  @media screen and (max-width: 1100px) {
    display: none;
  }
`;
