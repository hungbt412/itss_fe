import React from "react";
import avatar from "../../img/thu_1.png";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosNotificationsOutline } from "react-icons/io";
import { PiRectangleLight } from "react-icons/pi";
import { PiPlus } from "react-icons/pi";
import { IoSearchOutline } from "react-icons/io5";
import { FcHighPriority } from "react-icons/fc";
import { IoCalendarOutline } from "react-icons/io5";
import { TbCalendarUp } from "react-icons/tb";
import { IoGridOutline } from "react-icons/io5";

const Sidebar = ({ tab, setTab }) => {
  return (
    <div className="flex flex-col w-[20vw] h-[100vh] bg-ct-sidebar-bg rounded p-2">
      <div className="flex justify-between">
        <div className="flex items-center text-center gap-2">
          <img
            src={avatar}
            alt="/"
            className="w-8 h-auto rounded-full border-4"
          />
          <p className="font-semibold text-sm">User123</p>
          <IoIosArrowDown
            className="mt-[2px] text-xs font-extralight text-inherit"
            color="#c0c0cd"
          />
        </div>
        <div className="flex items-center text-center gap-2">
          <IoIosNotificationsOutline
            className="font-light text-xl"
            color="#c0c0cd"
          />
          <PiRectangleLight className="font-light text-xl" color="#c0c0cd" />
        </div>
      </div>
      <div className="flex items-center justify-center bg-ct-red rounded-sm mt-5 mb-4">
        <PiPlus className="text-sm" color="white" />
        <p className="text-white font-medium text-[12px] p-1">Add task</p>
      </div>
      <div
        className="sidebar-item"
        onClick={() => {
          setTab("search");
        }}
      >
        <IoSearchOutline className="text-sm ml-2" />
        <p className=" font-medium text-[12px] p-1">Search</p>
      </div>
      <div
        className="sidebar-item"
        onClick={() => {
          setTab("priority");
        }}
      >
        <FcHighPriority className="text-sm ml-2" />
        <p className=" font-medium text-[12px] p-1">Priority</p>
      </div>
      <div
        className="sidebar-item"
        onClick={() => {
          setTab("today");
        }}
      >
        <IoCalendarOutline className="text-sm ml-2" color="green" />
        <p className=" font-medium text-[12px] p-1">Today</p>
      </div>
      <div
        className="sidebar-item"
        onClick={() => {
          setTab("upcoming");
        }}
      >
        <TbCalendarUp className="text-sm font-light ml-2" />
        <p className="font-medium text-[12px] p-1">Upcoming</p>
      </div>
      <div
        className="sidebar-item"
        onClick={() => {
          setTab("filter");
        }}
      >
        <IoGridOutline className="text-sm ml-2" color="orange" />
        <p className=" font-medium text-[12px] p-1">Filters & Labels</p>
      </div>
    </div>
  );
};

export default Sidebar;
