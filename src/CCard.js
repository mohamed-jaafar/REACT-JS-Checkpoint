import { Card, Form ,Button } from "react-bootstrap";
function CCard(props) {
  return (
    <div>
      {" "}
      {/* {<Card style={{ width: "18rem" }}> }
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
  </Card> */
  
  <Form>
   <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Nom</Form.Label>
    <Form.Control type="text" placeholder="Enter nom" />
    <Form.Text className="text-muted">
  
    </Form.Text>
  </Form.Group> 
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Prénom</Form.Label>
    <Form.Control type="text" placeholder="Enter Prénom" />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group> 
 
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
  
  }
    </div>
  );
}

export default CCard; 