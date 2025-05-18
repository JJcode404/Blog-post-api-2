import { useState } from "react";
import styles from "../styles/auth.module.css";
import { useAuth } from "../utilis/authContextapi";
import { useNavigate } from "react-router-dom";

function LoginForm({ setview }) {
  const { logout, login } = useAuth();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const userData = await login(email, password);
      console.log(userData);
      navigate("/");
    } catch (err) {
      setError(err.message || "Something went wrong during login");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.formHeader}>
        <h1 className={styles.title}>Welcome Back</h1>
        <p className={styles.subtitle}>Sign in to continue to WordFlux</p>
      </div>

      <form className={styles.form} onSubmit={handleLogin}>
        <div className={styles.inputGroup}>
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <div className={styles.passwordHeader}>
            <label htmlFor="password">Password</label>
          </div>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && <div className={styles.errorMessage}>{error}</div>}

        <button
          type="submit"
          className={styles.loginButton}
          disabled={isLoading}
        >
          {isLoading ? "Signing in..." : "Sign In"}
        </button>

        <div className={styles.formFooter}>
          <p>
            Don't have an account?{" "}
            <a
              onClick={() => {
                setview("signup");
              }}
              className={styles.signupLink}
            >
              Sign up
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}

export { LoginForm };
