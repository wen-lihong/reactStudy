import axios from "axios"
import apis from "./apis"
const ajax = axios.create({
    baseURL:apis.baseURL
})
 function getTodo(){
  return ajax.get(apis.todo)
  
 
}

export default {
    getTodo
}