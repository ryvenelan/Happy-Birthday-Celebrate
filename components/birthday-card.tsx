"use client"

import BirthdayCake from "@/components/birthday-cake"

interface BirthdayCardProps {
    name: string
}

export default function BirthdayCard({ name }: BirthdayCardProps) {
    return (
        <div className="min-h-screen bg-background flex items-center justify-center px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-6xl w-full">
                <div className="space-y-6 order-1 lg:order-1">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground text-balance">
                        Happy Birthday
                        <span className="block text-primary">{name}!</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-foreground/70">
                        Wishing you joy, happiness, and all the wonderful moments life has to offer.
                    </p>
                </div>

                {/* Cake on the right */}
                <div className="flex justify-center order-2 lg:order-2">
                    <BirthdayCake name={name} />
                </div>
            </div>
        </div>
    )
}
