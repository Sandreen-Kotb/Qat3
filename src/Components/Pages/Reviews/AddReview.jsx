import { useState } from 'react'
import { useDispatch } from "react-redux";
import { useUser } from '@clerk/clerk-react';
import { reviewAdded } from '../../../features/reviews/reviewSlice';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddReview = () => {
    const { user } = useUser();
    const dispatch = useDispatch()
    const [reviewText, setReviewText] = useState('');

    const onReviewTextChange = e => setReviewText(e.target.value)

    const onPostBtnClicked = () => {
        if (reviewText) {
            dispatch(
                reviewAdded(reviewText, user.fullName, user.id, user.imageUrl)
            )
            setReviewText('')
        }
    }

    const canPost = Boolean(reviewText);
    const notify = () => toast.success("Thanks for your feedback! 🌟");

    return (
        <div className="max-w-4xl mx-auto">
            <ToastContainer position="bottom-right" />
            <div 
                data-aos="zoom-in"
                className="bg-white rounded-[3rem] shadow-2xl p-10 md:p-16 border border-bg-secondary-color/20 relative"
            >
                {/* Decorative element */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-amber text-main-darker font-black py-2 px-8 rounded-full shadow-lg uppercase tracking-widest text-xs">
                    Share Your Thoughts
                </div>

                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-playfair font-black text-main-darker mb-4">
                        Hello, <span className="text-amber">{user.firstName}!</span>
                    </h2>
                    <p className="text-secondary font-medium">How was your experience with Qat3 products?</p>
                </div>

                <form className="flex flex-col items-center gap-8">
                    <div className="w-full relative group">
                        <textarea 
                            className="w-full h-40 md:h-52 p-8 text-main-darker bg-bg-color rounded-3xl outline-none border-2 border-transparent focus:border-amber/30 focus:bg-white transition-all duration-300 resize-none font-medium leading-relaxed shadow-inner"
                            id="reviewText"
                            name="reviewText"
                            placeholder="Tell us what you think..."
                            value={reviewText}
                            onChange={onReviewTextChange}
                        />
                        <div className="absolute bottom-4 right-6 text-[10px] font-bold text-secondary/40 uppercase tracking-widest pointer-events-none">
                            Your words matter
                        </div>
                    </div>

                    <button 
                        className={`group relative inline-flex items-center justify-center px-12 py-4 font-black transition-all duration-300 rounded-2xl overflow-hidden shadow-xl ${
                            canPost 
                            ? 'bg-main-darker text-white hover:bg-amber hover:text-main-darker transform hover:-translate-y-1 active:scale-95' 
                            : 'bg-bg-secondary-color text-secondary/50 cursor-not-allowed'
                        }`}
                        type="button" 
                        onClick={() => { onPostBtnClicked(); notify(); }} 
                        disabled={!canPost}
                    >
                        <span className="relative z-10">Post Your Review</span>
                        <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AddReview