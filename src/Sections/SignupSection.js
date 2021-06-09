import FadingEffect from "../Components/FadingEffect";
import Signup from "../Components/Signup";
import Bg4 from "../Images/bg4.jpg";

function SignupSection() {
  return (
    <section
      className="background"
      style={{
        backgroundImage: `url(${Bg4})`,
        backgroundPosition: "top center",
      }}
    >
      <div className= 'flex1'>
        <FadingEffect/>
        <Signup />
      </div>
    </section>
  );
}

export default SignupSection;
