import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import styles from "../css/Navbar.module.css";

export default function Navbar() {
  const { user, logout } = useContext(UserContext);

  const handleOnclickLogout = async () => {
    await logout();
  };

  return (
    <nav className={styles.navbar}>
      {user ? <p className={styles.logout} onClick={()=>handleOnclickLogout()}>Logout</p> : ""}
    </nav>
  );
}
