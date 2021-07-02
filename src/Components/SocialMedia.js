import React from 'react';
import Twitter from "../Images/twitter.svg";
import Facebook from "../Images/facebook.svg";
import Instagram from "../Images/instagram.svg";
import { Col } from "reactstrap";

const SocialMedia = () => {
    return (
        <Col>
              <div className="imgSocial">
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  id="twitter"
                >
                  <img src={Twitter} alt="twitter" />
                </a>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  id="facebook"
                >
                  <img src={Facebook} alt="facebook" />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  id="instagram"
                >
                  <img src={Instagram} alt="instagram" />
                </a>
              </div>
            </Col>
    );
}

export default SocialMedia;
