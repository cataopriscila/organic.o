import {
    Card,
    CardHeader,
    CardBody,
    NavItem,
    NavLink,
    Nav,
    TabContent,
    TabPane,
    Container,
    Row,
    Col,    
    Button,
  } from "reactstrap";

  import { useState } from 'react';  
  
  function TestimonialsTest() {
    const [openFirstCard, setOpenFirstCard] = useState("1");   
    const [openSecondCard, setOpenSecondCard] = useState("5");
   
    return (
      <>
        <section className="section-container">
          <Container className='testimonials-container'>
            <Row>
                <Col className="ml-auto mr-auto" md="10" xl="6">
                    <h1 className='textStyle large padding'>
                    Our Social Media is Growing Fast
                    </h1>
                </Col>       
            </Row>
            <Row>
            <Col className="ml-auto mr-auto" md="10" xl="6">                
                <Card>
                  <CardHeader>
                    <Nav className="justify-content-center" role="tablist" tabs>
                      
                      <NavItem>
                        <NavLink

                          className={openFirstCard  === "1" ? "active" : ""} 
                          href="#"
                          onClick={(e) => {
                            e.preventDefault(); 
                            setOpenFirstCard("1");
                          }}
                        >
                         <Button color="success" outline>Profile</Button>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={openFirstCard === "2" ? "active" : ""}
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            setOpenFirstCard("2");
                          }}
                        >
                          <Button color="success" outline>Products</Button>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={openFirstCard === "3" ? "active" : ""}
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            setOpenFirstCard("4");
                          }}
                        >
                          <Button color="success" outline>Location</Button>
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </CardHeader>                
                  <CardBody>
                    <TabContent
                      className="text-center"
                      activeTab={"openFirstCard" + openFirstCard}
                    >
                      <TabPane tabId="openFirstCard1">
                        <p>
                          I think that’s a responsibility that I have, to push
                          possibilities, to show people, this is the level that
                          things could be at. So when you get something that has
                          the name Kanye West on it, it’s supposed to be pushing
                          the furthest possibilities. I will be the leader of a
                          company that ends up being worth billions of dollars,
                          because I got the answers. I understand culture. I am
                          the nucleus.
                        </p>
                      </TabPane>
                      <TabPane tabId="openFirstCard2">
                        <p>
                          I will be the leader of a company that ends up being
                          worth billions of dollars, because I got the answers. I
                          understand culture. I am the nucleus. I think that’s a
                          responsibility that I have, to push possibilities, to
                          show people, this is the level that things could be at.
                          I think that’s a responsibility that I have, to push
                          possibilities, to show people, this is the level that
                          things could be at.
                        </p>
                      </TabPane>
                      <TabPane tabId="openFirstCard3">
                        <p>
                          I think that’s a responsibility that I have, to push
                          possibilities, to show people, this is the level that
                          things could be at. So when you get something that has
                          the name Kanye West on it, it’s supposed to be pushing
                          the furthest possibilities. I will be the leader of a
                          company that ends up being worth billions of dollars,
                          because I got the answers. I understand culture. I am
                          the nucleus.
                        </p>
                      </TabPane>                      
                    </TabContent>
                  </CardBody>
                </Card>
              </Col>
              
              
              <Col className="ml-auto mr-auto" md="10" xl="6">                
                <Card>
                  <CardHeader>
                    <Nav className="justify-content-center" tabs>
                      <NavItem>
                        <NavLink
                          className={openSecondCard === "4" ? "active" : ""}
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            setOpenSecondCard("4");
                          }}
                        >
                          <Button color="success" outline>Profile</Button>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={openSecondCard === "5" ? "active" : ""}
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            setOpenSecondCard("5");
                          }}
                        >
                          <Button color="success" outline>Products</Button>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={openSecondCard === "6" ? "active" : ""}
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            setOpenSecondCard("6");
                          }}
                        >
                          <Button color="success" outline>Location</Button>
                        </NavLink>
                      </NavItem>
                      
                    </Nav>
                  </CardHeader>
                  <CardBody>
                    <TabContent
                      className="text-center"
                      activeTab={"openSecondCard" + openSecondCard}                      
                    >
                      <TabPane tabId="openSecondCard5">                        
                        <p>
                          I think that’s a responsibility that I have, to push
                          possibilities, to show people, this is the level that
                          things could be at. So when you get something that has
                          the name Kanye West on it, it’s supposed to be pushing
                          the furthest possibilities. I will be the leader of a
                          company that ends up being worth billions of dollars,
                          because I got the answers. I understand culture. I am
                          the nucleus.
                        </p>
                      </TabPane>
                      <TabPane tabId="openSecondCard6">
                        <p>
                          I will be the leader of a company that ends up being
                          worth billions of dollars, because I got the answers. I
                          understand culture. I am the nucleus. I think that’s a
                          responsibility that I have, to push possibilities, to
                          show people, this is the level that things could be at.
                          I think that’s a responsibility that I have, to push
                          possibilities, to show people, this is the level that
                          things could be at.
                        </p>
                      </TabPane>
                      <TabPane tabId="openSecondCard7">
                        <p>
                          I think that’s a responsibility that I have, to push
                          possibilities, to show people, this is the level that
                          things could be at. So when you get something that has
                          the name Kanye West on it, it’s supposed to be pushing
                          the furthest possibilities. I will be the leader of a
                          company that ends up being worth billions of dollars,
                          because I got the answers. I understand culture. I am
                          the nucleus.
                        </p>
                      </TabPane>
                      <TabPane tabId="openSecondCard8">
                        <p>
                          "I will be the leader of a company that ends up being
                          worth billions of dollars, because I got the answers. I
                          understand culture. I am the nucleus. I think that’s a
                          responsibility that I have, to push possibilities, to
                          show people, this is the level that things could be at."
                        </p>
                      </TabPane>
                      </TabContent>                      
                  </CardBody>
                </Card>                
              </Col>

              <Col className="ml-auto mr-auto" md="10" xl="6">
              <h3 className='textStyle large padding'>
                    Follow Us
                    </h3>
              </Col>              
            </Row>
          </Container>
        </section>
      </>
    );
  }
  
  export default TestimonialsTest;