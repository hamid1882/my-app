"use client";

import {
  Briefcase,
  Globe,
  BookOpen,
  GraduationCap,
  Landmark,
  Users,
  Stethoscope,
  Shield,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    name: "Tourist Visa",
    icon: <Globe size={22} className="text-blue-500" />,
    href: "#",
  },
  {
    name: "Study Visa",
    icon: <BookOpen size={22} className="text-indigo-500" />,
    href: "#",
  },
  {
    name: "Work Visa",
    icon: <Briefcase size={22} className="text-emerald-500" />,
    href: "#",
  },
  {
    name: "PR & Immigration",
    icon: <Landmark size={22} className="text-orange-500" />,
    href: "#",
  },
  {
    name: "Intra-company Transfer (ICT)",
    icon: <Users size={22} className="text-sky-700" />,
    href: "#",
  },
  {
    name: "Job Assistance (AI-Optimized)",
    icon: <ArrowUpRight size={22} className="text-purple-500" />,
    href: "#",
  },
  {
    name: "Tour Packages (DMC)",
    icon: <Suitcase size={22} className="text-cyan-600" />,
    href: "#",
  },
  {
    name: "Sports & Medical Tourism",
    icon: <Stethoscope size={22} className="text-pink-500" />,
    href: "#",
  },
  {
    name: "Financial Products",
    icon: <Shield size={22} className="text-sky-400" />,
    href: "#",
  },
];

// Add missing Suitcase icon for 'Tour Packages'
function Suitcase({ size = 22, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 3v4M8 3v4" />
    </svg>
  );
}

export default function AllServices() {
  return (
    <div className="w-full my-[52px] px-2 container mx-auto">
      <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-5 ml-1">
        Service Shortcuts
      </h2>
      <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {services.map((service) => (
          <Link
            href={service.href}
            key={service.name}
            className="flex items-center gap-2 rounded-lg bg-gray-50 border border-gray-100 px-3 py-3 shadow-sm hover:shadow-md transition group"
          >
            <span className="shrink-0">{service.icon}</span>
            <span className="text-gray-700 text-sm font-medium">
              {service.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
