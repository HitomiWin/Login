import { createContext, useState, useEffect } from "react"

export const ListContext = createContext();

export default function ListContextProvider(props) {
  const [persons, setPersons] = useState(null);
  const [message, setMessage] = useState(null)

  useEffect(() => {
    getAllPersons()
  }, [])

  const getAllPersons= async ()=>{
    let respons = await fetch("/api/v1/lists/persons")
    if(respons.status ===404){
      
      setMessage(respons.error)
 
    } else if(respons.status === 200){
      console.log(respons)
      respons = await respons.json();
      setPersons(respons)
      setMessage(null)   
    }
  }

  const value ={
    persons,
    message
  }


  return (
    <ListContext.Provider value={value}>
      {props.children}
    </ListContext.Provider>

)
}