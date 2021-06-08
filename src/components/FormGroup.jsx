import Login from "./Login"
import styles from "../css/Form.module.css";

export default function FormGroup() {
  return (
    <div>
      <Login />
      <p className={styles.text}>Create Account ?</p>
    </div>
  );
}