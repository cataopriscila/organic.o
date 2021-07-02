
import Signup from "../Components/Signup";
import Bg4 from "../Images/bg4.jpg";

function SignupSection() {
  return (
    <section
      className="background center"
      style={{
        backgroundImage: `url(${Bg4})`,        
        backgroundPosition: "top center",
      }}
    >       
        <Signup />     
    </section>
  );
}

export default SignupSection;     
