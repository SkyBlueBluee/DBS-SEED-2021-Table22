import React, { useEffect, useState } from 'react'
import { Card, CardGroup, Button} from 'react-bootstrap';
import "../../productPageStyles.css"
import getProductRows from "../utils/product-utils"
import apis from "../../api/index"

import "./ProductPage.css"

const ProductPage = () => {

    let [products, setProducts] = useState([]);
    useEffect(async () => {
        console.log("HAHA")
        let result = await apis.getProducts();
        // console.log(result.data.data);
        setProducts(result.data.data);
    },[])

    const renderResults = getProductRows(products);
    return (
        <div class="cardBody">
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