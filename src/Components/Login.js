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

export function Login() {
  return (
    <div className="flex1 blur">
      <Container className="padding">
        <Row xs="1" lg="1" className="padding center organicoTitle">
          <Col>
            <h1>Welcome to</h1>
          </Col>
          <Col>
            <h1>Organic.o</h1>
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
                  <Button 
                  color="danger" 
                  href="/" 
                  size="md">
                    Let me in
                  </Button>
                </CardFooter>
              </Form>
            </Card>
          </CardDeck>
        </Row>
      </Container>
    </div>
  );
}
