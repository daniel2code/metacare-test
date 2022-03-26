import React, { useState } from "react";

import { Container, TopBox, BodyBox, SideMenuBox } from "./layout.styles";
import TopBar from "./topBar/index";
import SideMenu from "./sideMenu/index";

const Index = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu((props) => !props);
  };

  return (
    <Container>
      <SideMenuBox>
        <SideMenu menu={openMenu} handleOpenMenu={handleOpenMenu} />
      </SideMenuBox>

      <BodyBox>
        <TopBox>
          <TopBar menu={openMenu} handleOpenMenu={handleOpenMenu} />
        </TopBox>

        <div className="pageContent">{children}</div>
      </BodyBox>
    </Container>
  );
};

export default Index;
