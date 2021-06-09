import React from "react";
import { Link } from "react-router-dom";
import { Container, Row } from "reactstrap";

function Footer({ isFixed }) {
  return isFixed ? (
    <footer className="fixed">
      <Container>
        <Row  className="center">
          <p>© Copyright {new Date().getFullYear()}, Organic.o, All Rights Reserved.</p>
          
        </Row>
      </Container>
    </footer>
  ) : (
    <footer className="footer">
      <Container>
        <nav>
          <ul>
            <li>
              <Link className="text-muted" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="text-muted" to="/about">
                Blog
              </Link>
            </li>
            <li>
              <Link className="text-muted" to="/about">
                Help
              </Link>
            </li>
            <li>
              <Link className="text-muted" to="/about">
                Privacy
              </Link>
            </li>
            <li>Organic.o© {new Date().getFullYear()}</li>
          </ul>
        </nav>
      </Container>
    </footer>
  );
}

export default Footer;
