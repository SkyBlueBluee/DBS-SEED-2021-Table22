import React from 'react'
import { Card, CardGroup, Button } from 'react-bootstrap';

import "./ProductUtils.css"

export default function getProductRows(items) {
    let renderResults = [];
    for (var i = 0; i < items.length; i += 3) {
        renderResults.push(
            <CardGroup>
                {
                    items.slice(i, i + 3)
                        .map(item => (
                            <Card id="cardClass" class="col-3"> 
                                <Card.Img style= {{width:"50%", margin: "0 auto"}} variant="top" src={item.image} />
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>{item.description}</Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    Qty: {item.qty}
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

