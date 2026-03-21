import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollButton = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisible = () => {
            const scrolled = document.documentElement.scrollTop;
            if (scrolled > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisible, { passive: true });
        return () => window.removeEventListener('scroll', toggleVisible);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 w-8 h-8 md:w-10 md:h-10 lg:w-14 lg:h-14 bg-amber text-main-darker rounded-full shadow-2xl flex items-center justify-center transition-all duration-500 z-[100] transform hover:scale-110 active:scale-95 ${visible ? 'translate-y-0 opacity-100 ring-4 ring-amber/20' : 'translate-y-24 opacity-0 pointer-events-none'
                }`}
            aria-label="Scroll to top"
        >
            <FaArrowUp size={20} />
        </button>
    );
};

export default ScrollButton;