import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "./Newsletters.css"

export const Newsletters = () => {
    const [email, setEmail] = useState("");

    const handleSignup = (e) => {
        e.preventDefault();
        if (email) {
            toast.success("Subscribed successfully! 📩");
            setEmail("");
        } else {
            toast.error("Please enter a valid email address.");
        }
    };

    return (
        <div className="bg-main-darker py-20 px-6 overflow-hidden relative" id="newsletter">
            {/* Background design */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber/5 rounded-full -mr-32 -mt-32"></div>

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-12 relative z-10">
                <div data-aos="fade-right" className="text-center lg:text-left">
                    <h4 className="text-3xl md:text-4xl font-playfair font-black text-white mb-4">
                        Join Our <span className="text-amber">Newsletter</span>
                    </h4>
                    <p className="text-secondary-color text-lg font-medium opacity-80">
                        Get e-mail updates about our <span className="text-white italic">latest shop & special offers.</span>
                    </p>
                </div>
                
                <form 
                    onSubmit={handleSignup}
                    data-aos="fade-left" 
                    className="flex flex-col sm:flex-row w-full lg:w-auto gap-4"
                >
                    <input 
                        className="h-14 py-2 px-6 rounded-xl text-main-darker bg-white/95 focus:bg-white focus:ring-4 focus:ring-amber/30 transition-all outline-none min-w-[300px]"
                        type="email" 
                        placeholder="Your Email Address" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button 
                        type="submit"
                        className="h-14 bg-amber hover:bg-amber-dark text-main-darker font-bold px-10 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 whitespace-nowrap"
                    >
                        Sign Up Now
                    </button>
                </form>
            </div>
            <ToastContainer position="bottom-right" />
        </div>
    )
}

export default Newsletters;
