import React from 'react'
import { Card, CardGroup, Button } from 'react-bootstrap';

export default function getProductRows(items) {
    let renderResults = [];
    for (var i = 0; i < items.length; i += 3) {
        renderResults.push(
            <CardGroup>
                {
                    items.slice(i, i + 3)
                        .map(item => (
                            <Card class="col-3"> 
                                <Card.Img variant="top" src={item.img} />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>{item.description}</Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    Qty: {item.quantity}
                                    <div id="productAddButton">
                                        <Button id="addButton">Add to Cart</Button>
                                    </div>
                                </Card.Footer>
                            </Card>
                        ))
                }
            </CardGroup>
        );
    }
    return renderResults;
}

