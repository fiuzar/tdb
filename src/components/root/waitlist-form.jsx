'use client'

import { Label } from "@/components/ui/label"
import { Button } from "../ui/button"
import { Input } from "../ui/input"

import { toast } from "sonner"

import { addToWaitlist } from "@/server-functions/waitlist"

import { useState } from "react"

export default function WaitListForm() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [isDisabled, setIsDisabled] = useState(false)

    async function join_waitlist() {
        setIsDisabled(true)

        const { success, message } = await addToWaitlist(name, email)

        if(!success) {
            toast(<div className="text-red-600">{message}</div>)
        }
        else {
            toast(<div className="text-green-600">{message}</div>)
        }

        setIsDisabled(false)
    }

    return (
        <div>

            <div className="grid md:grid-cols-2 gap-3 mb-4">

                <div className="grid gap-3">
                    <Label htmlFor="name">Name</Label>
                    <Input
                        id="name"
                        type="text"
                        placeholder="Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div className="grid gap-3">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="m@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
            </div>

            <Button onClick={join_waitlist} disabled={isDisabled} className={`bg-green-800 text-white hover:bg-green-700`} size="lg">Join Waitlist</Button>
        </div>
    )
}