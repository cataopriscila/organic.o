import { Header } from "../Elements/Header";
import Description from "../Components/Description";
import SignupSection from "../Sections/SignupSection";
import FooterSection from "../Sections/FooterSection";
import { Testimonials } from "../Components/Testimonials";



function HomePage() {
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

export default HomePage;