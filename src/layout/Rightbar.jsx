import React from "react";
import Search from "../components/Search";
import Premium from "../components/Premium";
import Footer from "../components/Footer";
import Timeline from "../components/Timeline";
import SuggestedUsers from "../components/SuggestedUsers";

export default function RightBar() {
  return (
    <aside className="w-[350px] mr-2.5">
      <Search />
      <Premium />
      <Timeline />
      <SuggestedUsers />
      <Footer />
    </aside>
  );
}
