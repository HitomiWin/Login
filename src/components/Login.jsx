import styles from "../css/Form.module.css";

export default function Login() {
  return (
    <div>
      <form className={styles.loginForm}>
        <h3>Login</h3>
        <div>
        <label htmlFor="email">Email:</label>
        <input
          className={styles.loginInput}
          type="email"
          placeholder="email"
          required
        />
        </div>
        <div>
        <label htmlFor="password">Password:</label>
        <input
          className={styles.loginInput}
          type="password"
          placeholder="password"
          required
        />
        </div>
      </form>
    </div>
  );
}
