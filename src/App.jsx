import React from "react";
import styles from "./styles/homeblog.module.css";
import { Card, CardContent } from "./componets/card";
import { Button } from "./componets/button";
import { Calendar, User } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Welcome to My Blog!",
    description:
      "This is the beginning of something awesome. Here I'll share thoughts, tutorials, and more!",
    date: "April 20, 2025",
    author: "John Doe",
    image: "./screen.png",
  },
  {
    id: 2,
    title: "Top 10 React Tips for Developers",
    description:
      "Boost your React skills with these practical and easy-to-implement tips.",
    date: "April 15, 2025",
    author: "Jane Smith",
    image: "./screen2.png",
  },
  {
    id: 1,
    title: "Welcome to My Blog!",
    description:
      "This is the beginning of something awesome. Here I'll share thoughts, tutorials, and more!",
    date: "April 20, 2025",
    author: "John Doe",
    image: "./screen.png",
  },
  {
    id: 1,
    title: "Welcome to My Blog!",
    description:
      "This is the beginning of something awesome. Here I'll share thoughts, tutorials, and more!",
    date: "April 20, 2025",
    author: "John Doe",
    image: "./screen.png",
  },
  {
    id: 1,
    title: "Welcome to My Blog!",
    description:
      "This is the beginning of something awesome. Here I'll share thoughts, tutorials, and more!",
    date: "April 20, 2025",
    author: "John Doe",
    image: "./screen.png",
  },
  {
    id: 1,
    title: "Welcome to My Blog!",
    description:
      "This is the beginning of something awesome. Here I'll share thoughts, tutorials, and more!",
    date: "April 20, 2025",
    author: "John Doe",
    image: "./screen.png",
  },
];

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <h1 className={styles.logo}>wordFlex</h1>
        <nav className={styles.navLinks}>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Login</a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <p>&copy; {new Date().getFullYear()} wordFlex. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default function HomeBlogPostUI() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.mainHeading}>Latest Blog Posts</h1>
        <div className={styles.postsGrid}>
          {blogPosts.map((post) => (
            <Card key={post.id} className={styles.card}>
              <img
                src={post.image}
                alt={post.title}
                className={styles.cardImage}
              />
              <CardContent className={styles.cardContent}>
                <h2 className={styles.cardTitle}>{post.title}</h2>
                <p className={styles.meta}>
                  <Calendar size={16} /> {post.date} • <User size={16} />{" "}
                  {post.author}
                </p>
                <p className={styles.description}>{post.description}</p>
                <Button className={styles.readMore}>Read More</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
