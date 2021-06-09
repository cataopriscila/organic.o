import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "reactstrap";
import Bg3 from "../Images/bg3.jpg";

export function Header() {
  return (
    <section
      className="background"
      style={{
        backgroundImage: `url(${Bg3})`,
        backgroundPosition: "top center",
      }}
    >
      <Container className="marginTitle organicoTitle text-center" md="12">
        <Row>
          <Col md={{ size: "12", offset: 0 }}>
            <h1 className="xlarge">Organic.o</h1>
          </Col>
        </Row>
        <Row>
          <Col sm="10" md={{ size: "12", offset: 0 }}>
            <h2 className="large">where buyers and</h2>
          </Col>
        </Row>
        <Row>
          <Col sm="10" md={{ size: "12", offset: 0 }}>
            <h2 className="large">growers can meet</h2>
          </Col>
        </Row>
        <Row>
          <Col className="padding" md={{ size: "12", offset: 0 }}>
            <Link to="/organic.o/signup"><Button color="danger">Join the Community</Button></Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
