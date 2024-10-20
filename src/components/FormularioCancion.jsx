import React from "react";
import { useForm } from "react-hook-form";
import styles from "../styles/FormularioCancion.module.css";

const FormularioCancion = ({ onAddSong }) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        onAddSong(data);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <label className={styles.label}>Título</label>
            <input
                className={styles.input}
                type="text"
                placeholder="Título"
                {...register("title", { required: true })}
            />
            {errors.title && <p className={styles.error}>Título es requerido</p>}

            <label className={styles.label}>Artista</label>
            <input
                className={styles.input}
                type="text"
                placeholder="Artista"
                {...register("artist", { required: true })}
            />
            {errors.artist && <p className={styles.error}>Artista es requerido</p>}

            <label className={styles.label}>Duración</label>
            <input
                className={styles.input}
                type="text"
                placeholder="Duración"
                {...register("time", { required: true })}
            />
            {errors.time && <p className={styles.error}>Duración es requerida</p>}

            <label className={styles.label}>Enlace de YouTube</label>
            <input
                className={styles.input}
                type="text"
                placeholder="Enlace de YouTube"
                {...register("youtubeLink")}
            />

            <button type="submit" className={styles.submitButton}>Agregar Canción</button>
        </form>
    );
};

export default FormularioCancion;
