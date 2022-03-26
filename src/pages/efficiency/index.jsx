import React from "react";

import {
  Container,
  PageTitle,
  Filters,
  ChartContainer,
  SelectBox,
} from "./efficiency.styles";
import searchIcon from "../../assets/search.svg";
import Charts from "../../components/charts/index";

const Index = () => {
  return (
    <>
      <Container>
        <PageTitle>Efficiency Analytics</PageTitle>

        <Filters>
          <div className="searchBox">
            <img alt="search icon" src={searchIcon} />
            <input type="text" placeholder="Search" className="input" />
          </div>

          <div className="filters">
            <SelectBox>
              <select name="" id="">
                <option value="">Filter Options</option>
              </select>
            </SelectBox>

            <button className="btn">Export</button>
          </div>
        </Filters>
      </Container>

      <ChartContainer>
        <Charts />
      </ChartContainer>
    </>
  );
};

export default Index;
