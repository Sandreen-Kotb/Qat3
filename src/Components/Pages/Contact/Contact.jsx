import { FaMap, FaPhoneAlt, FaClock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import { Team } from "../../../assets/data";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs
            .sendForm("service_b0sz8kr", "template_sto6jpa", form.current, {
                publicKey: "1PczDjoXIqfE2Anou",
            })
            .then(
                () => {
                    toast.success("Message sent successfully! 🚀");
                    e.target.reset();
                    setIsSubmitting(false);
                },
                (error) => {
                    toast.error("Failed to send message. Please try again.");
                    setIsSubmitting(false);
                    return error;
                }
            );
    };

    const contactDetails = [
        { icon: <FaMap />, label: "Location", value: "12 Government Building Street", color: "text-amber" },
        { icon: <MdEmail />, label: "Email", value: "contactus@qat3.com", color: "text-main" },
        { icon: <FaPhoneAlt />, label: "Call Us", value: "+45 332 26 67", color: "text-emerald-500" },
        { icon: <FaClock />, label: "Hours", value: "Mon - Sat: 09:00 - 16:00", color: "text-amber" },
    ];

    return (
        <div className="pb-24">
            <ToastContainer position="bottom-right" />
            
            <div className="bg-bg-color pt-32 pb-20 px-6">
                <h2 data-aos="fade-up" className="text-center text-5xl md:text-6xl font-playfair font-black text-main-darker mb-4">
                    Get In <span className="text-amber">Touch</span>
                </h2>
                <p data-aos="fade-up" data-aos-delay="100" className="text-center text-secondary font-medium text-lg max-w-2xl mx-auto">
                    We'd love to hear from you. Whether you have a question about our products or just want to say hello.
                </p>
            </div>

            <div className="container mx-auto px-6 mt-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
                    {/* Contact Info Card */}
                    <div data-aos="fade-right" className="bg-white p-10 md:p-16 rounded-[3rem] shadow-xl border border-bg-secondary-color/20 flex flex-col">
                        <span className="text-xs font-bold text-secondary uppercase tracking-[0.3em] mb-6 block">Contact Info</span>
                        <h3 className="text-3xl md:text-4xl font-playfair font-black text-main-darker mb-10 leading-tight">
                            Visit Our Office Or Contact Us Directly
                        </h3>
                        
                        <div className="space-y-8 flex-grow">
                            {contactDetails.map((detail, idx) => (
                                <div key={idx} className="flex items-start gap-6 group">
                                    <div className={`w-12 h-12 rounded-2xl bg-bg-color flex items-center justify-center text-xl transition-all duration-300 group-hover:scale-110 group-hover:bg-amber/10 ${detail.color}`}>
                                        {detail.icon}
                                    </div>
                                    <div>
                                        <h5 className="text-xs font-bold text-secondary uppercase tracking-widest mb-1">{detail.label}</h5>
                                        <p className="text-main-darker font-black text-lg">{detail.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Interactive Map */}
                    <div data-aos="fade-left" className="rounded-[3rem] overflow-hidden shadow-xl border-4 border-white h-[400px] lg:h-auto">
                        <iframe
                            className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                            src="https://maps.google.com/maps?width=500&amp;height=400&amp;hl=en&amp;q=Damnhour%20sports%20stadium+(QAT3)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                            title="Office Location"
                        ></iframe>
                    </div>
                </div>

                {/* Contact Form & Team Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
                    {/* Message Form */}
                    <div data-aos="fade-up" className="lg:col-span-2 bg-main-darker p-10 md:p-16 rounded-[3rem] shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-amber/5 rounded-full -mr-32 -mt-32"></div>
                        
                        <form ref={form} onSubmit={sendEmail} className="relative z-10 space-y-8">
                            <div>
                                <span className="text-xs font-bold text-amber/60 uppercase tracking-[0.3em] mb-4 block text-center lg:text-left">Send A Message</span>
                                <h3 className="text-3xl font-playfair font-black text-white text-center lg:text-left">We're Ready for Your Questions</h3>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input 
                                    className="w-full h-16 px-8 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 outline-none focus:bg-white/10 focus:border-amber/40 transition-all font-medium"
                                    type="text" 
                                    name="from_name" 
                                    placeholder="Full Name" 
                                    required
                                />
                                <input 
                                    className="w-full h-16 px-8 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 outline-none focus:bg-white/10 focus:border-amber/40 transition-all font-medium"
                                    type="email" 
                                    name="user_email" 
                                    placeholder="Email Address" 
                                    required
                                />
                            </div>
                            <textarea 
                                className="w-full h-48 p-8 rounded-3xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 outline-none focus:bg-white/10 focus:border-amber/40 transition-all font-medium resize-none leading-relaxed"
                                name="message" 
                                placeholder="Write your message here..."
                                required
                            ></textarea>
                            
                            <button 
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full lg:w-fit px-12 h-16 bg-amber text-main-darker font-black rounded-2xl shadow-xl transition-all duration-300 transform hover:scale-[1.05] active:scale-95 flex items-center justify-center gap-4 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-amber-dark'}`}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                                <span>&rarr;</span>
                            </button>
                        </form>
                    </div>

                    {/* Team Support */}
                    <div data-aos="fade-left" className="bg-white p-10 rounded-[3rem] shadow-xl border border-bg-secondary-color/20 space-y-10">
                        <h4 className="text-xl font-playfair font-black text-main-darker border-l-4 border-amber pl-4">Our Tech Team</h4>
                        
                        <div className="space-y-8">
                            {Team.map((member, index) => (
                                <div key={index} className="flex items-center gap-4 p-4 rounded-3xl hover:bg-bg-color transition-colors group">
                                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-amber/20 p-0.5 group-hover:border-amber transition-colors">
                                        <img src={member.img} alt={member.name} className="w-full h-full object-cover rounded-full" />
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-main-darker">{member.name}</h5>
                                        <p className="text-[10px] text-secondary font-bold uppercase tracking-widest mb-1">Frontend Developer</p>
                                        <div className="flex gap-3 text-secondary">
                                            <a href={`tel:${member.phone}`} className="hover:text-amber"><FaPhoneAlt size={12} /></a>
                                            <a href={`mailto:${member.email}`} className="hover:text-amber"><MdEmail size={14} /></a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        <div className="pt-6 border-t border-bg-secondary-color/20">
                            <p className="text-sm font-medium text-secondary text-center">
                                We usually respond within <span className="text-main-darker font-bold">24 hours</span>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
