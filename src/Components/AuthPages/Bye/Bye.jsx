import { NavLink } from "react-router-dom"
import { FaRegSadCry } from "react-icons/fa";

const Bye = () => {
    return (
        <div className='min-h-screen bg-bg-color flex justify-center items-center flex-col p-6 text-center overflow-hidden relative'>
            <div className="absolute top-0 left-0 w-96 h-96 bg-amber/5 rounded-full -ml-48 -mt-48"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-main/5 rounded-full -mr-32 -mb-32"></div>

            <div data-aos="zoom-in" className="relative z-10 flex flex-col items-center max-w-lg">
                <div className="text-amber text-8xl mb-10 transform hover:scale-110 transition-transform duration-500 cursor-default">
                    <FaRegSadCry />
                </div>
                
                <h1 className="text-main-darker text-4xl md:text-6xl font-playfair font-black mb-6 leading-tight">
                    Wait, <span className="text-amber">Going Already?</span>
                </h1>
                
                <p className="text-secondary font-medium text-lg mb-12">
                    We're sad to see you go. Your local favorites will be waiting for your return!
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-6 w-full">
                    <NavLink to="/sign-in" className="flex-grow group">
                        <button className="w-full h-16 bg-main-darker text-white font-black rounded-2xl shadow-xl transition-all duration-300 transform group-hover:scale-[1.05] active:scale-95">
                            Login Again
                        </button>
                    </NavLink>
                    <NavLink to="/" className="flex-grow group">
                        <button className="w-full h-16 bg-white border border-bg-secondary-color/30 text-main-darker font-black rounded-2xl shadow-sm transition-all duration-300 transform group-hover:bg-bg-color group-hover:scale-[1.05] active:scale-95">
                            Back Home
                        </button>
                    </NavLink>
                </div>
                
                <p className="mt-16 text-secondary/40 text-[10px] font-bold uppercase tracking-[0.3em]">
                    Qat3 — Authentic Egyptian Experience
                </p>
            </div>
        </div>
    )
}

export default Bye