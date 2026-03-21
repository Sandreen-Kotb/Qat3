import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { addToCart } from '../../../features/cart/cartSlice';
import { useParams, NavLink } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import { FaCheck, FaShoppingCart, FaArrowLeft } from "react-icons/fa";
import { scrollToTop } from "../../../features/main/mainSlice";
import { products } from "../../../assets/data";
import "react-toastify/dist/ReactToastify.css";

export default function SingleProduct() {
    const notify = () => toast.success("Added to cart Successfully 🥳");
    const dispatch = useDispatch();
    const { id } = useParams();
    
    // Find the product based on ID 
    const productItem = products.find(p => p.id.toString() === id);
    
    const [selectedColor, setSelectedColor] = useState("");
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        if (productItem && productItem.color && productItem.color.length > 0) {
            setSelectedColor(productItem.color[0]);
        }
    }, [productItem]);

    if (!productItem) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-bg-color font-cairo">
                <div data-aos="zoom-in" className="text-center p-12 bg-white rounded-[3rem] shadow-xl max-w-lg mx-auto border border-bg-secondary-color/30">
                    <div className="text-6xl mb-6">🏜️</div>
                    <h2 className="text-4xl font-bold text-main-darker mb-4">Product Not Found</h2>
                    <p className="text-secondary mb-8">It seems this item has wandered off into the desert. Let's find you something else!</p>
                    <NavLink to="/shop" className="inline-block bg-amber text-white px-10 py-4 rounded-2xl font-black shadow-lg hover:scale-105 active:scale-95 transition-all">
                        Discover Other Treasures
                    </NavLink>
                </div>
            </div>
        );
    }

    const handleIncrement = () => setQuantity(prev => prev + 1);
    const handleDecrement = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

    return (
        <div className="pb-24">
            <ToastContainer position="bottom-right" />
            
            {/* Header / Breadcrumbs */}
            <div className="bg-bg-color pt-32 pb-12 px-6">
                <div className="container mx-auto">
                    <NavLink to="/shop" className="inline-flex items-center gap-2 text-secondary hover:text-amber font-bold transition-all mb-8">
                        <FaArrowLeft size={14} /> Back to Shop
                    </NavLink>
                    <h2 data-aos='fade-up' className="text-4xl md:text-5xl font-playfair font-black text-main-darker">
                        {productItem.brand} <span className="text-amber">Collection</span>
                    </h2>
                </div>
            </div>

            <div className="container mx-auto px-6 mt-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Image Gallery */}
                    <div data-aos='fade-right' className="rounded-[3rem] overflow-hidden bg-white border border-bg-secondary-color/30 shadow-xl p-12 group">
                        <img 
                            src={productItem.img} 
                            alt={productItem.name} 
                            className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-110" 
                        />
                    </div>

                    {/* Product Details */}
                    <div data-aos='fade-left' className="space-y-10">
                        <div>
                            <span className="text-xs font-bold text-secondary uppercase tracking-[0.3em] mb-4 block">
                                {productItem.category}
                            </span>
                            <h3 className="text-4xl md:text-5xl font-playfair font-black text-main-darker mb-4">
                                {productItem.name}
                            </h3>
                            <div className="flex items-center gap-4">
                                <span className="text-3xl font-black text-amber">{productItem.price} EGP</span>
                                <span className="bg-emerald-100 text-emerald-600 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">In Stock</span>
                            </div>
                        </div>

                        <div className="space-y-6">
                            {/* Color Selection */}
                            <div>
                                <h4 className="text-sm font-bold text-main-darker uppercase tracking-wider mb-4">Select Color</h4>
                                <div className="flex flex-wrap gap-4">
                                    {productItem.color.map((color, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setSelectedColor(color)}
                                            className={`w-12 h-12 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                                                selectedColor === color ? 'border-amber scale-110' : 'border-transparent hover:border-bg-secondary-color'
                                            }`}
                                            title={color}
                                        >
                                            <div 
                                                className="w-8 h-8 rounded-full shadow-inner flex items-center justify-center"
                                                style={{ backgroundColor: color }}
                                            >
                                                {selectedColor === color && <FaCheck size={12} className={color === 'white' ? 'text-black' : 'text-white'} />}
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Quantity & Add to Cart */}
                            <div className="flex flex-wrap items-center gap-6 pt-6">
                                <div className="flex items-center gap-4 bg-bg-color rounded-2xl px-4 py-2 border border-bg-secondary-color/20">
                                    <button 
                                        onClick={handleDecrement}
                                        className="w-10 h-10 flex items-center justify-center rounded-xl bg-white hover:bg-amber hover:text-white transition-all shadow-sm active:scale-95 text-lg font-bold"
                                    >-</button>
                                    <span className="w-8 text-center text-xl font-black text-main-darker">{quantity}</span>
                                    <button 
                                        onClick={handleIncrement}
                                        className="w-10 h-10 flex items-center justify-center rounded-xl bg-white hover:bg-amber hover:text-white transition-all shadow-sm active:scale-95 text-lg font-bold"
                                    >+</button>
                                </div>

                                <button 
                                    className="flex-grow lg:flex-grow-0 h-16 px-12 bg-main-darker text-white font-black rounded-2xl transition-all duration-300 transform hover:bg-amber hover:text-main-darker hover:scale-[1.02] shadow-xl flex items-center justify-center gap-4 active:scale-95"
                                    onClick={() => {
                                        dispatch(addToCart({
                                            id: productItem.id,
                                            price: productItem.price,
                                            amount: quantity,
                                            totalPrice: productItem.price * quantity,
                                            name: productItem.name,
                                            color: [selectedColor], // Store the selected color specifically
                                            img: productItem.img,
                                            text: productItem.text
                                        })); 
                                        notify();
                                    }}
                                >
                                    <FaShoppingCart size={20} />
                                    <span>Add To Cart</span>
                                </button>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="pt-10 border-t border-bg-secondary-color/20">
                            <h4 className="text-xl font-playfair font-black text-main-darker mb-4 text-amber">Product Details</h4>
                            <p className="text-secondary leading-relaxed font-medium text-lg">
                                {productItem.text}
                            </p>
                            
                            <div className="grid grid-cols-2 gap-8 mt-8">
                                <div className="p-6 rounded-3xl bg-bg-color/50 border border-bg-secondary-color/10">
                                    <h5 className="text-[10px] font-black text-secondary uppercase tracking-widest mb-1">Shipping info</h5>
                                    <p className="text-main-darker font-bold">Free local delivery</p>
                                </div>
                                <div className="p-6 rounded-3xl bg-bg-color/50 border border-bg-secondary-color/10">
                                    <h5 className="text-[10px] font-black text-secondary uppercase tracking-widest mb-1">Return policy</h5>
                                    <p className="text-main-darker font-bold">30-day guarantee</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Related Products */}
            <div className="container mx-auto px-6 mt-32">
                <div className="flex justify-between items-end mb-12">
                    <h3 data-aos="fade-right" className="text-3xl md:text-4xl font-playfair font-black text-main-darker">
                        Related <span className="text-amber">Products</span>
                    </h3>
                    <NavLink to="/shop" className="text-amber font-bold hover:underline mb-1">View All &rarr;</NavLink>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {products
                        .filter(p => p.category === productItem.category && p.id !== productItem.id)
                        .slice(0, 4)
                        .map((relProduct, idx) => (
                            <div 
                                key={idx} 
                                data-aos="fade-up" 
                                data-aos-delay={idx * 100}
                                className="group cursor-pointer"
                                onClick={() => {
                                    dispatch(scrollToTop());
                                }}
                            >
                                <NavLink to={`/single-product/${relProduct.id}`}>
                                    <div className="aspect-square rounded-[2rem] bg-white border border-bg-secondary-color/30 p-6 mb-4 shadow-sm group-hover:shadow-lg transition-all duration-300">
                                        <img src={relProduct.img} alt={relProduct.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                                    </div>
                                    <h5 className="font-playfair font-black text-main-darker group-hover:text-amber transition-colors truncate">{relProduct.name}</h5>
                                    <p className="text-amber font-bold">{relProduct.price} EGP</p>
                                </NavLink>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
