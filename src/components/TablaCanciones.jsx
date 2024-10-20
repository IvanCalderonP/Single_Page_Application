import React from "react";
import styles from "../styles/TablaCanciones.module.css";

const TablaCanciones = ({ songs, onDelete, onPlay }) => {
    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Título</th>
                    <th>Artista</th>
                    <th>Duración</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {songs.map((song, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{song.title}</td>
                        <td>{song.artist}</td>
                        <td>{song.time}</td>
                        <td>
                            <button onClick={() => onDelete(index)} className={styles.deleteButton}>Eliminar</button>
                            <button onClick={() => onPlay(song.youtubeLink)} className={styles.playButton}>Reproducir</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TablaCanciones;
