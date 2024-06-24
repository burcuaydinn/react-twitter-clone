import React from "react";
import Tweets from "../components/Tweets";
import TweetBox from "../components/TweetBox";
import Tabs from "../components/Tabs";

export default function Content() {
  return (
    <div className="w-[600px] ml-80">
      <Tabs />
      <TweetBox />
      <Tweets />
    </div>
  );
}
