import React from "react";
import { Timeline } from "react-twitter-widgets";

export default function Tweets() {
  return (
    <div className="bg-custom-dark">
      <Timeline
        dataSource={{
          sourceType: "profile",
          screenName: "Reactdersleri",
        }}
        options={{
          height: "screen",
          theme: "dark",
          chrome: "noheader, nofooter",
          borderColor: "#000000",
          backgroundColor: "#000000",
        }}
        style={{ backgroundColor: "black", color: "black" }}
      />
    </div>
  );
}
