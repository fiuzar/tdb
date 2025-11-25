'use client'

import {useState} from "react"

import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group"
import {Label} from "@/components/ui/label"
import {Badge} from "@/components/ui/badge"
import {Separator} from "@/components/ui/separator"
import {Button} from "@/components/ui/button"
import {Check} from "lucide-react"

const plans = [
    {
        plan: "Starter",
        description: "Designed to help you eliminate emotional trading, stay consistent and understand why you win or lose.",
        monthlyPrice: 50,
        yearlyPrice: 500,
        buttonText: "Get Started",
        features: [
            "Full access to AI Trading Mentor",
            "Real-time trade monitoring with instant mistake alerts",
            "Smart automated trading journal",
            "Daily and weekly performance report",
            "Basic analytics dashboard",
            "Connect 2 trading account",
            "Community weekly market prep",
            "Beginner discipline modules",
            "Basic trade tagging & note-taking"
        ]
    },
    {
        plan: "Pro",
        description: "Built for traders who want deeper insight, stronger accountability and advanced AI-driven correction",
        monthlyPrice: 100,
        yearlyPrice: 1000,
        buttonText: "Go Pro",
        features: [
            "5 account connections",
            "Advanced analytics",
            "AI pattern detection for hidden mistakes",
            "Prop firm funding roadmap & score tracking",
            "Monthly performance audit & personalized insights",
            "Priority AI Mentor responses",
            "Advanced trade tagging",
            "Weekly accountability check-in",
            "Early access to new AI tools & modules"
        ],
        isPopular: true
    },
    {
        plan: "Lifetime",
        description: "This offer will only exist during the early growth stage",
        yearlyPrice: 1000,
        monthlyPrice: 1000,
        features: [
            "5 account connections",
            "Unlimited access to all current and future features",
            "Priority support",
            "Early adopter badge in the community",
            "Exclusive closed beta features",
            "Permanent updates without ever paying again"
        ],
        buttonText: "Get Lifetime Access"
    }
]

const comparisonTable = [
    {
        feature: "AI Trading Mentor",
        starter: { isit: true, message: "" },
        pro: { isit: true, message: "priority" },
        lifetime: { isit: true, message: "priority" }
    },
    {
        feature: "Real-time Mistake Alerts",
        starter: { isit: true, message: "" },
        pro: { isit: true, message: "advanced detection" },
        lifetime: { isit: true, message: "" }
    },
    {
        feature: "Automated Trading Journal",
        starter: { isit: true, message: "" },
        pro: { isit: true, message: "" },
        lifetime: { isit: true, message: "" }
    },
    {
        feature: "AI Trading Mentor",
        starter: { isit: false, message: "Basic" },
        pro: { isit: false, message: "Advanced" },
        lifetime: { isit: false, message: "Advanced" }
    },
    {
        feature: "Trading Account Connections",
        starter: { isit: false, message: "1" },
        pro: { isit: false, message: "5" },
        lifetime: { isit: false, message: "5" }
    },
    {
        feature: "Weekly prep sessions",
        starter: { isit: true, message: "" },
        pro: { isit: true, message: "" },
        lifetime: { isit: true, message: "" }
    },
    {
        feature: "Monthly performance review",
        starter: { isit: false, message: "" },
        pro: { isit: true, message: "" },
        lifetime: { isit: true, message: "" }
    },
    {
        feature: "Prop firm roadmap",
        starter: { isit: false, message: "" },
        pro: { isit: true, message: "" },
        lifetime: { isit: true, message: "" }
    },
    {
        feature: "Early access to new tools",
        starter: { isit: false, message: "" },
        pro: { isit: true, message: "" },
        lifetime: { isit: true, message: "" }
    },
    {
        feature: "One-time payment",
        starter: { isit: false, message: "" },
        pro: { isit: false, message: "" },
        lifetime: { isit: true, message: "" }
    },
    {
        feature: "Life updates",
        starter: { isit: false, message: "" },
        pro: { isit: false, message: "" },
        lifetime: { isit: true, message: "" }
    }
]

export default function PricingCard() {

    const [isAnnually, setIsAnnually] = useState(false);

    return (
        <div className="max-w-6xl mx-auto">
            <div className="container mx-auto max-w-6xl">
                <div className="mx-auto flex max-w-7xl flex-col gap-6">
                    <div className="flex flex-col justify-between gap-10 md:flex-row">
                        <div className="bg-muted flex h-11 w-fit shrink-0 items-center rounded-md p-1 text-lg">
                            <RadioGroup
                                defaultValue="monthly"
                                className="h-full grid-cols-2"
                                onValueChange={(value) => {
                                    setIsAnnually(value === "annually");
                                }}
                            >
                                <div className='has-[button[data-state="checked"]]:bg-background h-full rounded-md transition-all'>
                                    <RadioGroupItem
                                        value="monthly"
                                        id="monthly"
                                        className="peer sr-only"
                                    />
                                    <Label
                                        htmlFor="monthly"
                                        className="text-muted-foreground peer-data-[state=checked]:text-primary flex h-full cursor-pointer items-center justify-center px-7 font-semibold"
                                    >
                                        Monthly
                                    </Label>
                                </div>
                                <div className='has-[button[data-state="checked"]]:bg-background h-full rounded-md transition-all'>
                                    <RadioGroupItem
                                        value="annually"
                                        id="annually"
                                        className="peer sr-only"
                                    />
                                    <Label
                                        htmlFor="annually"
                                        className="text-muted-foreground peer-data-[state=checked]:text-primary flex h-full cursor-pointer items-center justify-center gap-1 px-7 font-semibold"
                                    >
                                        Yearly
                                    </Label>
                                </div>
                            </RadioGroup>
                        </div>
                    </div>
                    <div className="flex w-full flex-col items-stretch gap-6 md:flex-row">
                        {plans.map((plan) => (
                            <div
                                key={plan.name}
                                className={`flex w-full flex-col rounded-lg border p-6 text-left ${plan.isPopular ? "bg-muted" : ""
                                    }`}
                            >
                                <Badge className="mb-8 block w-fit uppercase">
                                    {plan.plan}
                                </Badge>
                                <span className="text-4xl font-medium">
                                   ${isAnnually ? plan.yearlyPrice : plan.monthlyPrice}
                                </span>
                                <p
                                    className={`text-muted-foreground ${plan.plan == "Lifetime" ? "invisible" : ""}`}
                                >
                                    {isAnnually ? "Per year" : "Per month"}
                                </p>
                                <Separator className="my-6" />
                                <div className="flex h-full flex-col justify-between gap-20">
                                    <ul className="text-muted-foreground space-y-4">
                                        {plan.features.map((feature, featureIndex) => (
                                            <li
                                                key={featureIndex}
                                                className="flex items-center gap-2"
                                            >
                                                <Check className="size-4" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Button className="w-full bg-green-800 text-white">{plan.buttonText}</Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* <div className="mt-16 overflow-x-auto hidden lg:block">
                    
                </div> */}
            </div>
        </div>
    )
}