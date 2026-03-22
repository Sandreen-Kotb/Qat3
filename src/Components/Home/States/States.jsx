import { IoPersonSharp, IoStorefrontSharp, IoGlobeOutline, IoReceiptOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import "./States.css"

const StatsCard = ({ icon, targetValue, label, delay, suffix = "" }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = parseInt(targetValue.replace(/,/g, ""));
        if (start === end) return;

        let totalDuration = 2000;
        let incrementTime = Math.abs(Math.floor(totalDuration / end));

        let timer = setInterval(() => {
            start += Math.ceil(end / 100);
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(start);
            }
        }, 20);

        return () => clearInterval(timer);
    }, [targetValue]);

    return (
        <div 
            data-aos='fade-up' 
            data-aos-delay={delay}
            className="group bg-white p-8 rounded-3xl shadow-lg border border-transparent hover:border-amber/30 transition-all duration-500 transform hover:-translate-y-2 font-cairo"
        >
            <div className="flex justify-center mb-6">
                <div className="p-4 bg-bg-color rounded-2xl text-main group-hover:bg-amber group-hover:text-white transition-colors duration-500">
                    {icon}
                </div>
            </div>
            <span className="block text-4xl font-bold text-main-darker mb-2">
                {count.toLocaleString()}{suffix}
            </span>
            <span className="text-secondary font-bold uppercase tracking-widest text-xs">{label}</span>
        </div>
    );
};

const States = () => {
    return (
        <div className="relative py-24 bg-bg-color/50 overflow-hidden font-cairo">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-amber/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-main/5 rounded-full blur-3xl"></div>

            <h2 data-aos='fade-up' className='text-center text-4xl md:text-5xl font-bold text-main-darker mb-16 px-4'>
                Our Impact In Numbers
            </h2>
            
            <div className='container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                <StatsCard icon={<IoPersonSharp size={32} />} targetValue="10000" suffix="+" label="Happy Clients" delay="100" />
                <StatsCard icon={<IoStorefrontSharp size={32} />} targetValue="50" suffix="+" label="Local Branches" delay="200" />
                <StatsCard icon={<IoGlobeOutline size={32} />} targetValue="25" suffix="+" label="Cities Reached" delay="300" />
                <StatsCard icon={<IoReceiptOutline size={32} />} targetValue="100000" suffix="+" label="Product Sales" delay="400" />
            </div>
        </div>
    )
}

export default States