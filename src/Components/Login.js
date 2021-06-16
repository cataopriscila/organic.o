import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  Input,
  Container,
  Row,
  Col,
  CardDeck,
  CardTitle,
  Label,
  FormGroup,
} from "reactstrap";

export default function Login() {
  return (
    <div className="blur">
      <Container>
        <Row className="padding organicoTitle">
          <Col>
            <h1>Welcome!</h1>
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
                  <CardTitle tag="h4">Login</CardTitle>
                </CardHeader>
                <CardBody>
                  <FormGroup>
                    <Label for="loginEmail">E-mail</Label>
                    <Input invalid className="round" type="email"></Input>
                  </FormGroup>
                  <FormGroup>
                    <Label for="loginPassword">Password</Label>
                    <Input invalid className="round" type="password"></Input>
                  </FormGroup>
                </CardBody>
                <CardFooter className="text-center">
                  <Link to="/about">
                    <Button color="danger" size="md">
                      Let me in
                    </Button>
                  </Link>
                </CardFooter>
              </Form>
            </Card>
          </CardDeck>
        </Row>
        <Row className="padding">
          <Col>
            <h5>No accounts yet?</h5>
            <h6>
              Sign up <Link to="/signup">here</Link>
            </h6>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
