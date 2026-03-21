import { useState } from 'react';
import './Navbar.css';
import { FaSearch, FaShoppingCart, FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { NavLink, useNavigate } from 'react-router-dom';
import { PiSignOutBold } from "react-icons/pi";
import { useAuth, UserButton } from '@clerk/clerk-react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { scrollToTop } from '../../../features/main/mainSlice';
import { filterProduct } from '../../../features/products/productSlice';
import { logos } from '../../../assets/data';

const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { signOut } = useAuth();
    const totalAmount = useSelector((state) => state.cart.totalAmount);

    const [scrolled, setScrolled] = useState(typeof window !== 'undefined' ? window.scrollY > 20 : false);
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isSearchOpen, setSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            dispatch(filterProduct(searchQuery));
            navigate("/shop");
            setSearchOpen(false);
            setSearchQuery("");
        }
    };

    return (
        <div className={`header fixed top-0 left-0 w-full transition-all duration-300 z-50 font-cairo ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-white py-5'}`} id="header">
            <nav className="nav-container max-w-7xl mx-auto flex justify-between items-center px-[20px]">
                <NavLink to={"/"} onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} >
                    <img src={logos.logoThree} className="nav-logo h-12 md:h-14 transition-all duration-300" alt="Logo" />
                </NavLink>

                <div className={`nav-menu ${isMenuOpen ? 'show-menu top-0' : ''}`} id="nav-menu">
                    <ul className="nav-list flex gap-x-8 text-center font-bold">
                        {['/', '/about', '/shop', '/reviews', '/contact'].map((path) => (
                            <li key={path} className="nav-item">
                                <NavLink 
                                    onClick={() => { setMenuOpen(false); window.scrollTo({top: 0, behavior: 'smooth'}); }} 
                                    to={path} 
                                    className={({ isActive }) => isActive ? "nav-link text-amber" : "nav-link text-main-darker hover:text-amber transition-colors"}
                                >
                                    {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    <div className="nav-close absolute top-5 right-6 text-2xl cursor-pointer" id="nav-close" onClick={() => setMenuOpen(false)}>
                        <AiOutlineClose />
                    </div>
                </div>

                <div className="nav-action flex items-center gap-x-6">
                    <div className="relative group hidden md:block">
                        <FaSearch className="text-main-darker cursor-pointer hover:text-amber transition-colors" onClick={() => setSearchOpen(true)} />
                    </div>
                    
                    <NavLink to={"/cart"} className="relative group">
                        <FaShoppingCart className="text-xl text-main-darker group-hover:text-amber transition-colors" />
                        {totalAmount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-amber text-main-darker text-[10px] font-black px-1.5 py-0.5 rounded-full min-w-[18px] text-center shadow-md">
                                {totalAmount}
                            </span>
                        )}
                    </NavLink>

                    <div className="flex items-center gap-4 border-l border-bg-secondary-color pl-6">
                        <UserButton afterSignOutUrl="/bye" />
                        <button onClick={() => signOut()} className="text-red-500 hover:text-red-700 transition-colors text-xl" title="Sign Out">
                            <PiSignOutBold />
                        </button>
                    </div>

                    <div id="nav-toggle" onClick={() => setMenuOpen(true)} className="md:hidden cursor-pointer text-2xl">
                        <FaBars />
                    </div>
                </div>
            </nav>

            {/* Search Overlay */}
            <div className={`search-overlay fixed inset-0 bg-main-darker/95 backdrop-blur-sm transition-all duration-500 flex items-center justify-center p-6 ${isSearchOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <div className="w-full max-w-2xl transform transition-all duration-500 translate-y-0">
                    <form onSubmit={handleSearchSubmit} className="relative">
                        <input 
                            type="text" 
                            placeholder="Search local products..." 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-transparent border-b-2 border-amber py-4 text-3xl md:text-5xl text-white font-bold outline-none placeholder:text-white/20"
                            autoFocus={isSearchOpen}
                        />
                        <button type="submit" className="absolute right-0 bottom-4 text-amber text-3xl hover:scale-110 transition-transform">
                            <FaSearch />
                        </button>
                    </form>
                    <p className="text-white/40 mt-6 text-sm uppercase tracking-widest font-bold text-center">Press Enter to Search</p>
                </div>
                <button onClick={() => setSearchOpen(false)} className="absolute top-10 right-10 text-white text-4xl hover:rotate-90 transition-transform duration-300">
                    <AiOutlineClose />
                </button>
            </div>
        </div>
    );
};

export default Navbar;