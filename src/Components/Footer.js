import React from "react";
import { Container } from "reactstrap";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <nav>
          <ul>
            <li>
              <a className='text-muted' 
                href="/"
                target=""
              >
                About
              </a>
            </li>
            <li>
              <a className='text-muted' 
                href="/"
                target=""
              >
                Blog
              </a>
            </li>
            <li>
              <a className='text-muted' 
                href="/"
                target=""
              >
               Help
              </a>
            </li>
            <li>
              <a className='text-muted' 
                href="/"
                target=""
              >
               Privacy
              </a>
            </li>
            <li>
            Organic.o© {new Date().getFullYear()}    
            </li>
          </ul>
        </nav>        
      </Container>
    </footer>
  );
}

export default Footer;
