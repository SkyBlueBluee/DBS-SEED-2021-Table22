import React, { useEffect, useState } from 'react'

import { Button, Card, Container, Row, Col, ListGroup } from "react-bootstrap";
import style from "./CheckoutPage.module.css"

import "./CheckoutPageStyles.css"

const CheckoutPage = () => {
    let item0 = {
        name: "Item 0",
        description: "SHOULD NOT SHOW",
        quantity: 0
    };
    
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
    let fakeItems = [item1, item2, item3, item3, item0,item3];

    function itemMap(item){
        if(item.quantity <= 0)
            return null;
        
        return (
            <Card style={{ width: "100%" }}>
            <Card.Header>
                <Card.Title>{item.name}</Card.Title>
            </Card.Header>
            <Card.Body>
                <Row>
                    <Col class="col-4">
                        <Card.Text>
                            {item.description}
                        </Card.Text>
                    </Col>
                    <Col class="col-6" className="justify-content-md-right">
                        <Row className="justify-content-md-center">
                            <Col md="auto"> <Button id="increaseQuantityButton" variant="secondary">-</Button> </Col>
                            <Col md="auto"><Card.Text>{item.quantity}</Card.Text></Col>
                            <Col md="auto"><Button id="decreaseQuantityButton" variant="secondary">+</Button></Col>
                        </Row>
                    </Col>
                    <Col id="rightColumn" class="col-2 justify-content-md-end">
                        <Button variant="danger">Delete</Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
        );
    }

    const listItems = fakeItems.map(itemMap);

    let [tmpCount, setTmpCount] = useState(0);
    return (
        <Container className={style.wrapper}>
            <Row>
                <Col>
                    {listItems}
                </Col>
            </Row>

            <div class="row">
                <Row className={style.buttonRow}>
                    <Col md="auto">
                        <Button variant="primary" style={{ marginRight: "16px" }} class="addMoreItemsButton">Add More Items</Button>
                        <Button variant="primary" style={{ marginLeft: "16px" }} class="checkoutButton">Checkout</Button>
                    </Col>
                </Row>
            </div>

        </Container>

    )
}

export default CheckoutPage
