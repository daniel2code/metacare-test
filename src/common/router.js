import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Wrapper from "../common/dashboardWrapper/index";
import EfficiencyPage from "../pages/efficiency/index";
import AdminPage from "../pages/admin/index";

const router = () => {
  return (
    <React.Fragment>
      <Wrapper>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<EfficiencyPage />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </BrowserRouter>
      </Wrapper>
    </React.Fragment>
  );
};

export default router;
