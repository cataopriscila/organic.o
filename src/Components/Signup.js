import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  FormGroup,
  Input,
  Container,
  Row,
  CardDeck,
  Col,
} from "reactstrap";

export default function Signup() {
  return (
    
      <Container>
        <Row className="padding organicoTitle">
          <Col>
            <h1>Sign Up</h1>
          </Col>
        </Row>
        <Row className="center cardShadow">
          <CardDeck>
            <Card
              className="light-theme-color round"
              body
              inverse
              style={{ borderColor: "none" }}
            >
              <Form action="" className="form" method="">
                <CardHeader className="text-center">
                  <CardTitle tag="h4">Create an Account</CardTitle>
                </CardHeader>
                <CardBody>
                  <FormGroup>
                    <Input
                      invalid
                      className="round"
                      placeholder="Full Name"
                      type="text"
                    ></Input>
                  </FormGroup>
                  <FormGroup>
                    <Input
                      invalid
                      className="round"
                      placeholder="Email"
                      type="email"
                    ></Input>
                  </FormGroup>
                  <FormGroup>
                    <Input
                      invalid
                      className="round"
                      placeholder="Create a Password"
                      type="password"
                    ></Input>
                  </FormGroup>
                </CardBody>
                <CardFooter className="text-center">
                  <Link to="/about">
                    <Button color="danger" size="md">
                      Get Started
                    </Button>
                  </Link>
                </CardFooter>
              </Form>
            </Card>
          </CardDeck>
        </Row>
        <Row className="padding">
          <Col>
            <h5>Already have an account?</h5>
            <h6>
              Log in <Link to="/login">here</Link>
            </h6>
          </Col>
        </Row>
      </Container>
    
  );
}
