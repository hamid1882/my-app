"use client";

import { SocialIcon } from "react-social-icons";

const companies = [
  {
    name: "GitHub",
    url: "https://github.com",
    color: "text-gray-800",
    network: "github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com",
    color: "text-blue-700",
    network: "linkedin",
  },
  {
    name: "X (Twitter)",
    url: "https://x.com",
    color: "text-black",
    network: "x",
  },
  {
    name: "Spotify",
    url: "https://spotify.com",
    color: "text-green-500",
    network: "spotify",
  },
  {
    name: "Instagram",
    url: "https://instagram.com",
    color: "text-pink-500",
    network: "instagram",
  },
  {
    name: "YouTube",
    url: "https://youtube.com",
    color: "text-red-600",
    network: "youtube",
  },
  {
    name: "Reddit",
    url: "https://reddit.com",
    color: "text-orange-600",
    network: "reddit",
  },
  {
    name: "Facebook",
    url: "https://facebook.com",
    color: "text-blue-600",
    network: "facebook",
  },
  {
    name: "Discord",
    url: "https://discord.com",
    color: "text-indigo-500",
    network: "discord",
  },
  {
    name: "Twitch",
    url: "https://twitch.tv",
    color: "text-purple-600",
    network: "twitch",
  },
];

export default function TrustedByAutoScroll() {
  return (
    <div className="flex items-center justify-center my-[28px] py-8 px-2">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-[22px] md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by professionals working at
          </h1>
          <p className="text-gray-600 text-lg">
            Join thousands of professionals from leading companies who've chosen
            GoAnywr
          </p>
        </div>
        <div className="relative overflow-hidden">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
          {/* Scrolling container */}
          <div className="flex animate-scroll">
            {/* First set of logos */}
            {companies.map((company, index) => (
              <div
                key={`first-${index}`}
                className="mx-2 md:mx-8 flex flex-col items-center justify-center"
                style={{ width: "120px" }}
              >
                <div
                  className={`w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center mb-3 transition-transform hover:scale-110 cursor-pointer`}
                  style={{ fontSize: 44 }}
                >
                  <SocialIcon url={company.url} as="div" />
                </div>
                <span className="text-gray-700 font-medium text-sm">
                  {company.name}
                </span>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {companies.map((company, index) => (
              <div
                key={`second-${index}`}
                className="mx-2 md:mx-8 flex flex-col items-center justify-center"
                style={{ width: "120px" }}
              >
                <div
                  className={`w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center mb-3 transition-transform hover:scale-110 cursor-pointer`}
                  style={{ fontSize: 44 }}
                >
                  <SocialIcon url={company.url} as="div" />
                </div>
                <span className="text-gray-700 font-medium text-sm">
                  {company.name}
                </span>
              </div>
            ))}
          </div>
        </div>
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
          @media (max-width: 640px) {
            .text-gray-600.text-lg {
              font-size: 15px;
            }
          }
        `}</style>
      </div>
    </div>
  );
}
