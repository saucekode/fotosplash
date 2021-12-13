import { useEffect, useState } from "react";
import axios from 'axios'

const client = axios.create({
    baseUrl: 'http://fotosplash.herokuapp.com/api/'
})

export default function Backend () {
    
    const [data, setData] = useState(null);

    


}
