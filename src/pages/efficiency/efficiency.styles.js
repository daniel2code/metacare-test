import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 750px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export const PageTitle = styled.h2`
  font-size: 24px;
  color: #060213;
  text-align: left;

  @media screen and (max-width: 900px) {
    font-size: 19px;
  }
`;

export const Filters = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 650px) {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }

  .searchBox {
    display: flex;
    align-items: center;
    border: 1px solid #e1e1eb;
    box-sizing: border-box;
    border-radius: 8px;
    width: 300px;
    padding: 10px 10px;

    @media screen and (max-width: 650px) {
      width: 100%;
    }

    .input {
      width: calc(100% - 30px);
      background-color: transparent;
      padding: 8px 12px;
      border: none;
      outline: none;

      ::placeholder {
        color: #a3a3c2;
        font-size: 15px;
      }
    }
  }

  .filters {
    display: flex;
    align-items: center;

    @media screen and (max-width: 650px) {
      width: 100%;
      margin-top: 20px;
    }
  }

  .btn {
    width: 130px;
    background: #25bb87;
    border-radius: 8px;
    padding: 17px 0px;
    border: none;
    color: white;
    font-size: 16px;
    margin-left: 40px;
    font-weight: 600px;

    @media screen and (max-width: 650px) {
      width: 40%;
    }
  }
`;

export const SelectBox = styled.div`
  border: 1px solid #e1e1eb;
  box-sizing: border-box;
  border-radius: 8px;
  width: 150px;
  padding: 16px 7px 16px 7px;
  margin-left: 20px;
  position: relative;

  @media screen and (max-width: 650px) {
    margin-left: 0px;
    width: 45%;
  }

  &:before {
    content: "";
    height: 35px;
    width: 1px;
    background-color: #e1e1eb;
    left: 170px;
    top: 7px;
    position: absolute;

    @media screen and (max-width: 650px) {
      left: 112%;
    }
  }

  select {
    background-color: transparent;
    font-weight: 600;
    font-size: 15px;
    width: 100%;
    border: none;
    outline: none;
  }

  option {
    font-weight: 600;
  }
`;

export const ChartContainer = styled.div`
  width: 100%;
  margin-top: 40px;
`;
