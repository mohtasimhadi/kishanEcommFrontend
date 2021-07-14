import React from "react"
import {
  Card,
  Container,
  Row,
  Col,
  Modal
} from "react-bootstrap"
import bd from "../assets/img/homepage/BG.png"

function Home() {
  return (
    <>
      <Container fluid style={{ backgroundImage: `url(${bd})`,
                                backgroundSize: "100%",
                                overflow: "hidden",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center top",
                                }}>
        <Row style={{ marginTop: "50%",
                      marginLeft: "5%",
                      marginRight: "5%",
                      position: "center",}}>
            <Col>
              <Card className="card-stats">
                <Card.Body>
                  
                </Card.Body>
                <Card.Footer>
                  <h3 style={{ textAlign: "center" }}>কৃষি বাজার</h3>
                  </Card.Footer>
              </Card>
            </Col>
            <Col>
              <Card className="card-stats">
                <Card.Body>
                  <Row>
                    <Col xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-vector text-danger"></i>
                      </div>
                    </Col>
                    <Col xs="7">
                      <div className="numbers">
                        <p className="card-category">ক্রয়কৃত পণ্য</p>
                        <Card.Title as="h4">২৩</Card.Title>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
                <Card.Footer>
                  <hr></hr>
                  <div className="stats">
                    <i className="far fa-clock-o mr-1"></i>
                    আডেট করুন
                  </div>
                </Card.Footer>
              </Card>
            </Col>
            <Col>
              <Card className="card-stats">
                <Card.Body>
                  <Row>
                    <Col xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-favourite-28 text-primary"></i>
                      </div>
                    </Col>
                    <Col xs="7">
                      <div className="numbers">
                        <p className="card-category">রেটিং</p>
                        <Card.Title as="h4">+45K</Card.Title>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
                <Card.Footer>
                  <hr></hr>
                  <div className="stats">
                    <i className="fas fa-redo mr-1"></i>
                    আপডেট করুন
                  </div>
                </Card.Footer>
              </Card>
            </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home