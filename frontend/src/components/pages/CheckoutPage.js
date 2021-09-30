import React, {useEffect, useState} from 'react'

import { Button, Card, Container, Row, Col, ListGroup } from "react-bootstrap";
import style from "./CheckoutPage.module.css"
const CheckoutPage = () => {
    [tmpCount, setTmpCount] = useState(0);


    return (
        <Container className={style.wrapper}>
            <Row>
                <Col>
                    <Card style={{ width: "100%" }}>
                        <Card.Header>
                            <Card.Title>Item Name</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col>
                                    <Card.Text>
                                        image here maybe
                                    </Card.Text>
                                </Col>
                                <Col className="justify-content-md-right">
                                    <Row className="justify-content-md-center">
                                        <Col md="auto"> <Button variant="secondary" onClick {}>-</Button> </Col>
                                        <Col md="auto"><Card.Text>{tmpCount}</Card.Text></Col>
                                        <Col md="auto"><Button variant="secondary">+</Button></Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className={style.buttonRow}>
                <Col md="auto">
                    <Button variant="primary">Checkout</Button>
                </Col>
            </Row>
        </Container>

    )
}

export default CheckoutPage
