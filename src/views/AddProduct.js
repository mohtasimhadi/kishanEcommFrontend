import React from 'react'
import { Button, Card, Table, Container, Row, Col, Form } from 'react-bootstrap'
import { useHistory } from 'react-router'
import { useState } from 'react'
import axios from 'axios'

function AddProduct() {
  const [productName, setProductName] = useState('')
  const [minimum, setMinimum] = useState('')
  const [category, setCategory] = useState('')
  const [amount, setAmount] = useState('')
  const [unit, setUnit] = useState('')
  const [date, setDate] = useState('')
  const [unitPrice, setUnitPrice] = useState('')
  const [divison, setDivison] = useState('')
  const [district, setDistrict] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')

  const resetFields = () => {
    setProductName('')
    setMinimum('')
    setCategory('')
    setAmount('')
    setUnit('')
    setDate('')
    setUnitPrice('')
    setDivison('')
    setDistrict('')
    setDescription('')
    setImage('')
  }

  async function addProduct() {
    //data adding
    const product = {
      name: productName,
      minOrder: minimum,
      category: category,
      available: amount,
      unitname: unit,
      availableDate: date,
      unitPrize: unitPrice,
      division: divison,
      district: district,
      description: description,
      image: image,
    }

    console.log(product)

    resetFields()

    // axios
    const token = localStorage.getItem('user')
    const _token = token.split('"').join('')
    //console.log(`Bearer ` + _token)
    const config = {
      headers: {
        Authorization: `Bearer ${_token}`,
      },
    }

    axios
      .post('http://127.0.0.1:5000/product/add', product, config)
      .then((res) => {
        console.log('RESPONSE RECEIVED: ', res)
        alert('Product added successfully')
      })
      .catch((err) => {
        console.log('AXIOS ERROR: ', err)
      })

    //data added
  }

  return (
    <>
      <Container fluid>
        <Row>
          <Col className='ml-auto mr-auto' md='8'>
            <Card>
              <div className='header text-center'>
                <h4 className='title'>???????????? ??????????????????????????? ?????????????????????</h4>
                <p className='category'>
                  ???????????? ????????? ???????????? ??????????????? ??????????????????????????? ??????????????????????????? ?????????????????? ????????? ??????????????????
                  ???????????????
                </p>
                <br></br>
              </div>
              <Table responsive>
                <thead>
                  <tr>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>?????????????????? ?????????</td>
                    <td></td>
                    <td>
                      <Form>
                        <Form.Group controlId='productName'>
                          <Form.Control
                            type='text'
                            placeholder='?????????????????? ?????????'
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                          />
                        </Form.Group>
                      </Form>
                    </td>
                  </tr>

                  <tr>
                    <td>??????????????????????????? ?????????????????? ????????????</td>
                    <td></td>
                    <td>
                      <Form>
                        <Form.Group controlId='minimum'>
                          <Form.Control
                            type='text'
                            placeholder='??????????????????????????? ?????????????????? ????????????'
                            value={minimum}
                            onChange={(e) => setMinimum(e.target.value)}
                          />
                        </Form.Group>
                      </Form>
                    </td>
                  </tr>

                  <tr>
                    <td>???????????????????????????</td>
                    <td></td>
                    <td>
                      <Form>
                        <Form.Group controlId='catagorie'>
                          <Form.Control
                            type='text'
                            placeholder='???????????????????????????'
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                          />
                        </Form.Group>
                      </Form>
                    </td>
                  </tr>

                  <tr>
                    <td>??????????????????</td>
                    <td></td>
                    <td>
                      <Form>
                        <Form.Group controlId='amount'>
                          <Form.Control
                            type='kg'
                            placeholder='??????????????????'
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                          />
                        </Form.Group>
                      </Form>
                    </td>
                  </tr>

                  <tr>
                    <td>???????????????</td>
                    <td></td>
                    <td>
                      <Form>
                        <Form.Group controlId='unitName'>
                          <Form.Control
                            type='text'
                            placeholder='???????????????'
                            value={unit}
                            onChange={(e) => setUnit(e.target.value)}
                          />
                        </Form.Group>
                      </Form>
                    </td>
                  </tr>

                  <tr>
                    <td>???????????????</td>
                    <td></td>
                    <td>
                      <Form>
                        <Form.Group controlId='date'>
                          <Form.Control
                            type='text'
                            placeholder='?????????-?????????-?????????'
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                          />
                        </Form.Group>
                      </Form>
                    </td>
                  </tr>

                  <tr>
                    <td>???????????????????????? ???????????????</td>
                    <td></td>
                    <td>
                      <Form>
                        <Form.Group controlId='price'>
                          <Form.Control
                            type='number'
                            placeholder='???????????????'
                            value={unitPrice}
                            onChange={(e) => setUnitPrice(e.target.value)}
                          />
                        </Form.Group>
                      </Form>
                    </td>
                  </tr>

                  <tr>
                    <td>???????????????</td>
                    <td></td>
                    <td>
                      <Form>
                        <Form.Group controlId='divison'>
                          <Form.Control
                            type='text'
                            placeholder='???????????????'
                            value={divison}
                            onChange={(e) => setDivison(e.target.value)}
                          />
                        </Form.Group>
                      </Form>
                    </td>
                  </tr>

                  <tr>
                    <td>????????????</td>
                    <td></td>
                    <td>
                      <Form>
                        <Form.Group controlId='district'>
                          <Form.Control
                            type='text'
                            placeholder='????????????'
                            value={district}
                            onChange={(e) => setDistrict(e.target.value)}
                          />
                        </Form.Group>
                      </Form>
                    </td>
                  </tr>

                  <tr>
                    <td>???????????????</td>
                    <td></td>
                    <td>
                      <Form>
                        <Form.Group controlId='description'>
                          <Form.Control
                            type='text'
                            placeholder='???????????????'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                          />
                        </Form.Group>
                      </Form>
                    </td>
                  </tr>
                  <tr>
                    <td>????????? ????????? ????????????</td>
                    <td></td>
                    <td>
                      <Form>
                        <Form.Group controlId='photo'>
                          <Form.Control
                            type='file'
                            placeholder='?????????'
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                          />
                        </Form.Group>
                      </Form>
                    </td>
                  </tr>
                  <tr className='last-row'>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      <Button
                        className='btn-round btn-fill'
                        variant='success'
                        onClick={addProduct}
                      >
                        ????????? ????????????
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default AddProduct
