import React from 'react'
import { Card, CardGroup } from 'react-bootstrap';

export default function getProductRows(items ) {
    let renderResults = [];
    for (var i = 0; i < items.length; i += 3) {
        renderResults.push(
            <CardGroup md="auto">
                {
                    items.slice(i, i + 3)
                        .map(item => (
                            <Card>
                                <Card.Img variant="top" src="holder.js/100px160" />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>{item.description}</Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small>{item.quantity}</small>
                                </Card.Footer>
                            </Card>
                        ))
                }
            </CardGroup>
        );
    }
    return renderResults;
}

