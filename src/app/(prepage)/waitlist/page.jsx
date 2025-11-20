import { Card } from "@/components/ui/card";
import WaitListForm from "@/components/root/waitlist-form";

export const metadata = {
    title: "Join TDBase Waitlist - Be the First to Access Our AI Trading Coach",
    description: "Sign up for the TDBase waitlist and be among the first to experience our AI-powered trading journal and performance tracker designed for consistent traders.",
    openGraph: {
    title: "Join TDBase Waitlist",
    description: "Sign up for the TDBase waitlist and be among the first to experience our AI-powered trading journal and performance tracker designed for consistent traders.",
    url: process.env.NEXT_PUBLIC_WEBSITE_ADDRESS + "/waitlist",
    siteName: "TDBase",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_WEBSITE_ADDRESS}/img/logo.png`,
        width: 1200,
        height: 630,
        alt: "TDBase Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function WaitlistPage() {
    return (
        <div className="container p-3 mx-auto">
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base/7 font-semibold text-gray-500 text-center border max-w-60 mx-auto text-green-800 rounded-lg p-1 my-3">Waitlist Alpha. Coming Soon</h2>
                    <p className="text-4xl font-semibold tracking-tight text-center text-pretty text-white sm:text-5xl lg:text-balance">
                        Trade Smarter. Built for Modern Traders.
                    </p>
                    <p className="mt-6 text-md md:text-lg leading-8 text-gray-400 text-center">
                        Your all-in-one AI trading journal, performance tracker, and growth planner designed to help you achieve consistent profitability.
                    </p>
                </div>
                <div className="mx-auto mt-10 max-w-3xl sm:mt-12 lg:mt-16 lg:max-w-4xl text-center">
                    <Card className="p-4 border border-green-800">
                        <h3 className="text-xl font-semibold text-white">Join the Waitlist</h3>
                        <p className="text-gray-400 mb-4">Be the first to know when we launch and get exclusive early access.</p>

                        <WaitListForm />
                    </Card>
                </div>
            </div>
        </div>
    );
}