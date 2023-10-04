import { useState } from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

export function Main(props: any) {
  const [name, setName] = useState("Lucas");
  const [color, setColor] = useState("black");
  return (
    <main style={{ backgroundColor: color }} className={`${styles.main} `}>
      <p>O nome: {name}</p>
      <button onClick={() => setName("Lucas tech")}>
        <p>Alterar nome</p>
      </button>
      <h1>{props.title}</h1>
      <Image src="/lucas_tech.jpg" width={900} height={1200} alt="Banner" />
      <a href={`/cadastro?name=test`}>Ir para o cadastro</a>
      <input
        type="text"
        onChange={(e) => {
          setColor(e.target.value);
          console.log(e);
        }}
      />
    </main>
  );
}

export default Main;
