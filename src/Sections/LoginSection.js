import Login  from "../Components/Login";
import Bg5 from "../Images/bg5.jpg";

export function LoginSection() {
  return (
    <section
      className="background center"
      style={{
        backgroundImage: `url(${Bg5})`,
        
      }}
    >
      <Login />
    </section>
  );
}
