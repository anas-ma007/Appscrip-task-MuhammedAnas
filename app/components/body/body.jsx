
import React from "react";
import BodyHeader from "./bodyHeader/bodyHeader";
import Sidebar from "./BodySidebar/sidebar";
import BodyContainer from "./bodyContainer/bodyContainer";



async function Body() {
  return (
    <div className="BodyContainer">
      <div className="bodyHeader">
        <BodyHeader />
      </div>
      <div className="bodyContents">
        <Sidebar />
        <BodyContainer />
      </div>
    </div>
  );
}

export default Body;
