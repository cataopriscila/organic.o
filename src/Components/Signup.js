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
} from "reactstrap";

export default function Signup() {
  return (
    <>
      <Container className="padding">
        <Row className="padding center">
          <h1>Sign Up Now</h1>
        </Row>
        <Row className="center cardShadow">
          <CardDeck>
            <Card
              className="light-theme-color"
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
                      placeholder="First Name"
                      type="text"
                    >
                      {" "}
                    </Input>
                  </FormGroup>
                  <FormGroup>
                    <Input
                      invalid
                      className="round"
                      placeholder="Last Name"
                      type="text"
                    ></Input>
                  </FormGroup>
                  <FormGroup>
                    <Input
                      invalid
                      className="round"
                      placeholder="Email"
                      type="text"
                    ></Input>
                  </FormGroup>
                </CardBody>
                <CardFooter className="text-center">
                  <Button
                    color="danger"
                    href="/"                    
                    size="md"
                  >
                    Get Started
                  </Button>
                </CardFooter>
              </Form>
            </Card>
          </CardDeck>
        </Row>
      </Container>
    </>
  );
}
