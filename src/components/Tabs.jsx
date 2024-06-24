import { useState } from "react";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("personalized");

  return (
    <div className="flex items-center justify-center sticky top-0 bg-black bg-opacity-65 border border-stone-700">
      <button
        className={`w-[300px] h-14 flex flex-col items-center justify-center  ${
          activeTab === "personalized" ? "text-white" : "text-gray-400"
        } hover:text-gray-200 focus:outline-none`}
        onClick={() => setActiveTab("personalized")}
      >
        <span className="relative">
          Sana özel
          {activeTab === "personalized" && (
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500 rounded mt-1"></div>
          )}
        </span>
      </button>
      <button
        className={`w-[300px] h-14 flex flex-col items-center justify-center ${
          activeTab === "following" ? "text-white" : "text-gray-400"
        } hover:text-gray-200 focus:outline-none`}
        onClick={() => setActiveTab("following")}
      >
        <span className="relative">
          Takip edilenler
          {activeTab === "following" && (
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500 rounded mt-1"></div>
          )}
        </span>
      </button>
    </div>
  );
}
