"use client";

import { Container } from "../container/container";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.content}>
          <h2>Dashboard</h2>
          <div className={styles.admin}>
            <span>Admin</span>
            <div className={styles.avatar}></div>
          </div>
        </div>
      </Container>
    </header>
  );
};
