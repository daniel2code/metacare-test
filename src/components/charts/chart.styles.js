import styled from "styled-components";

export const ChartBox = styled.div`
  width: 100%;
  border: 1px solid #ecebf5;
  box-sizing: border-box;
  border-radius: 10px;
  display: flex;
  margin: 0%;
  margin-top: 30px;
  padding: 0%;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export const ChartDetails = styled.div`
  width: 70%;
  padding: 20px 0px;
  border-right: 1px solid #ecebf5;

  @media screen and (max-width: 800px) {
    width: 100%;
    border-right: none;
  }

  .topDetails {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0px 24px;
    box-sizing: border-box;

    @media screen and (max-width: 650px) {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
    }

    .increase {
      display: flex;
      align-items: center;

      @media screen and (max-width: 650px) {
        width: 100%;
        justify-content: space-between;
      }

      h3 {
        font-size: 18px;

        @media screen and (max-width: 650px) {
          font-size: 15px;
        }
      }

      .box {
        margin-left: 30px;
        background-color: rgba(37, 187, 135, 0.1);
        border-radius: 4px;
        color: #25bb87;
        font-size: 12px;
        padding: 4px 12px;
      }
    }

    .priority {
      display: flex;
      align-items: center;
      position: relative;

      @media screen and (max-width: 650px) {
        width: 100%;
        justify-content: space-between;
      }

      .text {
        font-size: 14px;
        margin-right: 15px;
        font-weight: 600;

        @media screen and (max-width: 650px) {
          font-size: 14px;
          margin-left: 13px;
        }

        &:before {
          content: "";
          height: 10px;
          width: 10px;
          background: #f05d23;
          border-radius: 2px;
          display: flex;
          align-items: center;
          left: -18px;
          margin-top: 2px;
          position: absolute;

          @media screen and (max-width: 650px) {
            margin-left: 15px;
          }
        }

        &:after {
          content: "";
          height: 25px;
          width: 1px;
          background-color: #e1e1eb;
          left: 100px;
          top: 10px;
          position: absolute;

          @media screen and (max-width: 650px) {
            display: none;
          }
        }
      }

      .month {
        border: 1px solid #e1e1eb;
        box-sizing: border-box;
        border-radius: 8px;
        display: flex;
        align-items: center;
        padding: 1px 10px;
        width: 140px;
        justify-content: space-between;
        margin-left: 20px;

        @media screen and (max-width: 650px) {
          height: 33px;
        }

        p {
          font-size: 14px;
          font-weight: 600;
        }
      }
    }
  }

  .mainChart {
    width: 100%;
    margin-top: 30px;
    box-sizing: border-box;
    padding-right: 20px;
  }
`;

export const TimeTracker = styled.div`
  width: 30%;
  padding: 20px;
  box-sizing: border-box;

  @media screen and (max-width: 800px) {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .timeBox {
    width: 100%;
    border: 1px solid #ecebf5;
    box-sizing: border-box;
    border-radius: 10px;
    padding: 30px 30px 10px 30px;
    background: #fafafa;
    display: flex;
    flex-direction: column;
    margin-top: 15px;

    @media screen and (max-width: 800px) {
      width: 48%;
      padding: 20px;
    }

    .title {
      color: #696d8c;
      font-size: 14px;
      margin: 0%;
    }

    .time {
      font-size: 20px;
      font-weight: 600;
    }
  }
`;
