"use client"

import React from "react";
import BodyHeader from "./bodyHeader/bodyHeader";
import Sidebar from "./BodySidebar/sidebar";
import BodyContainer from "./bodyContainer/bodyContainer";

function Body() {
  return (
    <div className="BodyContainer">
      <div className="bodyHeader">
        <BodyHeader />
      </div>
      <div className="bodyContents">
        <Sidebar />
        <div className="bodyContainer001">
          <BodyContainer />
        </div>
      </div>
    </div>
  );
}

export default Body;
