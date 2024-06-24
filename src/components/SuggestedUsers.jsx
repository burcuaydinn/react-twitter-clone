import React from "react";

const users = [
  {
    id: 1,
    name: "Esra Acartürk",
    username: "@esrcrtrk",
    status: "Seni takip ediyor",
    avatar:
      "https://pbs.twimg.com/profile_images/1600940627784523777/lO1snAJ0_400x400.jpg",
  },
  {
    id: 2,
    name: "dnzyldz",
    username: "@denizkizi",
    status: "",
    avatar:
      "https://pbs.twimg.com/profile_images/902862648332607488/eCTBgwbY_400x400.jpg",
  },
  {
    id: 3,
    name: "Türkçe Müzik",
    username: "@TurkceMuzik",
    status: "",
    avatar:
      "https://pbs.twimg.com/profile_images/1639062617451896833/F-JZGfeS_400x400.jpg",
  },
];

const SuggestedUsers = () => {
  return (
    <div className="bg-black text-white p-4 rounded-lg border border-stone-700">
      <h2 className="text-xl font-bold mb-4">Kimi takip etmeli</h2>
      <ul>
        {users.map((user) => (
          <li
            key={user.id}
            className="flex items-center justify-between py-4 border-b border-gray-700"
          >
            <div className="flex items-center">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="font-bold">{user.name}</p>
                <p className="text-gray-400">{user.username}</p>
                {user.status && (
                  <p className="text-gray-500 text-sm">{user.status}</p>
                )}
              </div>
            </div>
            <button className="bg-white text-black py-1 px-4 rounded-full">
              Takip et
            </button>
          </li>
        ))}
      </ul>
      <button className="text-blue-500 mt-4">Daha fazla göster</button>
    </div>
  );
};

export default SuggestedUsers;
