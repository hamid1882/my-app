import {
  BadgeDollarSign,
  CircleDollarSign,
  CurrencyIcon,
  DollarSign,
  Droplet,
  Globe,
  Phone,
  Plus,
} from "lucide-react";
import FeatureCard from "./FeatureCard";

function Features() {
  return (
    <div className="bg-gray-100 py-[4px] px-(--padding-x) md:px-0">
      <div className="container mx-auto my-8 md:flex gap-5">
        <div className="text-center md:text-left mr-[24px]">
          <p className="text-blue-500 font-semibold text-[18px]">
            GoAnywr offers
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 whitespace-nowrap">
            Our Features
          </h2>
        </div>
        <div className="overflow-x-auto  overflow-y-hidden space-y-[18px] grid grid-cols-1 md:grid-cols-2 gap-4 w-full my-[12px] md:my-[22px] py-[12px]">
          <FeatureCard
            title="Visa Fee Financing"
            description="Zero-cost EMIs for visa + translation + documentation"
            key="unique"
            icon={
              <div>
                <DollarSign />
              </div>
            }
          />
          <FeatureCard
            title="Study Abroad Financing"
            description="Education loans, GIC, blocked accounts"
            key="unique"
            icon={
              <div>
                <BadgeDollarSign />
              </div>
            }
          />
          <FeatureCard
            title="Relocation Financing"
            description="Flights + onboarding expenses EMIs"
            key="unique"
            icon={
              <div>
                <Globe />
              </div>
            }
          />
          <FeatureCard
            title="Travel Insurance"
            description="Integrated with packages"
            key="unique"
            icon={
              <div>
                <Droplet />
              </div>
            }
          />
          <FeatureCard
            title="Income Protection for Migrants"
            description="Optional partner products"
            key="unique"
            icon={
              <div>
                <Plus />
              </div>
            }
          />
          <FeatureCard
            title="Forex / Remittance Desk"
            description="Currency exchange and international money transfer services"
            key="unique"
            icon={
              <div>
                <CircleDollarSign />
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Features;
