"use client"
import React, { useEffect, useState } from "react";
import styles from "./CardsPage.module.css"; // Import CSS module

const CardsPage: React.FC = () => {
  const cards = [
    { title: "Card 2", description: "This is the second card." ,img:"/programing.png"},
    { title: "Card 3", description: "This is the third card.",img:"/aws-icon.webp"  },
    { title: "Card 4", description: "This is the fourth card.",img:"/physics.png" },
    { title: "Card 5", description: "This is the fifth card.",img:"/56902700-c5bd-11ea-813f-ed8631377258.jfif" },
    { title: "Card 6", description: "This is the sixth card.",img:"/nextjs-icon-dark-background.png" },
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
            <i className="fa-brands fa-react"></i>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsPage;
