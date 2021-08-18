import React from "react"
import {
  Alert,
  Badge,
  Button,
  Card,
  Modal,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap"

function ViewProduct(props) {
  return (
    <>
      <Container fluid>
        <Card>
          <Card.Header>
            <Card.Title as="h4">{props.name}</Card.Title>
          </Card.Header>
          <Card.Body>
          </Card.Body>
        </Card>
      </Container>
    </>
  )
}

export default ViewProduct;
