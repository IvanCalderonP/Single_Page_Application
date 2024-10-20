import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import styles from "../styles/Formulario.module.css";

const Formulario = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = (data) => {
        Swal.fire({
        title: "Datos guardados",
        text: "El formulario se ha enviado con éxito",
        icon: "success",
        confirmButtonText: "Aceptar",
        });
        reset();
    };

    return (
        <div className={styles.container}>
        <h2 className={styles.title}>Formulario</h2>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div className={styles.field}>
            <label>Nombre</label>
            <input
                type="text"
                {...register("nombre", { required: true })}
                className={styles.input}
            />
            {errors.nombre && <span className={styles.error}>El nombre es requerido</span>}
            </div>

            <div className={styles.field}>
            <label>Apellido</label>
            <input
                type="text"
                {...register("apellido", { required: true })}
                className={styles.input}
            />
            {errors.apellido && <span className={styles.error}>El Apellido es requerido</span>}
            </div>

            <div className={styles.field}>
            <label>Email</label>
            <input
                type="email"
                {...register("email", { required: true })}
                className={styles.input}
            />
            {errors.email && <span className={styles.error}>El email es requerido</span>}
            </div>

            <div className={styles.field}>
            <label>Contraseña</label>
            <input
                type="password"
                {...register("password", { required: true, minLength: 8 })}
                className={styles.input}
            />
            {errors.password && (
                <span className={styles.error}>La contraseña debe tener al menos 8 caracteres</span>
            )}
            </div>

            <button type="submit" className={styles.submit}>
            Enviar
            </button>
        </form>
        </div>
    );
};

export default Formulario;