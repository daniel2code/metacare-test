import React, { useState, useEffect } from "react";

import { ChartBox, ChartDetails, TimeTracker } from "./chart.styles";
import agentIcon from "../../assets/agent.svg";
import Charts from "./mainChart";
import SkeletonLoader from "../skeletonLoader/index";

const Index = () => {
  const [showLoader, setShowLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowLoader(false);
    }, 3000);
  });

  return (
    <>
      {[...Array(4)].map(() => {
        return (
          <ChartBox>
            <ChartDetails>
              <div className="topDetails">
                <div className="increase">
                  <h3>Average response Time</h3>
                  <div className="box">+4.14% </div>
                </div>

                <div className="priority">
                  <p className="text">High Priority</p>

                  <div className="month">
                    <p>This month</p>

                    <img alt="an icon" src={agentIcon} />
                  </div>
                </div>
              </div>

              <div className="mainChart">
                {/* show loader when data is loading */}
                {showLoader === true ? <SkeletonLoader /> : <Charts />}
              </div>
            </ChartDetails>

            <TimeTracker>
              <div className="timeBox">
                <p className="title">Average Response Time</p>
                <p className="time">30 Mins</p>
              </div>

              <div className="timeBox">
                <p className="title">Response Time</p>
                <p className="time">1 Hour 30 Mins</p>
              </div>
            </TimeTracker>
          </ChartBox>
        );
      })}
    </>
  );
};

export default Index;
