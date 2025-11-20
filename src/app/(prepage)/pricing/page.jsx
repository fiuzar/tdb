import PricingCard from "@/components/root/pricing-card"
import FAQS from "@/components/root/faqs"

const faqs = [
    {
        question: "Who is the Starter plan for?",
        answer: "The Starter plan is ideal for new traders looking to build discipline, eliminate emotional trading, and gain insights into their trading performance."
    },
    {
        question: "What additional features does the Pro plan offer?",
        answer: "The Pro plan includes advanced analytics, AI pattern detection, a prop firm funding roadmap, monthly performance audits, priority AI Mentor responses, and more."
    },
    {
        question: "Do I need to connect my trading account?",
        answer: "Yes, connecting your trading account allows our AI tools to monitor your trades in real-time and provide personalized feedback and insights."
    },
    {
        question: "What makes TDBase different from other trading tools?",
        answer: "TDBase leverages AI to provide real-time trade monitoring, mistake alerts, and personalized mentorship, helping traders improve their performance and discipline."
    },
    {
        question: "Is the Lifetime plan a one-time payment?",
        answer: "Yes, the Lifetime plan is a one-time payment that grants you permanent access to all current and future features without any additional costs."
    },
    {
        question: "Can I cancel my subscription?",
        answer: "Yes, you can cancel your subscription at any time. There are no long-term commitments, and you can continue to use the features until the end of your billing cycle."
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards, PayPal, and bank transfers."
    }
]

export default function PricingPage() {
    return (
        <section className="py-4 px-3">
            <div className="container mx-auto">
                <div className="mb-8 md:max-w-3xl lg:max-w-4xl mx-auto">
                    <h2 className="text-4xl text-center font-semibold tracking-tight text-pretty text-white sm:text-5xl lg:text-balance">
                        Pricing
                    </h2>
                    <p className="mt-6 text-center text-md md:text-lg leading-8 text-gray-400">
                        Simple Plans for profitable traders
                    </p>
                </div>

                <PricingCard />

                <div className="my-8 mt-16 md:max-w-3xl lg:max-w-4xl mx-auto">
                    <h2 className="text-2xl text-center font-semibold tracking-tight text-pretty text-white sm:text-3xl lg:text-balance">
                        Frequently Asked Questions
                    </h2>
                    <p className="mt-6 text-center text-md md:text-lg leading-5 text-gray-400">
                        Answers to common questions about our pricing plans and services.
                    </p>
                </div>

                <FAQS faqs={faqs} />
            </div>
        </section>
    )
}