import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { HOUSE_URL, ROOT_URL } from "../../data/constants";
import { CharactersPage } from "../../pages/CharactersPage";
import { HousePage } from "../../pages/HousePage";

import "./PageHolder.scss";

const PageHolder: React.FC = () => {
  return (
    <div className="page-holder">
      <Routes>
        <Route path={ROOT_URL} element={<CharactersPage />} />
        <Route path={`${HOUSE_URL}/:houseId`} element={<HousePage />} />
        <Route path="*" element={<Navigate to={ROOT_URL} />} />
      </Routes>
    </div>
  );
};

export default PageHolder;
