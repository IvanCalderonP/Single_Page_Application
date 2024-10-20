import React, { useState } from "react";
import { useForm } from "react-hook-form";
import FormularioCancion from "./FormularioCancion";
import TablaCanciones from "./TablaCanciones";
import VideoPlayer from "./VideoPlayer";
import styles from "../styles/Canciones.module.css"; // Para los estilos personalizados

const Canciones = () => {
    const { reset } = useForm();
    const [songs, setSongs] = useState([
        { title: "Cold", artist: "NEFFEX", time: "3:07", youtubeLink: "https://www.youtube.com/watch?v=WzQBAc8i73E&list=RDEM59bxNYWMRt0Ib7m8lbkQSg&index=1" },
        { title: "Grateful", artist: "NEFFEX", time: "3:03", youtubeLink: "https://www.youtube.com/watch?v=83RUhxsfLWs&list=RDEM59bxNYWMRt0Ib7m8lbkQSg&index=2" },
        { title: "Destinity", artist: "NEFFEX", time: "3:27", youtubeLink: "https://www.youtube.com/watch?v=24C8r8JupYY&list=RDEM59bxNYWMRt0Ib7m8lbkQSg&index=3" },
        { title: "Fight Back", artist: "NEFFEX", time: "3:17", youtubeLink: "https://www.youtube.com/watch?v=CYDP_8UTAus&list=RDEM59bxNYWMRt0Ib7m8lbkQSg&index=4" },
        { title: "Careless", artist: "NEFFEX", time: "4:57", youtubeLink: "https://www.youtube.com/watch?v=Z6L4u2i97Rw&list=RDEM59bxNYWMRt0Ib7m8lbkQSg&index=5" },
        { title: "Best of me", artist: "NEFFEX", time: "3:59", youtubeLink: "https://www.youtube.com/watch?v=0Wa_CR0H8g4&list=RDEM59bxNYWMRt0Ib7m8lbkQSg&index=6" },
        { title: "Rumores", artist: "NEFFEX", time: "4:08", youtubeLink: "https://www.youtube.com/watch?v=kXptPzKNMq4&list=RDEM59bxNYWMRt0Ib7m8lbkQSg&index=7" },
        { title: "New Beginnings", artist: "NEFFEX", time: "2:53", youtubeLink: "https://www.youtube.com/watch?v=Cb5KHT7BzEc&list=RDEM59bxNYWMRt0Ib7m8lbkQSg&index=8" },
        { title: "Myself", artist: "NEFFEX", time: "3:15", youtubeLink: "https://www.youtube.com/watch?v=QHXTC0EG9_k&list=RDEM59bxNYWMRt0Ib7m8lbkQSg&index=10" }
    ]);
    const [currentVideo, setCurrentVideo] = useState("");

    const addSong = (data) => {
        setSongs([...songs, data]);
        reset();
    };

    const handleDelete = (index) => {
        const newSongs = songs.filter((_, i) => i !== index);
        setSongs(newSongs);
    };

    const handlePlay = (youtubeLink) => {
        const url = new URL(youtubeLink);
        const videoId = url.searchParams.get("v") || url.pathname.split("/").pop();
        setCurrentVideo(videoId);
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Formulario de Canciones</h2>
            <div className={styles.gridContainer}>
                <div className={styles.formSection}>
                    <FormularioCancion onAddSong={addSong} />
                    <VideoPlayer videoId={currentVideo} />
                </div>
                <TablaCanciones songs={songs} onDelete={handleDelete} onPlay={handlePlay} />
            </div>
        </div>
    );
};

export default Canciones;