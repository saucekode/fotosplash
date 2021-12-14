import axios from 'axios'

const baseUrl = 'https://fotosplash.herokuapp.com/api'

export const loginService = async () => {
    return await axios.get(`${baseUrl}/login`).then(res => console.log(res.data))
}