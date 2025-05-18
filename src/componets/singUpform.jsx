import { useState } from "react";
import styles from "../styles/auth.module.css";
import { useAuth } from "../utilis/authContextapi";
import { useNavigate } from "react-router-dom";

function SignupForm({ setview }) {
  const { user, setUser, login, signUp } = useAuth();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const signUpUserData = await signUp(fullname, email, password);
      navigate("/");
    } catch (e) {
      setError(e.message || "Sign up failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.formHeader}>
        <h1 className={styles.title}>Create Account</h1>
        <p className={styles.subtitle}>
          Join WordFlux and start sharing your ideas
        </p>
      </div>

      <form className={styles.form} onSubmit={handleSignUp}>
        <div className={styles.inputGroup}>
          <label htmlFor="fullname">Full Name</label>
          <input
            id="fullname"
            type="text"
            placeholder="Enter your full name"
            value={fullname}
            name="fullname"
            onChange={(e) => setFullname(e.target.value)}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            placeholder="your@email.com"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Create a strong password"
            value={password}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <p className={styles.passwordHint}>
            Use at least 8 characters with a mix of letters, numbers, and
            symbols
          </p>
        </div>

        {error && <div className={styles.errorMessage}>{error}</div>}

        <button
          type="submit"
          className={styles.signupButton}
          disabled={isLoading}
        >
          {isLoading ? "Creating Account..." : "Create Account"}
        </button>

        <div className={styles.formFooter}>
          <p className={styles.termsText}>
            By signing up, you agree to our{" "}
            <a href="/terms" className={styles.termsLink}>
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/privacy" className={styles.termsLink}>
              Privacy Policy
            </a>
          </p>
          <p className={styles.loginRedirect}>
            Already have an account?{" "}
            <a onClick={() => setview("login")} className={styles.signupLink}>
              Sign in
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}

export { SignupForm };
