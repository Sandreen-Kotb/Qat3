import { FaCircle } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa"
import { useDispatch, useSelector } from 'react-redux';
import { filterProduct, singleProduct } from "../../../features/products/productSlice";
import { NavLink } from "react-router-dom";
import { addToCart } from "../../../features/cart/cartSlice";
import { scrollToTop } from "../../../features/main/mainSlice";
import { categories, products } from "../../../assets/data";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Shop() {
    const notify = () => toast.success("Added to cart Successfully 🥳");
    const dispatch = useDispatch();
    const filterOn = useSelector((state) => state.products.filterOn);
    const filteredProducts = useSelector((state) => state.products.filteredProducts);
    const error = useSelector((state) => state.products.error);

    return (
        <div className="pb-24 font-cairo">
            <div className="bg-bg-color pt-32 pb-20">
                <h2 data-aos="fade-up" className="text-center text-5xl md:text-6xl font-bold text-main-darker mb-4">
                    Our <span className="text-amber">Shop</span>
                </h2>
                <p data-aos="fade-up" data-aos-delay="100" className="text-center text-secondary font-medium text-lg max-w-2xl mx-auto px-6">
                    Discover our curated collection of authentic Egyptian products, crafted with passion and tradition.
                </p>
            </div>

            <div className='flex items-center justify-center flex-wrap gap-4 py-12 px-6'>
                {categories.map((cat, index) => (
                    <div key={index} data-aos='zoom-in' data-aos-delay={index * 50}>
                        <button 
                            onClick={() => dispatch(filterProduct(cat))} 
                            className={`px-8 py-3 rounded-full font-bold transition-all duration-300 shadow-sm hover:shadow-md border border-bg-secondary-color bg-white text-main-darker hover:border-amber hover:bg-amber hover:text-white`}
                        >
                            {cat}
                        </button>
                    </div>
                ))}
            </div>

            <div className="container mx-auto px-6">
                {error && (
                    <div className="text-center py-20 bg-white rounded-[3rem] border border-dashed border-secondary/20 max-w-2xl mx-auto mb-12">
                        <div className="text-6xl mb-6">🔍</div>
                        <h3 className="text-2xl font-bold text-main-darker mb-4">No results found</h3>
                        <p className="text-secondary mb-8">We couldn't find anything matching your search. Try a different category or clear filters.</p>
                        <button 
                            onClick={() => dispatch(filterProduct("all categories"))}
                            className="bg-main-darker text-white px-8 py-3 rounded-xl font-bold hover:bg-amber hover:text-main-darker transition-colors"
                        >
                            Clear All Filters
                        </button>
                    </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {(filterOn && error === false ? filteredProducts : products).map((product, index) => (
                        <div 
                            key={index} 
                            data-aos='fade-up' 
                            data-aos-delay={(index % 4) * 100}
                            className="group relative bg-white border border-bg-secondary-color/30 rounded-[2.5rem] p-6 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
                        >
                            <NavLink 
                                onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} 
                                to={`/single-product/${product.id}`}
                                className="block"
                            >
                                <div onClick={() => dispatch(singleProduct(product.id))}>
                                    <div className="aspect-square mb-6 overflow-hidden rounded-[2rem] bg-bg-color flex items-center justify-center p-4">
                                        <img 
                                            className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110" 
                                            src={product.img} 
                                            alt={product.name} 
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <span className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em]">{product.brand}</span>
                                        <h5 className="text-xl font-bold text-main-darker group-hover:text-amber transition-colors duration-300 truncate">
                                            {product.name}
                                        </h5>
                                        <div className="flex gap-2">
                                            {product.color.map((color, idx) => (
                                                <div 
                                                    key={idx} 
                                                    className="w-3 h-3 rounded-full border border-black/10 shadow-inner" 
                                                    style={{ backgroundColor: color }}
                                                />
                                            ))}
                                        </div>
                                        <h4 className="text-xl font-black text-main-darker pt-2">
                                            {product.price} <span className="text-xs font-medium text-secondary">EGP</span>
                                        </h4>
                                    </div>
                                </div>
                            </NavLink>
                            <button
                                onClick={() => {
                                    dispatch(addToCart({
                                        id: product.id,
                                        price: product.price,
                                        amount: 1,
                                        totalPrice: product.price,
                                        name: product.name,
                                        color: product.color,
                                        img: product.img,
                                        text: product.text
                                    })); 
                                    notify();
                                }} 
                                className="absolute right-8 bottom-8 w-12 h-12 bg-main-darker text-white rounded-full flex items-center justify-center transition-all duration-300 hover:bg-amber hover:text-main-darker hover:scale-110 shadow-lg z-10"
                                aria-label="Add to cart"
                            >
                                <FaShoppingCart size={20} />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <ToastContainer position="bottom-right" />
        </div>
    )
}

