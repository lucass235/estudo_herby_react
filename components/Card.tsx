import React from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { type } from "os";

type Props = { title: string, path: string, price: number }
export function Card(props: Props) {
  return (
    <div className={styles.cardComponent}>
          <h1>{props.title}</h1>
          <h1>R${props.price}</h1>
      <img src={props.path} width={100} height={150} alt="teste" />
    </div>
  );
}

export default Card;
