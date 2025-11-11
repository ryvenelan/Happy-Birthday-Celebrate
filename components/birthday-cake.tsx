"use client"

import { useEffect } from "react"
import { runFireworks } from "@/lib/confetti"

interface BirthdayCakeProps {
    name: string
}

export default function BirthdayCake({ name }: BirthdayCakeProps) {
    const showYuiSticker = name.toLowerCase() === "7frrr"

    useEffect(() => {
        // إذا كان الاسم هو 7frrr، شغل الكونفيتي
        if (name.toLowerCase() === "7frrr") {
            runFireworks()
        }
    }, [name])

    return (
        <div className="relative w-56 h-80 md:w-64 md:h-96">
            <div className="absolute inset-0 flex flex-col-reverse justify-between">
                <div className="w-full h-32 md:h-40 rounded-b-3xl bg-gradient-to-b from-rose-300 to-rose-400 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-3 bg-rose-200 opacity-70 rounded-t-lg" />
                    <div className="absolute bottom-0 left-0 right-0 h-4 bg-rose-500 opacity-50 rounded-b-3xl" />
                    <div className="h-full flex items-center justify-around px-6">
                        <div className="w-4 h-4 bg-rose-100 rounded-full shadow-lg border border-rose-50" />
                        <div className="w-4 h-4 bg-rose-100 rounded-full shadow-lg border border-rose-50" />
                        <div className="w-4 h-4 bg-rose-100 rounded-full shadow-lg border border-rose-50" />
                        <div className="w-4 h-4 bg-rose-100 rounded-full shadow-lg border border-rose-50" />
                    </div>
                    <div className="absolute top-4 left-4 w-2 h-2 bg-rose-100 rounded-full opacity-60" />
                    <div className="absolute top-8 right-6 w-2 h-2 bg-rose-100 rounded-full opacity-60" />
                    <div className="absolute bottom-10 left-8 w-2 h-2 bg-rose-100 rounded-full opacity-60" />
                </div>

                <div className="w-4/5 h-24 md:h-28 mx-auto rounded-2xl bg-gradient-to-b from-rose-200 to-rose-300 shadow-lg relative overflow-hidden">
                    <div className="absolute top-3 left-0 right-0 h-2 bg-rose-100 opacity-80 rounded-full" />
                    <div className="absolute bottom-3 left-0 right-0 h-2 bg-rose-400 opacity-30 rounded-full" />
                    <div className="absolute inset-0 flex items-center justify-around px-6">
                        <div className="w-3 h-3 bg-rose-50 rounded-full shadow-md border border-rose-100" />
                        <div className="w-3 h-3 bg-rose-50 rounded-full shadow-md border border-rose-100" />
                        <div className="w-3 h-3 bg-rose-50 rounded-full shadow-md border border-rose-100" />
                        <div className="w-3 h-3 bg-rose-50 rounded-full shadow-md border border-rose-100" />
                    </div>
                    <div className="absolute top-6 left-5 w-1 h-1 bg-rose-50 rounded-full" />
                    <div className="absolute bottom-8 right-5 w-1 h-1 bg-rose-50 rounded-full" />
                </div>

                <div className="w-2/3 h-20 md:h-24 mx-auto rounded-t-3xl bg-gradient-to-b from-rose-100 to-rose-200 shadow-md relative">
                    <div className="absolute top-2 left-0 right-0 h-2 bg-white opacity-50 rounded-full" />
                    <div className="absolute bottom-4 left-0 right-0 h-1 bg-rose-300 opacity-40 rounded-full" />
                    <div className="absolute top-8 left-1/3 w-1 h-1 bg-rose-300 rounded-full" />
                    <div className="absolute top-12 right-1/3 w-1 h-1 bg-rose-300 rounded-full" />
                </div>
            </div>

            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                <div className="w-1 h-4 md:h-5 bg-yellow-50 rounded-t-full shadow-md border border-yellow-100" />

                <div className="absolute -top-4 md:-top-5 left-1/2 transform -translate-x-1/2">
                    <div className="absolute w-5 h-6 md:w-6 md:h-7 -top-1 -left-2.5 md:-left-3 rounded-full bg-orange-300 opacity-40 blur-xl animate-flame-blow" />

                    <svg
                        viewBox="0 0 24 32"
                        className="w-5 h-7 md:w-6 md:h-8 animate-flame-blow"
                        style={{ transformOrigin: "bottom center" }}
                    >
                        <path d="M12 0C12 0 6 8 6 14c0 3.3 2.7 6 6 6s6-2.7 6-6c0-6-6-14-6-14z" fill="#fbbf24" />
                        <path d="M12 4C12 4 8 9 8 13c0 2.2 1.8 4 4 4s4-1.8 4-4c0-4-4-9-4-9z" fill="#fcd34d" />
                        <path d="M12 6C12 6 10 9 10 11c0 1.1 0.9 2 2 2s2-0.9 2-2c0-2-2-5-2-5z" fill="#fef3c7" />
                    </svg>
                </div>
            </div>

            {showYuiSticker && (
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-10">
                    <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Yui%20Hirasawa%20Sticker.jfif-yoO4oYDmQBPEYTJk1fnuCXWXVScgvR.jpeg"
                        alt="Yui Hirasawa"
                        className="w-20 h-20 md:w-24 md:h-24 object-cover drop-shadow-lg"
                        style={{
                            clipPath: "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
                        }}
                    />
                </div>
            )}
        </div>
    )
}