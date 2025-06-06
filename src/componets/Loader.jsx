import styles from "../styles/Loader.module.css";

export default function Loader() {
  return (
    <div className={styles.overlay}>
      <img src="/laodingImage.svg" alt="loading" />
    </div>
  );
}

export { Loader };
