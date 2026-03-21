import "./Features.css";
import f1 from "../../../assets/imgs/f1.png";
import f2 from "../../../assets/imgs/f2.png";
import f3 from "../../../assets/imgs/f3.png";
import f4 from "../../../assets/imgs/f4.png";
import f5 from "../../../assets/imgs/f5.png";
import f6 from "../../../assets/imgs/f6.png";

const featureData = [
  { img: f1, title: "Online Order", bg: "bg-cyan-50", textBg: "bg-cyan-100", textColor: "text-cyan-700" },
  { img: f2, title: "Save Time", bg: "bg-rose-50", textBg: "bg-rose-100", textColor: "text-rose-700" },
  { img: f3, title: "Save Money", bg: "bg-emerald-50", textBg: "bg-emerald-100", textColor: "text-emerald-700" },
  { img: f4, title: "Promotions", bg: "bg-sky-50", textBg: "bg-sky-100", textColor: "text-sky-700" },
  { img: f5, title: "Happy Sell", bg: "bg-indigo-50", textBg: "bg-indigo-100", textColor: "text-indigo-700" },
  { img: f6, title: "Support", bg: "bg-amber-50", textBg: "bg-amber-100", textColor: "text-amber-700" },
];

const Features = () => {
  return (
    <div className="py-20 bg-white">
      <h2 data-aos='fade-up' className="main-title mb-16">Our Features</h2>
      <div className="container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 px-4">
        {featureData.map((feature, idx) => (
          <div 
            key={idx}
            data-aos='fade-up' 
            data-aos-delay={idx * 100}
            className={`group p-6 rounded-2xl border border-transparent hover:border-amber/20 hover:shadow-xl transition-all duration-500 flex flex-col items-center justify-center ${feature.bg}`}
          >
            <div className="relative mb-6 transform group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
              <img src={feature.img} alt={feature.title} className="w-20 h-20 object-contain" />
            </div>
            <h6 className={`px-4 py-1.5 rounded-full text-sm font-bold tracking-wide transition-colors duration-300 ${feature.textBg} ${feature.textColor} group-hover:bg-amber group-hover:text-white`}>
              {feature.title}
            </h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
