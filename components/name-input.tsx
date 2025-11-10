"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"

interface NameInputProps {
    onSubmit: (name: string) => void
}

export default function NameInput({ onSubmit }: NameInputProps) {
    const [inputValue, setInputValue] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (inputValue.trim()) {
            onSubmit(inputValue.trim())
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen px-4">
            <div className="w-full max-w-md">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="text-center space-y-4">
                        <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-tight">Welcome!</h1>
                        <p className="text-lg text-foreground/80">Enter your name to celebrate</p>
                    </div>

                    <div className="space-y-3">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Your name"
                            className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                            autoFocus
                        />
                        <Button
                            type="submit"
                            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-lg font-semibold rounded-lg transition-colors"
                            disabled={!inputValue.trim()}
                        >
                            Celebrate
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}
