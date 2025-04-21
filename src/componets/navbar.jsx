import styles from "../styles/navbar.module.css";

function Navbar() {
  return (
    <div className={styles.header}>
      <div className={styles.top}>
        <div className={styles.logo}>★ WordFlux ★</div>
      </div>
      <div className={styles.navlinks}>
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Cool Website</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export { Navbar };
