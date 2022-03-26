import styled from "styled-components";

export const SideMenuBox = styled.div`
  width: 270px;
  border-right: 1px solid #ecebf5;
  height: 100vh;
  padding: 10px 20px;
  box-sizing: border-box;

  .nameBox {
    border: 1px solid #ecebf5;
    box-sizing: border-box;
    border-radius: 8px;
    padding: 0px 15px 0px 30px;

    .name {
      font-size: 12px;
      font-weight: 600;
    }

    .email {
      font-size: 12px;
      color: #696d8c;
    }
  }
`;

export const MenuBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 20px;
  margin-top: 20px;
  cursor: pointer;

  .menu {
    display: flex;
    align-items: center;

    p {
      font-size: 16px;
      color: #696d8c;
      font-weight: 400;
      margin-left: 19px;
    }
  }
`;
