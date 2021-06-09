import { createContext, useState, useEffect } from "react"

export const UserContext = createContext();

export default function UserContextProvider (props){
  const [user, setUser] = useState(null);

  useEffect(() => {
    // eslint-disable-next-line
    getUser();
  }, []);

  const getUser = async () =>{
    let user = await fetch("/api/v1/users/whoami")
    user = await user.json();
    setUser(user)
  }

  const login = async (userInfo)=>{
    let result = await fetch("/api/v1/users/login",{
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });
    result = await result.json();
    getUser()
    return result
}

  const logout = async ()=>{
    await fetch("/api/v1/users/logout")
    getUser()
}

  const value={
    setUser,
    user,
    getUser,
    login,
    logout, 
  }

  return(
    <UserContext.Provider value ={value}>
      {props.children}
    </UserContext.Provider>
  )
}

