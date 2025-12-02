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
import Form from "./components/Form";
import TrustedByAutoScroll from "./components/TrustedByAutoScroll";
import AllServices from "./components/AllServices";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <TrustedByAutoScroll />
      <AllServices />
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
      <Form />
    </div>
  );
}
