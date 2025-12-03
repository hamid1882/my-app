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
import Products from "./components/Products";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <TrustedByAutoScroll />
      <AllServices />
      <Features />
      <Experence type="b2c" />
      <Products
        products={[
          { name: "Education Loans", link: "#" },
          { name: "Travel Insurance", link: "#" },
          { name: "Forex Cards", link: "#" },
          { name: "International SIM", link: "#" },
          { name: "Remittance Support", link: "#" },
        ]}
      />
      <Experence type="b2b" />
      <Products
        products={[
          { name: "Corporate travel insurance bundles", link: "#" },
          { name: "Bulk Forex solutions", link: "#" },
          {
            name: "Corporate remittances & cross-border transactions support",
            link: "#",
          },
        ]}
      />
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
