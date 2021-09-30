import React, { useEffect, useState } from 'react'

import { Button, Card, Container, Row, Col, ListGroup } from "react-bootstrap";
import style from "./CheckoutPage.module.css"
const CheckoutPage = () => {

    
    let item1 = {
        name: "Item 1",
        description: "This is an item and it's nubmer is 1",
        quantity: 1
    };

    let item2 = {
        name: "Item 2",
        description: "This is an item and it's nubmer is 2",
        quantity: 2
    };
    let item3 = {
        name: "Item 3",
        description: "This is an item and it's nubmer is 3",
        quantity: 3
    };
    let fakeItems = [item1, item2, item3];

    // TODO: Style this part too @JHoweWowe
    const listItems = fakeItems.map((item) =>
        <Card style={{ width: "100%" }}>
            <Card.Header>
                <Card.Title>{item.name}</Card.Title>
            </Card.Header>
            <Card.Body>
                <Row>
                    <Col>
                        <Card.Text>
                            {item.description}
                        </Card.Text>
                    </Col>
                    <Col className="justify-content-md-right">
                        <Row className="justify-content-md-center">
                            <Col md="auto"> <Button variant="secondary">-</Button> </Col>
                            <Col md="auto"><Card.Text>{item.quantity}</Card.Text></Col>
                            <Col md="auto"><Button variant="secondary">+</Button></Col>
                        </Row>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );

    let [tmpCount, setTmpCount] = useState(0);
    return (
        <Container className={style.wrapper}>
            <Row>
                <Col>
                    {listItems}
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
