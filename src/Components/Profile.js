import React from 'react';
import { Container, Row, Col, Input, Form } from 'reactstrap';

const Profile = () => {
    return (
        <>
        <Container className="menu">
            <Row>
                <Col>
                <h2>menu</h2>
                </Col>                
            </Row>
            <Row>
                <Col>
                <h4>Profile</h4>
                </Col>                
            </Row>
            <Row>
                <Col>
                <h4>Followers</h4>
                </Col>                
            </Row>
            <Row>
                <Col>
                <h4>Messages</h4>
                </Col>                
            </Row>
            <Row>
                <Col>
                <h4>Notifications</h4>
                </Col>                
            </Row>
            <Row>
                <Col>
                <h4>Settings</h4>
                </Col>                
            </Row>
            
        </Container>
        <Container fluid className="profile">
            <Row>
                <Col>
                   <Form>                  
                    <Input type="search" placeholder="Search for growers or farmers "></Input>
                                    
                    </Form> 
                </Col>                                                
            </Row>
            <Row>
            text
            </Row>
            <Row>
            text
            </Row>
        </Container>
        <Container className="ads">                          
            <iframe src="http://www.marketorganics.com.au/" title="Market Organics"/>               
            <iframe src="https://ads.google.com/intl/pt-BR_br/home/" title="Google Ads"/>               
            <iframe src="https://www.yoplace.com.br/" title="Yo!Place"/>                        
        </Container>
        </>
    );
}

export default Profile;
