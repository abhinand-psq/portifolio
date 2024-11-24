"use client"
import React, { useEffect, useState } from "react";
import styles from "./CardsPage.module.css"; // Import CSS module

const CardsPage: React.FC = () => {
  const cards = [
    { title: "mern", description: "This is the first card.",img:"/1_b_al7C5p26tbZG4sy-CWqw.png" },
    { title: "pern", description: "This is the second card.",img:"/1_Yafu7ihc1LFuP4azerAa4w.png" },
    { title: "aws dev", description: "This is the third card.",img:"/56902700-c5bd-11ea-813f-ed8631377258.jfif" },
    { title: "next js", description: "This is the fourth card.", },
    { title: "react js", description: "This is the fifth card." },
  ];

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Animated Cards</h1>
      <div className={styles.cardsGrid}>
        {cards.map((card, index) => (
          <div
            key={index}
            className={`${styles.card} ${
              animate ? styles.animateCard : ""
            }`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <h2>{card.title}</h2>
            <img src={card.img} alt="" />
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsPage;
