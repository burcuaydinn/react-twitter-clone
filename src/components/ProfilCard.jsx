import React from "react";

function ProfileCard() {
  return (
    <div className="flex items-center mr-[15rem] bg-custom-dark p-4 rounded-lg w-max mx-auto mt-10">
      <img
        src="https://pbs.twimg.com/profile_images/1677790589096525825/ibmbT9Wf_400x400.jpg"
        alt="Profile"
        className="w-12 h-12 rounded-full mr-4"
      />
      <div>
        <div className="flex items-center">
          <span className="text-white font-bold mr-2">Burcu Aydın</span>
        </div>
        <div className="text-gray-400">@BrcuAydinn</div>
      </div>
      <div className="ml-auto">
        <button className="text-gray-400">
          <p>...</p>
        </button>
      </div>
    </div>
  );
}

export default ProfileCard;
