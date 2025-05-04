import { useState } from "react";
import styles from "../styles/auth.module.css";
import { useAuth } from "../utilis/authContextapi";

function LoginForm() {
  const { user, setUser, logout, login } = useAuth();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userData = await login(email, password);
      console.log(userData);
      setUser(userData);
      setError("");
    } catch (err) {
      setError("Invalid login");
    }
  };

  const handleLogout = () => {
    logout(null);
  };

  console.log(`the following is user data ${user}`);

  return (
    <form className={styles.form} onSubmit={handleLogin}>
      <label>
        Username:
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type="submit">Log In</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}
export { LoginForm };
