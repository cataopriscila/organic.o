import { Header } from "../Components/Header";
import Description from "../Components/Description";
import SignupSection from "../Containers/SignupSection";
import FooterSection from "../Containers/FooterSection";
import { Testimonials } from "../Components/Testimonials";


export function LandingPage() {
  return (
    <div>
      <Header />
      <Description />
      <Testimonials />
      <SignupSection />
      <FooterSection />
    </div>
  );
}
