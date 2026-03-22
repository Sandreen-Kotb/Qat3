import { CiCircleRemove } from "react-icons/ci";
import { useUser } from "@clerk/clerk-react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, incrementQuantity, decrementQuantity } from "../../../features/cart/cartSlice";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

export default function Cart() {
  const { user } = useUser();

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.cart);

  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const shippingPrice = 50;

  const discount = "10 %";

  return (
    <div className="pb-24">
      <div className="bg-bg-color pt-32 pb-20">
        <h2 className="text-center text-5xl md:text-6xl font-playfair font-black text-main-darker mb-4">
          Your <span className="text-amber">Cart</span>
        </h2>
        <p className="text-center text-secondary font-medium text-lg">
          Review your items and proceed to a secure checkout.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16">
        {cart.length > 0 ? (
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Cart Items Table */}
            <div className="lg:w-2/3">
              <div className="overflow-x-auto rounded-3xl border border-bg-secondary-color/30 shadow-sm">
                <table className="w-full text-left bg-white border-collapse">
                  <thead>
                    <tr className="bg-bg-color text-main-darker border-b border-bg-secondary-color/30">
                      <th className="px-6 py-5 font-bold uppercase tracking-wider text-xs">Product</th>
                      <th className="px-6 py-5 font-bold uppercase tracking-wider text-xs">Name</th>
                      <th className="px-6 py-5 font-bold uppercase tracking-wider text-xs">Price</th>
                      <th className="px-6 py-5 font-bold uppercase tracking-wider text-xs">Quantity</th>
                      <th className="px-6 py-5 font-bold uppercase tracking-wider text-xs">Subtotal</th>
                      <th className="px-6 py-5 font-bold uppercase tracking-wider text-xs text-center">Remove</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-bg-secondary-color/20">
                    {cart.map((item, index) => (
                      <tr key={index} className="group hover:bg-bg-color/50 transition-colors">
                        <td className="px-6 py-6">
                          <img
                            className="h-20 w-20 object-contain rounded-2xl bg-bg-color border border-bg-secondary-color/20 p-2 shadow-sm"
                            src={item.img}
                            alt={item.name}
                          />
                        </td>
                        <td className="px-6 py-6">
                          <div className="font-playfair font-black text-main-darker">{item.name}</div>
                          <div className="text-[10px] text-secondary font-bold uppercase tracking-widest mt-1">Ref: {item.id}</div>
                        </td>
                        <td className="px-6 py-6 font-bold text-main-darker">{item.price} <span className="text-[10px] text-secondary">EGP</span></td>
                        <td className="px-6 py-6 font-bold">
                          <div className="flex items-center gap-4 bg-bg-color w-fit rounded-full px-2 py-1 border border-bg-secondary-color/20">
                            <button 
                              onClick={() => dispatch(decrementQuantity(item))}
                              className="w-8 h-8 flex items-center justify-center rounded-full bg-white hover:bg-amber hover:text-white transition-all shadow-sm active:scale-95"
                            >-</button>
                            <span className="w-6 text-center text-main-darker font-black">{item.amount}</span>
                            <button 
                              onClick={() => dispatch(incrementQuantity(item))}
                              className="w-8 h-8 flex items-center justify-center rounded-full bg-white hover:bg-amber hover:text-white transition-all shadow-sm active:scale-95"
                            >+</button>
                          </div>
                        </td>
                        <td className="px-6 py-6 font-black text-main-darker">
                          {(item.totalPrice).toFixed(2)} <span className="text-[10px] text-secondary">EGP</span>
                        </td>
                        <td className="px-6 py-6 text-center">
                          <button 
                            onClick={() => dispatch(removeFromCart(item))}
                            className="text-secondary hover:text-red-500 transition-colors p-2 rounded-full hover:bg-red-50"
                            aria-label="Remove item"
                          >
                            <CiCircleRemove size={28} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-[2.5rem] border border-bg-secondary-color/30 shadow-xl p-8 sticky top-32">
                <h3 className="text-2xl font-playfair font-black text-main-darker mb-8 border-b border-bg-secondary-color/20 pb-4">
                  Order <span className="text-amber">Summary</span>
                </h3>
                
                <div className="space-y-6">
                  <div className="flex justify-between items-center text-secondary font-medium">
                    <span>Items Count</span>
                    <span className="text-main-darker font-bold">{totalAmount}</span>
                  </div>
                  <div className="flex justify-between items-center text-secondary font-medium">
                    <span>Subtotal</span>
                    <span className="text-main-darker font-bold">{totalPrice.toFixed(2)} EGP</span>
                  </div>
                  <div className="flex justify-between items-center text-secondary font-medium">
                    <span>Shipping Fee</span>
                    <span className="text-main-darker font-bold">{shippingPrice.toFixed(2)} EGP</span>
                  </div>
                  <div className="flex justify-between items-center text-secondary font-medium">
                    <span>Discount</span>
                    <span className="text-emerald-600 font-bold">-{discount}</span>
                  </div>
                  
                  <div className="pt-6 border-t border-bg-secondary-color/20 flex justify-between items-center">
                    <span className="text-xl font-playfair font-black text-main-darker">Total</span>
                    <span className="text-2xl font-black text-amber">
                      {((totalPrice + shippingPrice) * 0.9).toFixed(2)} <span className="text-xs">EGP</span>
                    </span>
                  </div>

                  <button
                    type="button"
                    className="w-full h-16 bg-main-darker text-white font-black rounded-2xl transition-all duration-300 transform hover:bg-amber hover:text-main-darker hover:scale-[1.02] shadow-lg active:scale-95 mt-4"
                  >
                    Proceed To Checkout
                  </button>
                  
                  <NavLink
                    to="/shop"
                    className="flex items-center justify-center gap-2 text-secondary hover:text-amber font-bold transition-all mt-4"
                  >
                     <span>&larr;</span> Continue Shopping
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-lg mx-auto py-20 px-12 bg-white rounded-[3rem] shadow-2xl text-center border border-bg-secondary-color/20" data-aos="zoom-in">
            <div className="w-24 h-24 bg-bg-color rounded-full flex items-center justify-center mx-auto mb-8">
                <FaShoppingCart size={40} className="text-secondary opacity-30" />
            </div>
            <h3 className="text-3xl font-playfair font-black text-main-darker mb-4">Your Cart Is Empty</h3>
            <p className="text-secondary font-medium mb-10 leading-relaxed">
              Looks like you haven't added anything to your cart yet. Explore our unique products!
            </p>
            <NavLink
              className="inline-block bg-amber text-main-darker font-black px-10 py-4 rounded-2xl shadow-lg transition-all duration-300 hover:bg-main-darker hover:text-white transform hover:scale-105"
              to="/shop"
            >
              Start Shopping
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );

}
