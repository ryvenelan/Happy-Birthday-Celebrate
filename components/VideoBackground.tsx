"use client";

import React, { useEffect, useRef } from "react";

interface Props {
    playVideo: boolean;
}

const VideoBackground: React.FC<Props> = ({ playVideo }) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        const v = videoRef.current;
        if (!v) return;

        if (playVideo) {
            v.muted = false;
            v.play().catch((err) => {
                v.muted = true;
                v.play().catch(() => {});
            });
        } else {
            v.muted = true;
            v.play().catch(() => {});
        }
    }, [playVideo]);

    return (
        <video
            ref={videoRef}
            autoPlay
            loop
            muted={!playVideo}
            playsInline
            className="fixed inset-0 w-full h-full object-cover -z-10 bg-black"
        >
            <source src="/videos/special-bg.mp4" type="video/mp4" />
        </video>
    );
};

export default VideoBackground;
