import { useSelector } from "react-redux";
import AddReview from "./AddReview";

export default function Reviews() {
  const reviews = useSelector((state) => state.reviews.allReviews);

  return (
    <div className="pb-24">
      <div className="bg-bg-color pt-32 pb-20">
        <h2 data-aos="fade-up" className="text-center text-5xl md:text-6xl font-playfair font-black text-main-darker mb-4">
          Community <span className="text-amber">Reviews</span>
        </h2>
        <p data-aos="fade-up" data-aos-delay="100" className="text-center text-secondary font-medium text-lg max-w-2xl mx-auto px-6">
          Hear from our happy customers and share your own experience with our local products.
        </p>
      </div>

      <div className="container mx-auto px-6 -mt-10 relative z-10">
        <AddReview />
      </div>

      <div className="container mx-auto px-6 mt-24">
        <h3 data-aos="fade-right" className="text-3xl font-playfair font-black text-main-darker mb-12 border-l-4 border-amber pl-6">
          Recent Feedback
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              data-aos='fade-up' 
              data-aos-delay={(index % 3) * 100}
              className="group bg-white border border-bg-secondary-color/30 p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <img
                    className="w-14 h-14 rounded-full object-cover border-2 border-amber/20 p-0.5 bg-white"
                    src={review.imageUrl || `https://ui-avatars.com/api/?name=${review.uerFullName}&background=random`}
                    alt={review.uerFullName}
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 border-2 border-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-playfair font-black text-main-darker text-lg">{review.uerFullName}</h4>
                  <p className="text-[10px] font-bold text-secondary uppercase tracking-widest">{review.date}</p>
                </div>
              </div>

              <div className="flex-grow">
                <p className="text-secondary leading-relaxed font-medium italic mb-6">
                   "{review.reviewText}"
                </p>
              </div>

              <div className="pt-6 border-t border-bg-secondary-color/20 flex items-center gap-6">
                <button
                  type="button"
                  className="text-xs font-bold uppercase tracking-widest text-main hover:text-amber transition-colors flex items-center gap-2"
                >
                  <span className="text-lg">↑</span> Agree
                </button>
                <button
                  type="button"
                  className="text-xs font-bold uppercase tracking-widest text-secondary hover:text-red-400 transition-colors flex items-center gap-2"
                >
                  <span className="text-lg">↓</span> Disagree
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
