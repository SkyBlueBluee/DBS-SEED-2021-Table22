import React, { useEffect, useState } from 'react'
import { Card, CardGroup, Button} from 'react-bootstrap';
import "../../productPageStyles.css"
import getProductRows from "../utils/product-utils"
import apis from "../../api/index"
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

    let [products, setProducts] = useState([]);
    useEffect(async () => {
        console.log("HAHA")
        let result = await apis.getProducts();
        // console.log(result.data.data);
        setProducts(result.data.data);
    },[])

    const renderResults = getProductRows(products);
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