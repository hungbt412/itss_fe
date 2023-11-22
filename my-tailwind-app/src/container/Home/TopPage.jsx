import React, { useState } from "react";
import Sidebar from "../../layout/Sidebar/Sidebar";
import Main from "../../layout/Main/Main";

const TopPage = () => {
  const [tab, setTab] = useState("upcoming");
  return (
    <div className="flex gap-4">
      {/* <div className="w-1/5">sidebar</div> */}
      <Sidebar className="w-1/5" tab={tab} setTab={setTab} />
      <Main className="w-4/5 text-blue-400" tab={tab} />
    </div>
  );
};

export default TopPage;
