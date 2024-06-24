import React from "react";
import ProfileCard from "../components/ProfilCard";
import {
  BookmarksIcon,
  CommunitiesIcon,
  ExploreIcon,
  GrokIcon,
  HomeIcon,
  MessagesIcon,
  MoreIcon,
  NotificationsIcon,
  PremiumIcon,
  ProfileIcon,
  XIcon,
} from "../components/Icon";

export default function Sidebar() {
  return (
    <div className="w-[275px] flex flex-col fixed ml-12">
      <div>
        <button className="mt-4">
          <XIcon />
        </button>
      </div>
      <div>
        <button className="flex items-center hover:bg-gray-900 space-x-4 w-[153px] h-[50px] rounded-full ">
          <HomeIcon />
          <p className="text-white text-xl">Anasayfa</p>
        </button>
      </div>
      <div>
        <button className="flex items-center  hover:bg-gray-900 space-x-4 w-[153px] h-[50px] rounded-full ">
          <ExploreIcon />
          <p className="text-white text-xl">Keşfet</p>
        </button>
      </div>
      <div>
        <button className="flex items-center  hover:bg-gray-900 space-x-4 w-[153px] h-[50px] rounded-full ">
          <NotificationsIcon />
          <p className="text-white  text-xl">Bildirimler</p>
        </button>
      </div>
      <div>
        <button className="flex items-center  hover:bg-gray-900 space-x-4 w-[153px] h-[50px] rounded-full ">
          <MessagesIcon />
          <p className="text-white  text-xl">Mesajlar</p>
        </button>
      </div>
      <div>
        <button className="flex items-center  hover:bg-gray-900 space-x-4 w-[153px] h-[50px] rounded-full ">
          <GrokIcon />
          <p className="text-white  text-xl">Grok</p>
        </button>
      </div>
      <div>
        <button className="flex items-center  hover:bg-gray-900 space-x-4 w-[153px] h-[50px] rounded-full ">
          <BookmarksIcon />
          <p className="text-white  text-xl">Yer İşaretleri</p>
        </button>
      </div>
      <div>
        <button className="flex items-center  hover:bg-gray-900 space-x-4 w-[153px] h-[50px] rounded-full ">
          <CommunitiesIcon />
          <p className="text-white  text-xl">Topluluklar</p>
        </button>
      </div>
      <div>
        <button className="flex items-center  hover:bg-gray-900 space-x-4 w-[153px] h-[50px] rounded-full ">
          <PremiumIcon />
          <p className="text-white  text-xl">Premium</p>
        </button>
      </div>
      <div>
        <button className="flex items-center  hover:bg-gray-900 space-x-4 w-[153px] h-[50px] rounded-full ">
          <ProfileIcon />
          <p className="text-white  text-xl">Profil</p>
        </button>
      </div>
      <div>
        <button className="flex items-center  hover:bg-gray-900 space-x-4 w-[153px] h-[50px] rounded-full ">
          <MoreIcon />
          <p className="text-white  text-xl">Daha fazla</p>
        </button>
        <div className="text-center">
          <button className="flex items-center px-4 mt-5  space-x-4 w-[220px] h-[50px] bg-custom-mavi rounded-full  hover:bg-custom-blue">
            <span className="text-white ml-16 font-bold text-l">Gönder</span>
          </button>
        </div>
        <ProfileCard />
      </div>
    </div>
  );
}
