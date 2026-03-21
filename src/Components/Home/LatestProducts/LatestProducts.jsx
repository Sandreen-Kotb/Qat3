import { latestProducts } from "../../../assets/data";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { singleProduct } from "../../../features/products/productSlice";

export const LatestProducts = () => {
    const dispatch = useDispatch();

    return (
        <div className="py-24 bg-white font-cairo">
            <h2 data-aos='fade-up' className="main-title mb-16 px-4">Latest Arrivals</h2>
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {latestProducts.map((product, index) => {
                        return (
                            <NavLink 
                                to={`/single-product/${product.id}`}
                                key={index} 
                                onClick={() => dispatch(singleProduct(product.id))}
                                data-aos='fade-up' 
                                data-aos-delay={index * 100}
                                className="group relative bg-white border border-bg-secondary-color/30 rounded-[2.5rem] p-6 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
                            >
                                {/* Badge */}
                                {index % 3 === 0 && (
                                    <span className="absolute top-6 left-6 z-10 bg-amber text-main-darker text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                                        Nouveau
                                    </span>
                                )}

                                <div className="aspect-square mb-6 overflow-hidden rounded-[2rem] bg-bg-color flex items-center justify-center p-4">
                                    <img 
                                        className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110" 
                                        src={product.img} 
                                        alt={product.name} 
                                    />
                                </div>

                                <div className="space-y-3">
                                    <span className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em]" >{product.brand}</span>
                                    <h5 className="text-xl font-bold text-main-darker group-hover:text-amber transition-colors duration-300 truncate">
                                        {product.name}
                                    </h5>
                                    
                                    <div className="flex gap-2">
                                        {product.color.map((color, idx) => (
                                            <div 
                                                key={idx} 
                                                className="w-3 h-3 rounded-full border border-black/10 shadow-inner" 
                                                style={{ backgroundColor: color }}
                                                title={color}
                                            />
                                        ))}
                                    </div>

                                    <div className="pt-2 flex items-center justify-between">
                                        <h4 className="text-xl font-black text-main-darker">
                                            {product.price} <span className="text-xs font-medium text-secondary">EGP</span>
                                        </h4>
                                        <div className="w-10 h-10 rounded-full bg-main-darker text-white flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300 hover:bg-amber hover:text-main-darker shadow-lg">
                                            <span className="text-xl">+</span>
                                        </div>
                                    </div>
                                </div>
                            </NavLink>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
