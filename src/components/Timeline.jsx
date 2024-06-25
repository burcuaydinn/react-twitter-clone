import React from "react";

const trends = [
  { id: 1, title: "#emrehoca", posts: "3.730 posts" },
  { id: 2, title: "Filenin Sultanları", posts: "103 B posts" },
  {
    id: 3,
    title: "React",
    posts: "8.592 posts",
  },
  { id: 4, title: "Workintech", posts: "5.023 posts" },
  { id: 5, title: "#cssyapmakilmekatmaktır", posts: "11,9 B posts" },
];

const Timeline = () => {
  return (
    <div className="bg-black text-white p-4 rounded-lg border border-stone-700">
      <h2 className="text-xl font-bold mb-4">İlgini çekebilecek gündemler</h2>
      <ul>
        {trends.map((trend) => (
          <li key={trend.id} className="border-b border-gray-700 py-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-400 text-sm">
                  Türkiye tarihinde gündemde
                </p>
                <p className="font-bold">{trend.title}</p>
                <p className="text-gray-400 text-sm">{trend.posts}</p>
              </div>
              <button className="text-gray-400 hover:text-gray-200">...</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Timeline;
