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

import SocialMedia from "./SocialMedia";

import Profile1 from "../Images/profile1.jpg";
import Profile2 from "../Images/profile2.jpg";
import Profile3 from "../Images/profile3.jpg";

import { Link } from "react-router-dom";

const Testimonials = () => {
  return (    
      <section>
        <Container className="center">
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
                    <Link to="/signup">
                      <Button color="danger">Follow</Button>
                    </Link>
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
                    <Link to="/signup">
                      <Button color="danger">Follow</Button>
                    </Link>
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
                    <Link to="/signup">
                      <Button color="danger">Follow</Button>
                    </Link>
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
            <SocialMedia/>
          </Row>
        </Container>
      </section>    
  )
}

export default Testimonials;