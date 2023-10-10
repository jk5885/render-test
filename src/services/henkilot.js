import axios from 'axios'
const baseUrl='http://localhost:3002/api/persons'

const getAll = () =>{
    const request = axios.get(baseUrl)
    return request.then(response => {return response.data})
}

const lisaa = (uusiTieto) =>{
    const request= axios.post(baseUrl, uusiTieto)
    return request.then(response => {return response.data})
}

const poista =(person)=>{
    const request= axios.delete(`${baseUrl}/${person.id}`)
    return request.then(response => {return response.data})
}

export default{
    getAll: getAll,
    lisaa: lisaa,
    poista: poista
}