import React from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";
import Rightbar from "./Rightbar";

export default function Container() {
  return (
    <div className="flex min-h-screen w-[1350px] mx-auto ">
      <Sidebar />
      <Content />
      <Rightbar />
    </div>
  );
}
