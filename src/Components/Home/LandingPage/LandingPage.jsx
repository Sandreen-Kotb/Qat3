import background from "../../../assets/imgs/landing.jpeg";
import { NavLink } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="custom-height overflow-hidden font-cairo bg-white">
      <section className="relative min-w-full h-screen flex justify-center items-center px-6 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-amber/5 rounded-full blur-[120px] -mr-64 pointer-events-none"></div>
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-main/5 rounded-full blur-[100px] -ml-40 pointer-events-none"></div>

        <div className="container px-6 md:px-20 flex flex-col justify-center items-center text-center z-10">
          <h4 
            data-aos='fade-up' 
            className="text-amber font-bold text-lg md:text-xl uppercase tracking-[0.4em] mb-6"
          >
            Distinctively Egyptian
          </h4>
          <h2 
            data-aos='fade-up' 
            data-aos-delay="100"
            className="text-3xl md:text-7xl lg:text-8xl font-black text-main-darker leading-tight mb-2"
          >
            Super Value <span className="text-amber">Deals</span>
          </h2>
          <h1 
            data-aos='fade-up'
            data-aos-delay="200"
            className="text-2xl md:text-6xl lg:text-7xl font-bold text-secondary/40 leading-tight mb-8 italic"
          >
            Found Nowhere Else
          </h1>
          <p 
            data-aos='fade-right'
            data-aos-delay="300"
            className="text-lg md:text-xl text-secondary max-w-lg mb-10 leading-relaxed font-medium"
          >
            Save More With Coupons & Up To <span className="text-amber font-bold">70% Off!</span> Supporting our local Egyptian craftmanship.
          </p>
          
          <NavLink 
            data-aos='fade-up'
            data-aos-delay="400"
            to="/shop" 
            className="group relative inline-flex items-center justify-center px-10 py-4 font-bold text-white transition-all duration-300 bg-main-darker rounded-full hover:bg-amber overflow-hidden"
          >
            <span className="relative z-10">Shop Now!</span>
            <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
