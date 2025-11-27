import Image from "next/image"

const team = [
    {
        name: "Amoke Emmanuel",
        role: "Founder & CEO, TDBase",
        class: "order-1 lg:order-2",
        linkedin: "",
        img: "/img/amoke-emmanuel.png"
    },
    {
        name: "Roopkatha Ghoosh",
        role: "Co Founder & Chief Marketing Officer, TDBase",
        class: "order-2 lg:order-1",
        linkedin: "",
        img: "/img/roopkatha-ghoosh.jpg"
    },
    {
        name: "Williams Loy",
        role: "Co Founder & Sales Manager, TDBase",
        class: "order-3",
        linkedin: "",
        img: "/img/wiliams-loy.jpg"
    },
]

export default function PictureStack() {
    return (
        <div className="py-16">
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl lg:text-balance">
                        Meet the Team behind TDBase
                    </h2>
                    <p className="mt-6 text-md md:text-lg md:text-center leading-8 text-gray-400">
                        A group of traders, builders and operators committed to creating the smartest emotional-aware trading assistant ever built.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <div className="grid max-w-xl mx-auto grid-cols-1 gap-4 md:grid-cols-2 lg:max-w-none lg:grid-cols-3">
                        {team.map((team_details, idx) => (
                            <div key={idx} className="relative overflow-hidden group rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
                                <div className="aspect-3/3 bg-gray-600 rounded-xl overflow-hidden relative shadow-lg transition-transform transform hover:scale105 hover:shadow-xl duration-300">
                                    <Image src={team_details.img} alt="" width={500} height={500} className="w-full h-full object-cover object-center" />

                                    <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to transparent opacity-0 group-hover:opacity 80 transform-opacity duration-300"></div>
                                </div>

                                <div className="p-4">
                                    <h3 className="font-playfair text-xl font-semibold mb-2">{team_details.name}</h3>
                                    <p className="text-tab-purple mb-4">{team_details.role}</p>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}