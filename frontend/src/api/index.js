import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8000/api',
})

// export const insertMovie = payload => api.post(`/movie`, payload)
// export const getAllMovies = () => api.get(`/movies`)
// export const updateMovieById = (id, payload) => api.put(`/movie/${id}`, payload)
// export const deleteMovieById = id => api.delete(`/movie/${id}`)
// export const getMovieById = id => api.get(`/movie/${id}`)

export const getCategories = () => api.get(`/categories`)
export const getProducts = () => api.get(`/products`)

export const signIn = (payload) => api.post(`/authenticateCustomer`, {username : payload.username, password : payload.password});
export const addToCart = payload  => api.get(`/cart`, payload)
export const checkOutCart = payload => api.get(`/order`, payload)

const apis = {
    getCategories,
    getProducts,
    signIn,
    addToCart,
    checkOutCart
}

export default apis