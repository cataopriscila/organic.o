import React from "react";
import { Container, Row, Col } from "reactstrap";
import SocialMedia from "../Components/SocialMedia";


const FooterSection = () => {
  return (
    <>
      <Container className="padding" fuid>
        <Row className="padding">
          <Col>
            <h3>About us</h3>
            <h5>Why Organic.o</h5>
            <h5>Social Impact</h5>
            <h5>Newsletter</h5>
            <h5>Blog</h5>
          </Col>
          <Col>
            <h3>Acount</h3>
            <h5>My Account</h5>
            <h5>Settings</h5>
            <h5>Need Help?</h5>
          </Col>
          <Col>
            <h3>Contact us</h3>
            <h5>Newsletter</h5>
            <h5>FAQ</h5>
            <h5>Careers</h5>
            <h5>Help Center</h5>
          </Col>
          <Col>
            <h3>Legal</h3>
            <h5>Terms & Conditions</h5>
            <h5>Privacy Policies</h5>
          </Col>
        </Row>

        <div className="padding text-center">
          <h3>Other Medias</h3>
          <SocialMedia/>
        </div>
      </Container>
      
    </>
  );
};

export default FooterSection;
