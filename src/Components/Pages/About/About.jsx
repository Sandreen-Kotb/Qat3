import { AboutVideo, logos } from "../../../assets/data";

export default function About() {
    return (
        <div className="pb-24">
            <div className="bg-bg-color pt-32 pb-20">
                <h2 data-aos="fade-up" className="text-center text-5xl md:text-6xl font-playfair font-black text-main-darker mb-4">
                    About <span className="text-amber">Qat3</span>
                </h2>
                <p data-aos="fade-up" data-aos-delay="100" className="text-center text-secondary font-medium text-lg max-w-2xl mx-auto px-6">
                    Our mission is to bridge the gap between talented Egyptian vendors and customers who appreciate quality local craftsmanship.
                </p>
            </div>

            <div className="container mx-auto px-6 mt-20">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    <div data-aos="fade-right" className="w-full lg:w-1/3 bg-white p-12 rounded-[3rem] shadow-xl border border-bg-secondary-color/20">
                        <img src={logos.logoOne} alt="Qat3 Logo" className="w-full h-auto object-contain" />
                    </div>
                    
                    <div data-aos="fade-left" className="w-full lg:w-2/3 space-y-8 text-center lg:text-left">
                        <h2 className="text-4xl md:text-5xl font-playfair font-black text-main-darker">
                            Why Choose <span className="text-amber">Qat3?</span>
                        </h2>
                        
                        <div className="space-y-6 text-lg text-secondary leading-relaxed font-medium">
                            <p>
                                We partner with a wide range of Egyptian vendors, from established brands to exciting new startups. 
                                By shopping with <span className="text-main-darker font-bold">Qat3</span>, you are directly supporting the local economy 
                                and helping Egyptian businesses thrive.
                            </p>
                            <p className="opacity-80">
                                We source high-quality products from vendors who prioritize excellence. 
                                You can shop with confidence knowing you are getting the best Egyptian-made goods, 
                                curated specifically for your lifestyle.
                            </p>
                        </div>

                        {/* QAT3 Slogan */}
                        <div className="bg-main-darker text-white p-8 rounded-[2rem] shadow-lg relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-amber/10 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-700"></div>
                            <p className="relative z-10 italic text-lg leading-relaxed font-medium">
                                "At Qat3, we are passionate about connecting you with the best products from Egyptian businesses, all conveniently delivered to your doorstep. We believe in our local community."
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* App Download Section */}
            <div className="container mx-auto px-6 mt-32 text-center">
                <div data-aos="zoom-in" className="max-w-4xl mx-auto bg-white rounded-[3rem] shadow-2xl p-12 md:p-20 border border-bg-secondary-color/20 relative overflow-hidden">
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-bg-color rounded-full"></div>
                    
                    <h2 className="relative z-10 text-3xl md:text-5xl font-playfair font-black text-main-darker mb-8">
                        Experience <span className="text-amber">Qat3</span> on the Go
                    </h2>
                    <p className="relative z-10 text-secondary font-medium text-lg mb-12">
                        Download our upcoming mobile app for <span className="text-main-darker font-bold">iOS</span> and <span className="text-main-darker font-bold">Android</span>.
                    </p>

                    <div className="relative z-10 w-full md:w-4/5 mx-auto rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
                        <video loop autoPlay muted playsInline src={AboutVideo.video} alt="App Demo" className="w-full h-auto" />
                    </div>

                    <div className="mt-12 flex justify-center gap-6">
                        <button className="bg-main-darker text-white px-8 py-3 rounded-xl font-bold opacity-50 cursor-not-allowed">App Store (Coming Soon)</button>
                        <button className="bg-main-darker text-white px-8 py-3 rounded-xl font-bold opacity-50 cursor-not-allowed">Google Play (Coming Soon)</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
