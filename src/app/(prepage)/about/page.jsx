import OurValues from "@/components/root/our-values"
import PictureStack from "@/components/root/picture-stack"
import AboutSection1 from "@/components/root/about-1"

import Image from "next/image"

export default function AboutPage() {
    return (
        <section className="mt-10 py-4 px-3">
            <div className="container mx-auto max-w-6xl">
                <div className="mb-12 mx-auto text-center md:max-w-3xl lg:max-w-4xl">
                    <h1 className="text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl lg:text-balance">
                        Built for Traders Who Are Tired of Guesswork 
                    </h1>
                    <p className="mt-6 text-md md:text-lg leading-8 text-gray-400">
                        TDBase was created with a simple belief: trading should be data-driven, disciplined and brutally honest not emotional, impulsive or based on vibes.
                    </p>
                </div>

                <AboutSection1 />

                <OurValues />
                <PictureStack />

                <div className="py-10 overflow-hidden object-center overflow-x-hidden">
                    <div className="flex jusitfy-between"></div>
                </div>

            </div>
        </section>
    )
}