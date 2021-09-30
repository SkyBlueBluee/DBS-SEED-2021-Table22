import React from 'react'
import { Card, CardGroup, Button } from 'react-bootstrap';

import "./ProductUtils.css"
import apis from "../../api/index"
export default function getProductRows(items) {
    // let [itemToAdd, setItemToAdd] = useState({});
    // useEffect(() => {
    //     let id = localStorage.getItem("customer_id");
    //     if(itemToAdd){
    //         let body = {
    //             customer_id = id,
    //             product_id = itemToAdd.id,
    //             title = itemToAdd.title,
    //             price = itemToAdd.price,
    //             description = itemToAdd.description,
    //             quantity = 1,
    //             image = itemToAdd.image
    //         };
    //         apis.addToCart(body);
    //         itemToAdd = null;
    //     }
    // },[]);

    function addToCart(){
        console.log("Added item to cart");
        
    }
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
                                        <Button id="addButton" onClick={addToCart}>Add to Cart</Button>
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

