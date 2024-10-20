import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Home.module.css";
import kodigo from "../assets/kodigo.png"

const Home = () => {
    return (
        <div className={styles.container}>
        <h1 className={styles.title}>Bienvenido a Kodigo Music</h1>
        <img src={kodigo}/>
        <p className={styles.subtitle}>Escucha, agrega y elimina tu musica favorita¡¡</p>
        <div className={styles.buttons}>
            <Link to="/canciones" className={styles.button}>
            Canciones
            </Link>
            <Link to="/formulario" className={styles.button}>
            Contacto
            </Link>
        </div>
        </div>
    );
};

export default Home;