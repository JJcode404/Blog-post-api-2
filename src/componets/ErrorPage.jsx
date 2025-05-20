import React from "react";
import { useRouteError } from "react-router-dom";
import styles from "../styles/NoFound.module.css";

function ErrorPage() {
  const error = useRouteError?.();

  const message =
    error?.statusText ||
    error?.message ||
    "Something went wrong. Please try again later.";

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>500</h1>
      <h2 className={styles.subtitle}>Server Error</h2>
      <p className={styles.message}>{message}</p>
    </div>
  );
}

export { ErrorPage };
