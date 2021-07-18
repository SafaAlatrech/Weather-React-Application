import logo from "./logo.svg";
import "./App.css";
import {
  Container,
  Row,
  Col,
  Button,
  Alert,
  Breadcrumb,
  Card,
  Form,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <container>
          <Form>
            <Row>
              <Col md>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="Example@email.com " />
                  <Form.Text className="text-muted">
                    We'll never share your email address , trust us ;)
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col md>
                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password " />
                </Form.Group>
              </Col>
            </Row>
            <Button variant="secondary" type="submit">
              Login
            </Button>
          </Form>
          <Card className="mb-3" style={{ color: "#000" }}>
            <Card.Img src="http://placeimg.com/640/260/any" />
            <Card.Body>
              <Card.Title>Card Example</Card.Title>
              <Card.Text>This is an example of react bootstrap cards</Card.Text>
              <Button variant="success">Read More</Button>
            </Card.Body>
          </Card>
          <Alert variant="danger"> This </Alert>
          <Breadcrumb>
            <Breadcrumb.Item>test1</Breadcrumb.Item>
            <Breadcrumb.Item>test2</Breadcrumb.Item>
            <Breadcrumb.Item>test3</Breadcrumb.Item>
            <Breadcrumb.Item active>testActive</Breadcrumb.Item>
          </Breadcrumb>
          <Button>Test Button</Button>
        </container>
      </header>
    </div>
  );
}

export default App;
