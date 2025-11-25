'use client'

import {AlertTriangle, ShieldCheck, Clock, TrendingUp} from "lucide-react"

const values = [
    {
        name: 'Radical Honesty',
        description: `TDBase doesn't flatter you. It tells you the truth even when it stings because thats the only way to grow`,
        icon: AlertTriangle,
    },
    {
        name: 'Professional Standards',
        description: 'Retail traders deserve the same tools professional prop firm traders use: structured logs, pattern detection, rule accountability and behaviour tracking',
        icon: ShieldCheck,
    },
    {
        name: 'Discipline Above all',
        description:
            'Strategy is nothing without execution. Execution is nothing without discipline. Discipline is nothing without data. TDBase brings all three together',
        icon: Clock,
    },
    {
        name: 'Continous Improvement',
        description: 'Your trading is an ongoing system. TDBase is built to evolve with you, not around you.',
        icon: TrendingUp,
    },
]

export default function OurValues() {
    return (
        <div className="py-16">
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base/7 font-semibold text-gray-500">Our Values</h2>
                    <p className="md:text-4xl text-3xl font-semibold tracking-tight text-pretty text-white sm:text-5xl lg:text-balance">
                        What TDBase Stands for
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {values.map((feature) => (
                            <div key={feature.name} className="relative pl-16">
                                <dt className="text-base/7 font-semibold text-white">
                                    <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-green-800">
                                        <feature.icon aria-hidden="true" className="size-6 text-white" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 text-base/7 text-gray-400">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}