import React from "react";

import {
  Container,
  NotificationBox,
  NavBar,
  NavLink,
  MobileMenuBox,
} from "./topbar.styles";
import searchIcon from "../../../assets/search.svg";
import dropdownIcon from "../../../assets/dropdown.svg";
import bellIcon from "../../../assets/bell.svg";
import menuIcon from "../../../assets/more.png";
import closeIcon from "../../../assets/close.png";
import MobileMenu from "../mobileViewMenu/index";

const index = ({ menu, handleOpenMenu }) => {
  return (
    <>
      <Container>
        <div className="menus" onClick={handleOpenMenu}>
          {menu === false ? (
            <img src={menuIcon} alt="menu icon" />
          ) : (
            <img src={closeIcon} alt="menu icon" />
          )}
        </div>
        <div className="searchBox">
          <input
            type="text"
            className="input"
            placeholder="Ask us any question"
          />
          <img alt="search icon" src={searchIcon} />
        </div>

        <NotificationBox>
          <div className="notification">
            <img alt="bell icon" src={bellIcon} />
            <div className="tracker">
              <p>3</p>
            </div>
          </div>

          <div className="dropdown">
            <div className="round"></div>
            <img alt="drop down" src={dropdownIcon} />
          </div>
        </NotificationBox>
      </Container>

      {/* MobileMenu displays on mobile menu */}
      {menu && (
        <MobileMenuBox>
          <MobileMenu />
        </MobileMenuBox>
      )}

      <NavBar>
        <NavLink bb="2px solid #6837EF" fw="600" color="black" className="link">
          Efficiency
        </NavLink>
        <NavLink className="link">Volume</NavLink>
        <NavLink className="link">Customer Satisfaction</NavLink>
        <NavLink className="link">Backlog</NavLink>
      </NavBar>
    </>
  );
};

export default index;
