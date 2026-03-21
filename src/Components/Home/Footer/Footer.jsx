import appStore from "../../../assets/logos/app.jpg"
import playStore from "../../../assets/logos/play.jpg"
import payImg from "../../../assets/logos/pay.png"
import { BsFacebook, BsInstagram, BsTwitterX } from "react-icons/bs"
import { NavLink } from "react-router-dom"
import { logos } from "../../../assets/data"

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-main-darker text-white pt-20 pb-10 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        <div data-aos='fade-up' className="flex flex-col mb-4">
          <img src={logos.logoThree} className="w-24 h-24 rounded-full mb-8 border-2 border-amber/30 bg-white object-contain" alt="Qat3 Logo" />
          <div className="space-y-4">
            <p className="text-sm opacity-80"><strong className="text-amber">Address: </strong> 25 Alex Road, Street 20, Cairo</p>
            <p className="text-sm opacity-80"><strong className="text-amber">Phone: </strong> +045 3333333 || 01067748430</p>
            <p className="text-sm opacity-80"><strong className="text-amber">Hours: </strong> 10:00 - 18:00, Mon - Sat</p>
          </div>
          <div className="mt-8">
            <h4 className="text-lg font-playfair font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <button aria-label="Facebook" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-amber hover:text-main-darker transition-all duration-300">
                <BsFacebook size={18} />
              </button>
              <button aria-label="Twitter" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-amber hover:text-main-darker transition-all duration-300">
                <BsTwitterX size={18} />
              </button>
              <button aria-label="Instagram" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-amber hover:text-main-darker transition-all duration-300">
                <BsInstagram size={18} />
              </button>
            </div>
          </div>
        </div>

        <div data-aos='fade-up' data-aos-delay="100" className="flex flex-col">
          <h4 className="text-xl font-playfair font-bold mb-8 text-amber">About</h4>
          <ul className="space-y-4">
            <li><NavLink to="/about" className="text-sm opacity-70 hover:opacity-100 hover:text-amber transition-all">About Us</NavLink></li>
            <li><button className="text-sm opacity-70 hover:opacity-100 hover:text-amber transition-all text-left">Delivery Information</button></li>
            <li><button className="text-sm opacity-70 hover:opacity-100 hover:text-amber transition-all text-left">Privacy Policy</button></li>
            <li><button className="text-sm opacity-70 hover:opacity-100 hover:text-amber transition-all text-left">Terms & Conditions</button></li>
            <li><NavLink to="/contact" className="text-sm opacity-70 hover:opacity-100 hover:text-amber transition-all">Contact Us</NavLink></li>
          </ul>
        </div>

        <div data-aos='fade-up' data-aos-delay="200" className="flex flex-col">
          <h4 className="text-xl font-playfair font-bold mb-8 text-amber">My Account</h4>
          <ul className="space-y-4">
            <li><NavLink to="/sign-in" className="text-sm opacity-70 hover:opacity-100 hover:text-amber transition-all">Sign In</NavLink></li>
            <li><NavLink to="/cart" className="text-sm opacity-70 hover:opacity-100 hover:text-amber transition-all">View Cart</NavLink></li>
            <li><NavLink to="/shop" className="text-sm opacity-70 hover:opacity-100 hover:text-amber transition-all">Shop</NavLink></li>
            <li><button className="text-sm opacity-70 hover:opacity-100 hover:text-amber transition-all text-left">Help & Support</button></li>
          </ul>
        </div>

        <div data-aos='fade-up' data-aos-delay="300" className="flex flex-col">
          <h4 className="text-xl font-playfair font-bold mb-8 text-amber">Install App</h4>
          <p className="text-sm opacity-70 mb-6 font-medium">Available on App Store & Google Play</p>
          <div className="flex gap-3 mb-8">
            <img className="h-10 border border-white/20 rounded-lg hover:border-amber transition-all cursor-pointer" src={appStore} alt="Download on App Store" />
            <img className="h-10 border border-white/20 rounded-lg hover:border-amber transition-all cursor-pointer" src={playStore} alt="Download on Google Play" />
          </div>
          <p className="text-sm opacity-70 mb-4 font-medium">Secured Payment Gateways</p>
          <img className="w-48" src={payImg} alt="Payment Methods" />
        </div>
      </div>

      <div className="mt-20 pt-8 border-t border-white/10 text-center">
        <p className="text-xs opacity-50">&copy; {currentYear} Qat3 Team. Supporting Egyptian Local Brands. All Rights Reserved.</p>
      </div>
    </footer>
  )
}
