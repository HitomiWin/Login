import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import Login from "../components/Login"
import PersonsList from "../components/PersonsList"

export default function Home() {
  const { user } = useContext(UserContext);
  return (
    <div>
      {user? <PersonsList /> :<Login />}   
    </div>
  )
}
