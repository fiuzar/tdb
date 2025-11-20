'use client'

import Image from "next/image"
import { ChartArea, AlertCircle, LogsIcon, Star, ArrowDownRight } from "lucide-react"
import { Button } from "../ui/button"
import { Avatar, AvatarImage } from "@radix-ui/react-avatar"

const how_it_works = [
    {
        avatar: <ChartArea className="size-8 text-green-600" />,
        title: "Trade with Confidence",
        description: "Leverage our advanced analytics to make informed trading decisions and boost your confidence in the market.",
    },
    {
        avatar: <AlertCircle className="size-8 text-green-600" />,
        title: "Stay Disciplined",
        description: "AI alerts and reminders to help you stick to your trading plan and avoid emotional pitfalls.",
    },
    {
        avatar: <LogsIcon className="size-8 text-green-600" />,
        title: "Build a fundable track record",
        description: "Comprehensive performance reports that showcase your trading skills to potential funders.",
    }
]

export default function HowItWorksComponent() {
    return (
        <div className="py-16">
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base/7 font-semibold text-gray-500">Demo</h2>
                    <p className="text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl lg:text-balance">
                        How TDBase Works
                    </p>
                </div>
                <div className="mx-auto grid md:grid-cols-3 items-center mb-4 max-w-5xl text-center md:ml-auto lg:max-w-3xl lg:items-start lg:text-left">

                    {how_it_works.map((item, index) => (
                        <div key={index} className="mt-10 flex flex items-center gap-2 sm:flex-row lg:items-start">
                            <div>
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                                    {item.avatar}
                                </div>
                            </div>
                            <div className="text-left">
                                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                                <p className="mt-2 text-gray-400">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center lg:justify-end mt-10 lg:mb-0 max-w-4xl mx-auto">
                    <Image
                        src="/img/pip_hero.jpg"
                        alt="TDBase"
                        width={700}
                        height={700}
                        className="max-h-[600px] w-full rounded-md object-cover lg:max-h-[800px]"
                    />
                </div>
            </div>
        </div>
    )
}