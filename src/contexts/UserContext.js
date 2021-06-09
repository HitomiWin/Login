import { createContext, useState, useContext, useEffect } from "react"

export const UserContext = createContext();

export default function UserContextProvider (props){

  const value={
    
  }

  return(
    <UserContext.Provider value ={value}>
      {props.children}
    </UserContext.Provider>
  )
}

