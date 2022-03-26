import React from "react";

import { SideMenuBox, MenuBox, Container } from "./mobile.styles";
import adminIcon from "../../../assets/admin.svg";
import agentIcon from "../../../assets/agent.svg";
import checkIcon from "../../../assets/check.svg";
import analyticsIcon from "../../../assets/analytics.svg";
import helpIcon from "../../../assets/help.svg";
import dropdown from "../../../assets/open.svg";

const links = [
  { img: adminIcon, name: "Admin", to: "/admin" },
  { img: checkIcon, name: "Knowledge Base", to: "/knowledge-base" },
  { img: checkIcon, name: "Train SAM", to: "/train" },
  { img: agentIcon, name: "Agent Inbox", to: "/agent" },
  { img: helpIcon, name: "Help Center", to: "/help-center" },
  { img: analyticsIcon, name: "Analytics", to: "/analytics" },
];

const Index = () => {
  return (
    <Container>
      <SideMenuBox>
        <div className="nameBox">
          <p className="name">Metacare</p>
          <p className="email">adeyinka@metacare.app</p>
        </div>

        {links.map(({ img, name, to }) => {
          return (
            <MenuBox>
              <div className="menu">
                <img alt="icon" src={img} />
                <p>{name}</p>
              </div>

              <img alt="icon" src={dropdown} />
            </MenuBox>
          );
        })}
      </SideMenuBox>
    </Container>
  );
};

export default Index;
