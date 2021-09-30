import React from 'react'
import api from '../api'

const ProductPage = () => {
    return (
        <div>
            <header>PRODUCT PAGE</header>
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