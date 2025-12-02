"use client";

import { useState } from "react";
import { SocialIcon } from "react-social-icons";

const socialLinks = [
  {
    url: "https://google.com",
    name: "Google",
    id: "google",
  },
  {
    url: "https://linkedin.com",
    name: "LinkedIn",
    id: "linkedin",
  },
  {
    url: "https://x.com",
    name: "Twitter",
    id: "twitter",
  },
];

function Trust() {
  const [selectedSocial, setSelectedSocial] = useState<string>("google");

  // Create a mapping from social id to gradient class names
  const gradientBgMap: Record<string, string> = {
    google: "bg-gradient-to-r from-red-400 via-yellow-400 to-blue-500",
    linkedin: "bg-gradient-to-r from-blue-700 via-cyan-400 to-blue-400",
    twitter: "bg-gradient-to-r from-gray-800 via-slate-500 to-sky-400",
  };

  // get the current bg gradient class
  const gradientBg =
    gradientBgMap[selectedSocial] ||
    "bg-gradient-to-r from-gray-400 to-gray-700";

  return (
    <div className="bg-gray-50 py-[26px]">
      <div className="container mx-auto px-(--padding-x) md:px-0 py-[26px] flex flex-col md:flex-row md:justify-between gap-[20px] items-center md:items-start">
        <div className="space-y-[16px] md:space-y-[26px] md:w-1/3">
          <h2 className="text-center md:text-left text-2xl font-bold">
            Why People Trust Us
          </h2>
          <div className="flex flex-row md:flex-col items-center gap-[10px] md:gap-[18px] flex-wrap justify-center md:justify-start md:items-start">
            {socialLinks.map((link) => (
              <div
                key={link.id}
                className={`flex items-center gap-[10px] p-1.5 px-2.5  rounded-full cursor-pointer select-none ${
                  selectedSocial === link.id ? "shadow bg-white" : ""
                }`}
                onClick={() => setSelectedSocial(link.id)}
              >
                <SocialIcon
                  url={link.url}
                  as="div"
                  style={{ height: "30px", width: "30px" }}
                />
                <p>{link.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-2/3 my-[12px]">
          <div className="w-full space-y-3 md:space-y-7">
            <div
              className={`min-w-full h-[200px] md:h-[270px] bg-gray-800 rounded-xl shadow ${gradientBg}`}
            ></div>
            <div className="space-y-2">
              <h2 className="font-semibold">
                India's #1 Service providers
                <span className="capitalize"> ({selectedSocial})</span>
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
                temporibus reiciendis, aperiam perferendis vitae fugit officia
                nostrum voluptatum earum odio sit ipsum perspiciatis, sint sunt
                iusto! Quis molestiae minus voluptatum!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trust;
