"use client"

import BirthdayCake from "@/components/birthday-cake"
import { useEffect, useRef, useState } from "react"

interface BirthdayCardProps {
    name: string
}

export default function BirthdayCard({ name }: BirthdayCardProps) {
    const videoRef = useRef<HTMLVideoElement>(null)
    const audioRef = useRef<HTMLAudioElement>(null)
    const [showAudioButton, setShowAudioButton] = useState(false)
    const showSpecialBackground = name && name.toLowerCase() === "7frrr"

    useEffect(() => {
        if (showSpecialBackground) {
            setShowAudioButton(true)
            if (videoRef.current) {
                videoRef.current.play().catch(e => console.log(e))
            }
        }
    }, [showSpecialBackground])

    const enableAudio = () => {
        console.log("Hiding button and enabling audio")

        if (videoRef.current) {
            videoRef.current.muted = false
        }
        if (audioRef.current) {
            audioRef.current.play().catch(e => console.log("Audio error:", e))
        }

        // إخفاء الزر مباشرة - بدون انتظار
        setShowAudioButton(false)
    }

    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-8 relative">
            {showSpecialBackground && (
                <div className="fixed inset-0 z-0">
                    <video
                        ref={videoRef}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                    >
                        <source src="/videos/special-bg.mp4" type="video/mp4" />
                    </video>

                    <audio ref={audioRef} loop>
                        <source src="/audio/birthday-music.mp3" type="audio/mpeg" />
                    </audio>

                    <div className="absolute inset-0 bg-black/40"></div>
                </div>
            )}

            {/* زر الصوت - يختفي فور النقر */}
            {showAudioButton && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
                    <button
                        onClick={enableAudio}
                        className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl shadow-2xl text-xl font-semibold border-2 border-white/30"
                    >
                        🔊 Click for Sound
                    </button>
                </div>
            )}

            {/* المحتوى */}
            <div className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-6xl w-full">
                    <div className="space-y-6 order-1 lg:order-1">
                        <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold text-balance ${showSpecialBackground ? 'text-white' : 'text-foreground'}`}>
                            Happy Birthday
                            <span className={`block ${showSpecialBackground ? 'text-yellow-300' : 'text-primary'}`}>{name}!</span>
                        </h1>
                        <p className={`text-xl md:text-2xl ${showSpecialBackground ? 'text-white/90' : 'text-foreground/70'}`}>
                            Wishing you joy, happiness, and all the wonderful moments life has to offer.
                        </p>
                    </div>

                    <div className="flex justify-center order-2 lg:order-2">
                        <BirthdayCake name={name} />
                    </div>
                </div>
            </div>
        </div>
    )
}