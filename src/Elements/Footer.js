import React from "react";
import { Container } from "reactstrap";

function Footer({isFixed}) {
  return (
    isFixed? 
    (<footer className= "footer fixed">
      <Container>
        <nav>
          <ul>
            <li>
            © Copyright {new Date().getFullYear()}    
            </li>
            <li>
              Organic.o               
            </li>
            <li>              
                All Rights Reserved.              
            </li>                     
          </ul>
        </nav>        
      </Container>
    </footer>) : 
    (<footer className= "footer">
    <Container>
      <nav>
        <ul>
          <li>
            <a className='text-muted' 
              href="/about"
              target=""
            >
              About
            </a>
          </li>
          <li>
            <a className='text-muted' 
              href="/about"
              target=""
            >
              Blog
            </a>
          </li>
          <li>
            <a className='text-muted' 
              href="/about"
              target=""
            >
             Help
            </a>
          </li>
          <li>
            <a className='text-muted' 
              href="/about"
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

    )
  );
}

export default Footer;
