import React from 'react'
import { Card, CardGroup, Button} from 'react-bootstrap';
import "../../productPageStyles.css"
import getProductRows from "../utils/product-utils"
import api from '../api'

const ProductPage = () => {
    let item1 = {
        name: "Item 1",
        description: "This is an item and it's nubmer is 1",
        quantity: 1,
        img: "https://cdn.thesolewomens.co.uk/2021/07/nike-air-force-1-07-white-gym-red-cz0270-104_w900.jpg"
    };
    let item2 = {
        name: "Item 2",
        description: "This is an item and it's nubmer is 2",
        quantity: 2,
        img: "https://cdn.thesolewomens.co.uk/2021/07/nike-air-force-1-07-white-gym-red-cz0270-104_w900.jpg"
    };
    let item3 = {
        name: "Item 3",
        description: "This is an item and it's nubmer is 3",
        quantity: 3,
        img: "https://cdn.thesolewomens.co.uk/2021/07/nike-air-force-1-07-white-gym-red-cz0270-104_w900.jpg"
    };

    let fakeItems = [item1, item2, item3, item3];
    // TODO: Style this part too @JHoweWowe
    const listItems = fakeItems.map((item) =>
        <Card>
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
    );
    const renderResults = getProductRows(fakeItems);
    return (
        <div id="cardBody">
            {renderResults}
        </div>
    )
}

export default ProductPage

// componentDidMount = async () => {
//     this.setState({ isLoading: true })

//     await api.getAllMovies().then(movies => {
//         this.setState({
//             movies: movies.data.data,
//             isLoading: false,
//         })
//     })
// }