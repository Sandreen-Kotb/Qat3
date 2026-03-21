import { NavLink } from 'react-router-dom'
import introPageImg from '../../../assets/imgs/intro.png'

function IntroPage() {
    return (
        <div className='min-h-screen bg-bg-color flex flex-col lg:flex-row overflow-hidden'>
            {/* Left Section - Welcome Intro */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-12 lg:p-24 relative overflow-hidden bg-white">
                <div className="absolute top-0 left-0 w-64 h-64 bg-amber/5 rounded-full -ml-32 -mt-32"></div>
                <div className="absolute bottom-1/4 right-0 w-32 h-32 bg-main/5 translate-x-1/2 rounded-full"></div>
                
                <div data-aos="fade-up" className="relative z-10 text-center lg:text-left">
                    <span className="text-xs font-bold text-amber uppercase tracking-[0.6em] mb-8 block">Authentic & Sustainable</span>
                    <h1 className='text-6xl md:text-7xl font-black text-main-darker mb-10 leading-tight'>
                        Welcome to <br /> <span className="text-amber">Qat3</span>
                    </h1>
                    <p className='text-xl text-secondary font-medium mb-12 max-w-md'>
                        Discover the finest Egyptian products, curated for quality and craftsmanship.
                    </p>
                </div>
            </div>

            {/* Right Section - Auth Actions */}
            <div className="w-full lg:w-1/2 bg-main-darker flex items-center justify-center p-12 lg:p-24 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full"></div>
                
                <div data-aos="fade-left" className='relative z-10 w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 p-12 md:p-16 rounded-[3rem] shadow-2xl text-center'>
                    <h2 className='text-4xl font-playfair font-black text-white mb-4'>Start Your Journey</h2>
                    <p className='text-sm mb-12 text-white/60 font-medium tracking-wider uppercase'>Join thousands of local shoppers</p>
                    
                    <div className="flex flex-col gap-4">
                        <NavLink to="/sign-up" className="w-full group">
                            <button className="w-full py-4 px-8 bg-amber text-main-darker font-bold rounded-2xl hover:bg-amber-dark transition-all duration-300 shadow-lg shadow-amber/20 flex items-center justify-center gap-3">
                                <span>I Am New Here</span>
                                <i className="fa-solid fa-user-plus group-hover:translate-x-1 transition-transform"></i>
                            </button>
                        </NavLink>

                        <NavLink to="/sign-in" className="w-full group">
                            <button className="w-full py-4 px-8 bg-white/10 border border-white/20 text-white font-bold rounded-2xl hover:bg-white/20 transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-3">
                                <span>Log In to Your Account</span>
                                <i className="fa-solid fa-right-to-bracket group-hover:translate-x-1 transition-transform"></i>
                            </button>
                        </NavLink>
                    </div>

                    <p className="mt-12 text-white/40 text-xs font-medium">
                        By continuing, you agree to our <span className="text-white/60 underline cursor-pointer">Terms of Service</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default IntroPage