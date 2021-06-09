import { Header } from "../Elements/Header";
import Main from "../Elements/Main";
import Footer from "../Elements/Footer";



function HomePage() {
  return (
    <div>
      <Header />
      <Main />
      <Footer isFixed={false} />
    </div>
  );
}

export default HomePage;