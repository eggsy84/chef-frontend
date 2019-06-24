import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class Menu extends Component {

    state = {
      bookNow: false
    }

    handleBookNowClick = () => { 
      this.setState({
        bookNow: true
      })
    }

   
    


  render() {
    return (
        <Card className="bg-light text-dark m-4">
        <Card.Img src={this.props.Menu.menuImageFPath} alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>              
          </Card.ImgOverlay>

        <div className="row">
          <div className="col-12">
            <Accordion> 
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="light" eventKey="1"className="d-flex align-items-end flex-column">
                    View Menu
                  </Accordion.Toggle>
                </Card.Header>
                
                <Accordion.Collapse eventKey="1">
                  
                
                  
                  { this.state.bookNow ? 
                  <Card>                  
                    <Card.Body>
                      <Form>
                        <Row>
                          <Col>
                            <Form.Control placeholder="First name" />
                          </Col>
                          <Col>
                            <Form.Control placeholder="Last name" />
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <Form.Group controlId="formGroupEmail">
                              <Form.Label></Form.Label>                              
                              <Form.Control type="email" placeholder="Email Address" />
                            </Form.Group>
                          </Col>
                        </Row>     
                        <Row>
                          <Col>
                            <Form.Group controlId="formGroupEmail">                              
                              <Form.Control type="email" placeholder="Address 1" />
                            </Form.Group>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <Form.Group controlId="formGroupEmail">                              
                              <Form.Control type="email" placeholder="Address 2" />
                            </Form.Group>
                          </Col>
                        </Row>   
                        <Row>
                          <Col>
                            <Form.Control placeholder="City" />
                          </Col>
                          <Col>
                            <Form.Control placeholder="Postcode" />
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <Form.Group controlId="formGroupEmail">
                              <Form.Label></Form.Label>                              
                              <Form.Control type="email" placeholder="Contact Number" />
                            </Form.Group>
                          </Col>
                        </Row>                          
                          <Form.Control as="select" className="mb-2">
                            <option>Number of Guests</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </Form.Control>                                
                      </Form>
                    </Card.Body>
                    <Card.Footer>
                      <Form.Group controlId="exampleForm.ControlSelect1">                        
                          <Button variant="secondary" type="submit" className="btn-block mb-3" >
                            Confirm
                          </Button>
                      </Form.Group>
                    </Card.Footer>                 
                  </Card> 
                  
                  : 
                  
                  <Card>                  
                    <Card.Body>{this.props.Menu.menuMeals}</Card.Body>

                    <Card.Footer>
                      <Form.Group controlId="exampleForm.ControlSelect1">                         
                          <Button id="bookNow" variant="secondary" type="submit" className="btn-block mt-3" onClick={this.handleBookNowClick} >
                            Book Now
                          </Button>
                      </Form.Group>
                    </Card.Footer>                 
                  </Card>}

                </Accordion.Collapse>
              </Card>

              
            </Accordion>
          </div>
        </div>          
      </Card>  
    );
  } 
}

export default Menu;