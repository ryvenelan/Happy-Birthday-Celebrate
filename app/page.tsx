"use client"

import { useState } from "react"
import BirthdayCard from "@/components/birthday-card"
import NameInput from "@/components/name-input"

export default function Page() {
    const [name, setName] = useState<string | null>(null)

    const handleNameSubmit = (submittedName: string) => {
        setName(submittedName)
    }

    return (
        <main className="min-h-screen bg-background">
            {!name ? <NameInput onSubmit={handleNameSubmit} /> : <BirthdayCard name={name} />}
        </main>
    )
}
