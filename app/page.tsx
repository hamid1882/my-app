import ApplicationAndPayment from "./components/ApplicationAndPayment";
import Experence from "./components/Experence";
import Features from "./components/Features";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import PolicyIssuanse from "./components/PolicyIssuanse";
import Shortlisting from "./components/Shortlisting";
import UspSection from "./components/UspSection";
import UspSection2 from "./components/UspSection2";
import Trust from "./components/Trust";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Features />
      <Experence />
      <UspSection />
      <Shortlisting />
      <hr />
      <ApplicationAndPayment />
      <hr />
      <PolicyIssuanse />
      <UspSection2 />
      <Trust />
    </div>
  );
}
