import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardDeck,
} from "reactstrap";

import Profile1 from "../Images/profile1.jpg";
import Profile2 from "../Images/profile2.jpg";
import Profile3 from "../Images/profile3.jpg";

import Twitter from "../Images/twitter.svg";
import Facebook from "../Images/facebook.svg";
import Instagram from "../Images/instagram.svg";

export function Testimonials() {
  return (
    <>
      <section>
        <Container className="padding center">
          <Row>
            <Col className="ml-auto mr-auto" md="10" xl="6">
              <h1 className="padding">Our social media is growing fast!</h1>
            </Col>
          </Row>

          <Row className="cardShadow padding">
            <CardDeck>
              <Col className="ml-auto mr-auto" xs="6" md="4" lg="3" xl="3">
                <Card>
                  <CardImg
                    className="imgProfile"
                    top
                    width="100%"
                    src={Profile1}
                    alt="Profile 1"
                  />
                  <CardBody>
                    <CardTitle tag="h5">Noah Marcelinni</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">
                      Buyer
                    </CardSubtitle>
                    <CardText>
                      "It's an amazing tool that helped me find real fresh food
                      just around the corner!"
                    </CardText>
                    <Button color="danger">Follow</Button>
                  </CardBody>
                </Card>
              </Col>

              <Col className="ml-auto mr-auto" xs="6" md="4" lg="3" xl="3">
                <Card>
                  <CardImg
                    className="imgProfile"
                    top
                    width="100%"
                    src={Profile2}
                    alt="Profile 2"
                  />
                  <CardBody>
                    <CardTitle tag="h5">Carla Windster</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">
                      Grower
                    </CardSubtitle>
                    <CardText>
                      "Now I can communicate directly with the customers and
                      offer them my best tomatoes"
                    </CardText>
                    <Button color="danger">Follow</Button>
                  </CardBody>
                </Card>
              </Col>

              <Col className="ml-auto mr-auto" xs="6" md="4" lg="3" xl="3">
                <Card>
                  <CardImg
                    className="imgProfile"
                    top
                    width="100%"
                    src={Profile3}
                    alt="Profile 3"
                  />
                  <CardBody>
                    <CardTitle tag="h5">Shane Williams</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">
                      Buyer/Grower
                    </CardSubtitle>
                    <CardText>
                      "Woohhh! Organic.o has provided all my needs into one
                      place! A great thank to you all, folks!"
                    </CardText>
                    <Button color="danger">Follow</Button>
                  </CardBody>
                </Card>
              </Col>
            </CardDeck>
          </Row>
          <Row>
            <Col className="ml-auto mr-auto followUs padding" md="10" xl="6">
              <h1>Follow Us Too</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="imgSocial">
                <a href="/twitter">
                  <img src={Twitter} alt="" />
                </a>
                <a href="/facebook">
                  <img src={Facebook} alt="" />
                </a>
                <a href="/instagram">
                  <img src={Instagram} alt="" />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
