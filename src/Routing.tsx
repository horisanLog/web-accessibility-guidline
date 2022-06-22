import React, { memo } from "react";
import { Route, Routes } from "react-router-dom";
import { TopPage } from "./pages";
import { LinkPage } from "./pages/link";

export const Routing: React.FC = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<TopPage />} />
      <Route path="/link" element={<LinkPage />} />
    </Routes>
  );
});
