import { useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import styles from "../css/Form.module.css";

export default function Login() {
  const { login } = useContext(UserContext); //login is function to be logedin
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let userInfo = {
      email,
      password,
    };
    let result = await login(userInfo);
    if (result.error) {
      setError(result.error);
    } else{
      setError(null)
    }
  };

  return (
    <div>
      <form
        className={styles.loginForm}
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <h3>Login</h3>
        <p
          className={`${styles.errorBox} ${
            error ? styles.active : styles.inactive
          }`}
        >
          {error}
        </p>
        <div className={styles.inputContainer}>
          <label htmlFor="email">Email:</label>
          <input
            className={styles.loginInput}
            type="email"
            placeholder="email"
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="password">Password:</label>
          <input
            className={styles.loginInput}
            type="password"
            placeholder="password"
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div className={styles.logInButtonContainer}>
          <button className={styles.logInButton} >Login</button>
        </div>
      </form>
    </div>
  );
}
