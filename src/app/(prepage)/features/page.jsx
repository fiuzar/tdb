// export const metadata = {
//     title: 
// }

const features = [
    {
        id: "1",
        heading: "Real-Time Trade Monitoring",
        description:
            "TDBase watches every trade you take in real time and immediatly flags mistakes or risky patters before they damage your account.",
        image: "/img/1.png"
    },
    {
        id: "2",
        heading: "AI Trading Mentor",
        description:
            "Your AI mentor analyzes your behaviour, identifies emotional decisions and guides you toward smarter, rule-based trading every single day.",
        image: "/img/2.png"
    },
    {
        id: "3",
        heading: "Deep Performance Analytics",
        description:
            "See the full picture of your trading with detailed metrics and emotional context so you can review performance without doing manual work.",
        image: "/img/3.png"
    },
    {
        id: "4",
        heading: "Smart Trading Journal",
        description: "Your trades are automatically captured with charts, notes and emotional context so you can review performance without doing manual work.",
        image: "/img/4.png"
    },
    {
        id: "5",
        heading: "Community & Social Layer",
        description: "Learn faster by sharing charts, ideas, wins and lessons with other traders who are growing improving just like you.",
        image: "/img/5.png"
    },
    {
        id: "6",
        heading: "Prop Firm Funding Roadmap",
        description: "Follow a clear guided funding path that shows you exactly what to fix to pass evaluations and stay profitable with prop firms.",
        image: "/img/6.png"
    },
    {
        id: "7",
        heading: "Mistake Alert System",
        description: "Get instant alerts when you make common trading mistakes so you can correct course before small errors turn into big losses.",
        image: "/img/8.png"
    },
    {
        id: "8",
        heading: "Personalized Improvement Plans",
        description: "TDBase creates customized growth plans based on your unique trading patterns to help you improve consistently over time.",
        image: "/img/7.jpg"
    },
    {
        id: "9",
        heading: "Secure MT4/MT5 Integration",
        description: "Easily connect your MetaTrader 4 or 5 accounts with our secure integration to start tracking your trades and performance instantly.",
        image: "/img/9.png"
    },
]

export default function FeaturesPage() {
    return (
        <section className="py-4 px-3">
            <div className="container mx-auto">
                <div className="mb-8 md:max-w-3xl lg:max-w-4xl mx-auto">
                    <h2 className="text-4xl text-center font-semibold tracking-tight text-pretty text-white sm:text-5xl lg:text-balance">
                        Features
                    </h2>
                    <p className="mt-6 text-center text-md md:text-lg leading-8 text-gray-400">
                        Explore the powerful features designed to elevate your trading journey and help you achieve consistent profitability.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3 lg:gap-8 max-w-6xl mx-auto">
                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            className="border-border flex flex-col overflow-clip rounded-xl border"
                        >
                            <a href={feature.url}>
                                <img
                                    src={feature.image}
                                    alt={feature.heading}
                                    className="aspect-16/9 h-full w-full object-cover object-center transition-opacity hover:opacity-80"
                                />
                            </a>
                            <div className="px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
                                <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6">
                                    {feature.heading}
                                </h3>
                                <p className="text-muted-foreground lg:text-lg">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
