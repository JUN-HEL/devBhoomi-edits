import { motion } from "framer-motion";
import { useRef, useState } from "react";
import "./ReelCard.css";

function ReelCard({ video }) {
    const videoRef = useRef(null);
    const [showVolume, setShowVolume] = useState(false);
    const [volume, setVolume] = useState(0.7);
    const [muted, setMuted] = useState(true);

    const handleHoverStart = () => {
        videoRef.current.play();
    };

    const handleHoverEnd = () => {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
    };

    const toggleMute = () => {
        const newMuted = !muted;
        setMuted(newMuted);
        videoRef.current.muted = newMuted;
    };

    const handleVolumeChange = (e) => {
        const newVolume = e.target.value;
        setVolume(newVolume);
        videoRef.current.volume = newVolume;
        videoRef.current.muted = false;
        setMuted(false);
    };

    return (
        <motion.div
            className="reel-card"
            whileHover={{ scale: 1.05 }}
            onHoverStart={handleHoverStart}
            onHoverEnd={handleHoverEnd}
        >
            <video
                ref={videoRef}
                src={video}
                muted
                loop
                playsInline
            />

            {/* 🔊 Sound Button */}
            <div
                className="sound-control"
                onMouseEnter={() => setShowVolume(true)}
                onMouseLeave={() => setShowVolume(false)}
            >
                <button className="sound-btn" onClick={toggleMute}>
                    {muted ? "🔇" : "🔊"}
                </button>

                {showVolume && (
                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.05"
                        value={volume}
                        onChange={handleVolumeChange}
                        className="volume-slider"
                    />
                )}
            </div>

            <div className="video-overlay">
                <div className="play-icon">▶</div>
            </div>
        </motion.div>
    );
}

export default ReelCard;
