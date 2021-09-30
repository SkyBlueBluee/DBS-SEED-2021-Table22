import React from 'react'
import { Card, CardGroup } from 'react-bootstrap';
import "../../productPageStyles.css"
import getProductRows from "../utils/product-utils"
const ProductPage = () => {
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

    let fakeItems = [item1, item2, item3, item3];
    // TODO: Style this part too @JHoweWowe
    const listItems = fakeItems.map((item) =>
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
    );
    const renderResults = getProductRows(fakeItems);
    return (
        <div id="cardBody">
            {renderResults}
        </div>
    )
}

export default ProductPage
