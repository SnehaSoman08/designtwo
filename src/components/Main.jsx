import React from 'react'
import celeb from '../images/celeb.png';
import { Button, Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';


function Main() {
  return (
    <div>
        <Row className='mt-5 ms-5 '>
            <Col></Col>
            <Col lg={5}>
                <h2 className='text-info'>Unlock Exclusive Benefits</h2>
                <Form className='mt-3'>

                <Form.Group as={Row} className="mb-3" controlId="formPhoneNumber">
  <Form.Label column sm="20" style={{ fontSize: '15px' }}>
    PHONE NUMBER
  </Form.Label>
  <Col sm="4">
   
  <Form.Select aria-label="Default select example"  style={{borderRadius:'20px',padding:'4px'}} >
      <option value="1">+91</option>
      <option value="2">+1</option>
      <option value="3">+3</option>
    </Form.Select>
  </Col>
  <Col sm="4">
    
    <Form.Control type="text" placeholder="Phone Number" style={{borderRadius:'20px'}} />
  </Col>
</Form.Group>



      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          NAME
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" placeholder="Password" style={{borderRadius:'20px'}} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          EMAIL[OPTIONAL]
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" placeholder="Password"  style={{borderRadius:'20px'}}/>
        </Col>
      </Form.Group>
      <Button variant="outline-secondary mb-3 mt-3" style={{borderRadius:'20px',width:'400px',fontSize:'14px',border:"1 px solid black",backgroundColor:'aqua' }}>Continue</Button>
    </Form>
   
    <p>Get ready to recieve a secret code(OTP) on your phone</p>

            </Col>
            <Col lg={5} >
                <img src={celeb} alt="" style={{width:'500px',height:'450px'}} />
            </Col>
            <Col></Col>

        </Row>
    </div>
  )
}

export default Main