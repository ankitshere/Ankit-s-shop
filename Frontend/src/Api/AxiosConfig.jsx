import axios from "axios"

const instance=axios.create({
    baseURL:"https://ankit-s-shop.onrender.com/"
})

export default instance;