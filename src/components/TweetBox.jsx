import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faSmile,
  faPoll,
  faCalendar,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const TweetBox = () => {
  const [tweet, setTweet] = useState("");
  const isTweetValid = tweet.trim().length > 0;

  return (
    <div className="bg-custom-dark w-[600px] p-4 rounded-lg   mx-auto border border-stone-700">
      <div className="flex items-center space-x-4">
        <img
          src="https://pbs.twimg.com/profile_images/1677790589096525825/ibmbT9Wf_400x400.jpg"
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
        <input
          type="text"
          placeholder="Neler oluyor?"
          value={tweet}
          onChange={(e) => setTweet(e.target.value)}
          className="bg-transparent text-white flex-1 outline-none"
        />
      </div>
      <div className="flex items-center justify-between mt-4">
        <div className="flex space-x-4 text-blue-400 justify-start">
          <button className="focus:outline-none">
            <FontAwesomeIcon icon={faImage} />
          </button>
          <button className="focus:outline-none">
            <FontAwesomeIcon icon={faPoll} />
          </button>
          <button className="focus:outline-none">
            <FontAwesomeIcon icon={faSmile} />
          </button>
          <button className="focus:outline-none">
            <FontAwesomeIcon icon={faCalendar} />
          </button>
          <button className="focus:outline-none">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
          </button>
        </div>
        <button
          disabled={!isTweetValid}
          className={`bg-blue-500 text-white py-2 px-4 rounded-full focus:outline-none ${
            !isTweetValid ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Gönder
        </button>
      </div>
    </div>
  );
};

export default TweetBox;
