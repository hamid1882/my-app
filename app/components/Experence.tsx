import PersonChat from "@/public/images/person-chatting.png";

import Image from "next/image";
import ExperienceCard from "./ExperienceCard";

const content = {
  b2c: {
    title: "For Individuals (B2C)",
    dataArr: [
      {
        title: "Visa & Immigration",
        description:
          "Tourist, study, work, PR, and more. End‑to‑end documentation, translations, and filing.",
        number: 1,
        pointsArr: [
          "Tourist Visa",
          "Study Visa + Study‑to‑Work Migration",
          "Work Visa (Skilled Worker)",
          "WPR / Permanent Residency",
        ],
      },
      {
        title: "Job Assistance (Digital + Human)",
        description:
          "AI‑optimized resume, LinkedIn, active job apply, and a tracking dashboard.",
        number: 2,
        pointsArr: [
          "AI‑optimized resume",
          "LinkedIn optimization",
          "Active job apply on portals",
          "Automated job‑tracking dashboard",
        ],
      },
      {
        title: "Travel & Medical Services",
        description:
          "Tourism packages, sports tourism, hospital tourism, and logistics.",
        number: 3,
        pointsArr: [
          "Tourism packages",
          "Sports tourism",
          "Hospital tourism",
          "End‑to‑end logistics management",
        ],
      },
    ],
  },
  b2b: {
    title: "For Business (B2B)",
    dataArr: [
      {
        title: "Inter-Company Transfers",
        description:
          "Visa & work permit processing, local compliance, document management, and mobility dashboards.",
        number: 1,
        pointsArr: [
          "Visa & work permit processing",
          "Local immigration compliance",
          "Document management",
          "Mobility dashboards",
        ],
      },
      {
        title: "Corporate Immigration",
        description:
          "Labor law compliance, in-country legal translation, and audit support.",
        number: 2,
        pointsArr: [
          "Labor law compliance",
          "In-country legal translation",
          "Audit support",
        ],
      },
      {
        title: "Workforce Mobility Management",
        description:
          "Employer-of-Record support, global onboarding, and assignment tracking.",
        number: 3,
        pointsArr: [
          "Employer of Record (EOR) support",
          "Global onboarding assistance",
          "Assignment tracking system",
        ],
      },
    ],
    products: [
      {
        name: "Corporate travel insurance bundles",
        link: "#",
      },
      {
        name: "Bulk Forex solutions",
        link: "#",
      },
      {
        name: "Corporate remittances & cross-border transactions support",
        link: "#",
      },
    ],
  },
};

function Experence({ type }: { type: "b2c" | "b2b" }) {
  const data = content[type] || content["b2b"];

  return (
    <div className="bg-blue-50 py-[28px] md:py-0 h-full z-20">
      <div className="flex flex-col md:flex-row relative min-h-[500px] mx-(--padding-x) md:mx-0 bg-white z-20">
        <div className="h-[100px] rounded-t-lg md:rounded-none md:min-h-full w-full absolute top-0 bg-transparent md:bg-[linear-gradient(90deg,rgba(162,207,247,.33)_40%,#fff_40%)]"></div>
        <div className="container mx-auto h-full w-full z-10 flex flex-col md:flex-row rounded-lg md:rounded-none">
          <div className="md:h-screen md:sticky top-0 p-[16px] md:pt-[68px] space-y-[12px] flex flex-row md:flex-col md:w-1/3 overflow-hidden md:items-center h-full rounded-t-lg">
            <h2 className="text-[22px] font-bold max-w-1/2 md:max-w-full">
              {data.title}
            </h2>
            <div className="max-w-1/2 absolute md:relative -top-[40px] md:top-0 right-0">
              <Image
                src={PersonChat}
                alt="person chatting"
                className="w-full h-full"
              />
            </div>
          </div>
          <div className="bg-white md:w-2/3 md:px-[22px] rounded-b-lg md:rounded-none">
            {data.dataArr.map((step) => (
              <>
                <ExperienceCard
                  number={step.number}
                  title={step.title}
                  description={step.description}
                  key={step.number}
                  pointsArr={step.pointsArr}
                />
                <hr className="mx-auto text-center text-black bg-black" />
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experence;

// <div className="pt-[98px] py-[48px] md:py-0 px-(--padding-x) md:px-0">
//   <div className="md:flex h-full">
//     <div className="rounded-t-lg md:rounded-none py-[28px] px-[14px] flex justify-between relative md:min-h-full md:h-[300px] md:min-w-1/3">
//       <h2 className="text-[22px] font-bold">The Experience</h2>
//       <Image
//         src={PersonChat}
//         alt="person chatting"
//         className="absolute -top-[100px] right-0 max-w-1/2 md:hidden"
//       />
//     </div>
//   </div>
// </div>
