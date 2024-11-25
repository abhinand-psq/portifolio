"use client"
import React, { useEffect, useState } from "react";
import styles from "./CardsPage.module.css"; // Import CSS module
import Link from "next/link";

const CardsPage: React.FC = () => {
  const cards = [
    { title: "aws dev", description: "This is the first card.",link:false,img:"/1_b_al7C5p26tbZG4sy-CWqw.png" },
    { title: "react js/ts", description: "This is the second card.",link:false,img:"/1_Yafu7ihc1LFuP4azerAa4w.png" },
    { title: "pern", description: "This is the third card.",link:false,img:"/56902700-c5bd-11ea-813f-ed8631377258.jfif" },
    { title: "next js", description: "This is the fourth card.",link:false,img:"/nextjs.jpeg" },
    { title: "mern", description: "This is the fifth card." ,link:false,img:"/programing.png"},
    { title: "go home", description: "",link:true ,img:"/pngtree-always-go-home-and-see-big-bag-trunk-come-back-home-png-image_3857471-removebg-preview (1).png"},
  ];

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>i am good @</h1>
      <div className={styles.cardsGrid}>
        {cards.map((card, index) => (
          <Link key={index}  href={`${card.link ?"/":'/service'}`}>
          <div 
            key={index}
            className={`${styles.card} ${
              animate ? styles.animateCard : ""
            }`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <h2>{card.title}</h2>
            <img src={card.img} alt="" />
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CardsPage;
