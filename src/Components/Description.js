import { Container, Row, Col } from "reactstrap";
import Description1 from "../Images/description1.jpg";
import Description2 from "../Images/description2.jpg";

export default function Description() {
  return (
    <div className="description justify">
      <Container>
        <Row className="space">
          <Col>
            <img width="100%" src={Description2} alt="farming" />
          </Col>
          <Col>
            <p>
              <strong>Organic.o</strong> is an online social network where
              people can create profiles and write about anything regarding
              organic food, such as products you can offer or what you are
              looking for.
            </p>
            <p>
              Feel free to share information about you and your interests or
              anything you want! This is where you make friends, too!
            </p>
          </Col>
        </Row>
        <Row className="space"></Row>
        <Row>
          <Col>
            <p>
              At <strong>Organic.o</strong>, you can search by location, product
              or product owner, and you will be connected with people
              everywhere: from all over the country to your neighborhood. Don't
              worry, we break the distance!
            </p>
            <p>Buy directly from the grower! Sell directly to the customer! </p>
            <p>
              Find the best way of bringing everything together in one place!
            </p>
          </Col>
          <Col>
            <img width="80%" src={Description1} alt="picnic" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
