import React from "react";
import Today from "../../container/Today/Today";
import Priority from "../../container/Priority/Priority";
import Upcoming from "../../container/Upcoming/Upcoming";
import Search from "../../container/Search/Search";
import Filter from "../../container/Filter/Filter";

const Main = ({ tab }) => {
  return (
    <div className="mt-8">
      {tab === "today" && <Today />}
      {tab === "priority" && <Priority />}
      {tab === "upcoming" && <Upcoming />}
      {tab === "search" && <Search />}
      {tab === "filter" && <Filter />}
    </div>
  );
};

export default Main;
