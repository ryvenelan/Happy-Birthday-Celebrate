"use client"

import { useState } from "react"
import BirthdayCard from "@/components/birthday-card"
import NameInput from "@/components/name-input"

export default function Page() {
    const [name, setName] = useState<string | null>(null)

    const handleNameSubmit = (submittedName: string) => {
        setName(submittedName)
    }

    const showSpecialBackground = name && name.toLowerCase() === "7frrr"

    return (
        <main className="min-h-screen">
            {showSpecialBackground && (
                <div className="fixed inset-0 z-0">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                    >
                        <source src="https://assets.mixkit.co/videos/preview/mixkit-balloons-flying-over-a-garden-4885-large.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>
            )}

            <div className="relative z-10">
                {!name ? <NameInput onSubmit={handleNameSubmit} /> : <BirthdayCard name={name} />}
            </div>
        </main>
    )
}