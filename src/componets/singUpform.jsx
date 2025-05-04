import styles from "../styles/auth.module.css";

function SignupForm() {
  return (
    <form className={styles.form}>
      <label>
        Username:
        <input type="text" name="username" required />
      </label>
      <label>
        Password:
        <input type="password" name="password" required />
      </label>
      <label>
        Confirm Password:
        <input type="password" name="confirmPassword" required />
      </label>
      <button type="submit">Register</button>
    </form>
  );
}

export { SignupForm };
