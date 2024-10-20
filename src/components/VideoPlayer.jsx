import React from "react";
import styles from "../styles/VideoPlayer.module.css";

const VideoPlayer = ({ videoId }) => {
    return (
        <div className={styles.videoContainer}>
            {videoId && (
                <iframe
                    width="100%"
                    height="315"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title="Video de YouTube"
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
            )}
        </div>
    );
};

export default VideoPlayer;
