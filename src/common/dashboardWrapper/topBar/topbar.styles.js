import styled, { keyframes, css } from "styled-components";

const animateLoader3 = keyframes`
  0% {
    transform: scale(1);
  }

  50%,
  75% {
    transform: scale(2.5);
  }

  80%,
  100% {
    opacity: 0;
  }
 `;

const BlinkCss = css`
  animation: ${animateLoader3} 2s ease-out infinite;
`;

export const Container = styled.div`
  width: 100%;
  height: 74px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ecebf5;
  justify-content: space-between;
  padding: 0px 3%;
  box-sizing: border-box;
  background-color: white;
  position: relative;

  @media screen and (max-width: 650px) {
    justify-content: flex-start;
  }

  .menus {
    display: none;

    > img {
      width: 24px;
      height: 24px;
      cursor: pointer;
    }

    @media screen and (max-width: 1100px) {
      display: block;
    }
  }

  .searchBox {
    display: flex;
    align-items: center;
    background-color: #fafafc;
    border-radius: 10px;
    width: 40%;
    padding: 10px 15px;

    @media screen and (max-width: 650px) {
      margin-left: 30px;
      width: 80%;
    }

    .input {
      width: calc(100% - 30px);
      background-color: transparent;
      padding: 8px 6px;
      border: none;
      outline: none;

      ::placeholder {
        color: #a3a3c2;
        font-size: 15px;
      }
    }
  }
`;

export const NotificationBox = styled.div`
  width: 170px;
  border: 1px solid #ecebf5;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 10px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 650px) {
    display: none;
  }

  .notification {
    display: flex;
    align-items: center;
    padding: 0px 20px 0px 7px;
    border-right: 1px solid #ecebf5;

    .tracker {
      width: 15px;
      height: 15px;
      background: #f25a68;
      border-radius: 4px;
      justify-content: center;
      align-items: center;
      display: flex;
      margin-left: 7px;
    }

    .tracker p {
      font-size: 12px;
      color: white;
    }
  }

  .dropdown {
    display: flex;
    align-items: center;
    padding: 0px 15px;
    position: relative;

    .round {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      border: 1px solid #6837ef;
      position: relative;

      &:before {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        border-radius: 50%;
        opacity: 0.5;
        background-color: #6837ef;
        ${BlinkCss};
        /* animation: animateLoader3 2s ease-out infinite; */
      }
    }
  }

  .dropdown img {
    margin-left: 15px;
    cursor: pointer;
  }
`;

export const NavBar = styled.div`
  display: flex;
  align-items: center;
  padding: 0% 3%;
  box-sizing: border-box;
  grid-gap: 4%;
  width: 100%;
  border-bottom: 1px solid #ecebf5;
  padding-top: 13px;
  background-color: white;
  overflow-x: scroll;

  @media screen and (max-width: 650px) {
    grid-gap: 30px;
  }

  ::-webkit-scrollbar {
    width: 3px;
  }

  ::-webkit-scrollbar-track {
    background-color: #d5d5d5;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #707070;
  }
`;

export const NavLink = styled.p`
  font-size: 16px;
  font-weight: ${({ fw }) => fw || ""};
  color: ${({ color }) => color || "#696d8c"};
  border-bottom: ${({ bb }) => bb || ""};
  padding: 10px 0px 18px 0px;
  margin: 0%;
  white-space: nowrap;
  cursor: pointer;
`;

export const MobileMenuBox = styled.div`
  position: absolute;
  width: 100%;
  z-index: 1;
`;
