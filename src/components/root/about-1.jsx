import Image from "next/image"

import SectionTitle from "./section-title"

export default function AboutSection1() {
    return (
        <section id="about">
            <div className="container mx-auto">
                <div className="pb-16 md:pb-20 lg:pb-28">
                    <div className="flex max-w-5xl mx-auto gap-4 flex-wrap items-center">
                        <div className="w-full px-2">
                            <SectionTitle
                                title="Our Story"
                                paragraph="TDBase started from a frustration shared by many traders:"
                                mb="44px"
                            />

                            <div className="space-y-3">
                                <p className="text-md leading-8 text-gray-300">You can follow every trading mentor online, buy every course and memorize every rule... but the real battle is personal discipline.</p>
                                <p className="text-md leading-8 text-gray-300">We noticed the same pattern among traders:</p>
                                <ul className="list-disc pl-5 text-md leading-8 text-gray-300">
                                    <li>Traders don&apos;t lose because the market is &quot;hard&quot;</li>
                                    <li>They lose because they don&apos;t track, don&apos;t measure and don&apos;t correct their patterns.</li>
                                </ul>
                                <p className="text-md md:text-lg leading-8 text-gray-300">So TDBase was built to give traders something they&apos;ve never had.</p>
                                <p className="text-md md:text-lg leading-8 text-gray-300">TDBase is evolving into a full discipline engine for traders who want to think, act and perform like professionals</p>
                            </div>

                        </div>

                        <div className="w-full px-2 lg:w-1/2 ">
                            <div className="relative m-auto overflow-hidden rounded-lg md:block">
                                <Image className="aspect-4/3 rounded-md object-cover lg:pl-4 w-full object-center" src="/img/founder.webp" width={600} height={700} alt="Founder" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pb-16 md:pb-20 lg:pb-28">
                    <div className="flex max-w-5xl mx-auto gap-4 flex-wrap items-center">
                        <div className="w-full px-2">
                            <SectionTitle
                                title="Our Mission"
                                paragraph=""
                                mb="44px"
                            />

                            <div className="space-y-3 mb-8">
                                <p className="text-md leading-8 text-gray-300">Our mission is to help traders gain long-term profitability by mastering discipline, data and execution not luck.</p>
                                <p className="text-md leading-8 text-gray-300">We believe consistent traders aren&apos;t; they are trained and the best way to train is to track, analyze, correct and improve your trading skill</p>
                            </div>

                            <SectionTitle
                                title="Our Vision"
                                paragraph=""
                                mb="44px"
                            />

                            <div className="space-y-3 mb-8">
                                <p className="text-md leading-8 text-gray-300">Our vision is to become the world&apos;s leading behaviour analytics platform for traders; the place where traders come to understand teir psychology, track their weaknesses and refine their edge.</p>
                            </div>

                        </div>

                        <div className="w-full px-2 lg:w-1/2 ">
                            <div className="relative m-auto overflow-hidden rounded-lg md:block">
                                <Image className="aspect-4/3 rounded-md object-cover lg:pl-4 w-full object-center" src="/img/team.webp" width={600} height={700} alt="Founder" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}