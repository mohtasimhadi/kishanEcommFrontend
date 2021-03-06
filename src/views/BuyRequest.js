import React from 'react'
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
} from 'react-bootstrap'
import axios from 'axios'
import { useEffect, useState } from 'react'

// data fetch

function Maps() {
  const [requests, setRequest] = useState([])
  let val = []

  const ShowRequest = async () => {
    const token = localStorage.getItem('user')

    const _token = token.split('"').join('')
    console.log(token)
    //console.log(`Bearer ` + _token)
    const config = {
      headers: {
        Authorization: `Bearer ${_token}`,
      },
    }

    axios
      .get('http://127.0.0.1:5000/product/order/orderRequest', config)
      .then((res) => {
        //console.log('RESPONSE RECEIVED: ', res)
        setRequest(res.data)
        alert('Data fetched')
      })
      .catch((err) => {
        console.log('AXIOS ERROR: ', err)
      })
  }

  useEffect(async () => {
    ShowRequest()
  }, [])

  // data fetched.. request.data
  //console.log(Object.keys(requests))
  //console.log(Object.keys(requests.data))

  if (requests.data != undefined) {
    val = requests.data
    //console.log(val[0].productName)
  }

  return (
    <>
      <Container fluid>
        <Card>
          <Card.Header>
            <Card.Title as='h4'>পণ্য ক্রয় অনুরোধ</Card.Title>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col md='6'>
                <h5>
                  <small>ক্রয় সম্পন্নকৃত পণ্যসমূহ</small>
                </h5>
                <Row
                  style={{
                    background: 'rgba(181, 218, 164, .3)',
                    width: '100%',
                    marginBottom: '5px',
                    marginLeft: '5px',
                    marginRight: '5px',
                  }}
                >
                  <Col md='8' style={{ color: 'green', width: '80%' }}>
                    {/* {val[0].productName} */}
                  </Col>
                  <Col md='2' style={{ marginRight: '0px' }}>
                    <Button>টিক</Button>
                  </Col>
                  <Col md='2' style={{ marginRight: '0px' }}>
                    <Button>ক্রস</Button>
                  </Col>
                </Row>

                <Row
                  style={{
                    background: 'rgba(181, 218, 164, .3)',
                    width: '100%',
                    marginBottom: '5px',
                    marginLeft: '5px',
                    marginRight: '5px',
                  }}
                >
                  <Col md='8' style={{ color: 'green', width: '80%' }}>
                    পণ্যের নাম
                  </Col>
                  <Col md='2' style={{ marginRight: '0px' }}>
                    <Button>টিক</Button>
                  </Col>
                  <Col md='2' style={{ marginRight: '0px' }}>
                    <Button>ক্রস</Button>
                  </Col>
                </Row>

                <Row
                  style={{
                    background: 'rgba(181, 218, 164, .3)',
                    width: '100%',
                    marginBottom: '5px',
                    marginLeft: '5px',
                    marginRight: '5px',
                  }}
                >
                  <Col md='8' style={{ color: 'green', width: '80%' }}>
                    পণ্যের নাম
                  </Col>
                  <Col md='2' style={{ marginRight: '0px' }}>
                    <Button>টিক</Button>
                  </Col>
                  <Col md='2' style={{ marginRight: '0px' }}>
                    <Button>ক্রস</Button>
                  </Col>
                </Row>
              </Col>
              <Col md='6'>
                <h5>
                  <small>ক্রয় অসম্পন্ন পণ্যসমূহ</small>
                </h5>
                <Row
                  style={{
                    background: 'rgba(181, 218, 164, .3)',
                    width: '100%',
                    marginBottom: '5px',
                    marginLeft: '5px',
                    marginRight: '5px',
                  }}
                >
                  <Col md='8' style={{ color: 'green', width: '80%' }}>
                    পণ্যের নাম
                  </Col>
                  <Col md='2' style={{ marginRight: '0px' }}>
                    <Button>টিক</Button>
                  </Col>
                  <Col md='2' style={{ marginRight: '0px' }}>
                    <Button>ক্রস</Button>
                  </Col>
                </Row>

                <Row
                  style={{
                    background: 'rgba(181, 218, 164, .3)',
                    width: '100%',
                    marginBottom: '5px',
                    marginLeft: '5px',
                    marginRight: '5px',
                  }}
                >
                  <Col md='8' style={{ color: 'green', width: '80%' }}>
                    পণ্যের নাম
                  </Col>
                  <Col md='2' style={{ marginRight: '0px' }}>
                    <Button>টিক</Button>
                  </Col>
                  <Col md='2' style={{ marginRight: '0px' }}>
                    <Button>ক্রস</Button>
                  </Col>
                </Row>

                <Row
                  style={{
                    background: 'rgba(181, 218, 164, .3)',
                    width: '100%',
                    marginBottom: '5px',
                    marginLeft: '5px',
                    marginRight: '5px',
                  }}
                >
                  <Col md='8' style={{ color: 'green', width: '80%' }}>
                    পণ্যের নাম
                  </Col>
                  <Col md='2' style={{ marginRight: '0px' }}>
                    <Button>টিক</Button>
                  </Col>
                  <Col md='2' style={{ marginRight: '0px' }}>
                    <Button>ক্রস</Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </>
  )
}

export default Maps
