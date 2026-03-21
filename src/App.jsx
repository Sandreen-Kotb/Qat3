import Home from "./Components/Home/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import Register from "./Components/AuthPages/Register/Register";
import Login from "./Components/AuthPages/Login/Login";
import About from "./Components/Pages/About/About";
import Shop from "./Components/Pages/Shop/Shop";
import Reviews from "./Components/Pages/Reviews/Reviews";
import Contact from "./Components/Pages/Contact/Contact";
import Cart from "./Components/Pages/Cart/Cart";
import Navbar from "./Components/Home/Navbar/Navbar";
import Footer from "./Components/Home/Footer/Footer";
import Newsletters from "./Components/Home/Newsletters/Newsletters";
import SingleProduct from "./Components/Pages/SingleProduct/SingleProduct"
import IntroPage from "./Components/AuthPages/IntroPage/IntroPage"
import Bye from "./Components/AuthPages/Bye/Bye";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import ScrollButton from "./Components/Home/ScrollButton/ScrollButton";
import { SignedIn, SignedOut, useAuth } from "@clerk/clerk-react";

export default function App() {
  const { isLoaded } = useAuth();

  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: 'ease-in-out',
      mirror: false,
      once: true,
    })
  }, []);

  if (!isLoaded) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-bg-color">
        <div className="w-16 h-16 border-4 border-amber border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-color selection:bg-amber/30 selection:text-main-darker">
      <SignedOut>
        <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route path="/sign-up/*" element={<Register />} />
          <Route path="/sign-in/*" element={<Login />} />
          <Route path="/bye" element={<Bye />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </SignedOut>

      <SignedIn>
        <Navbar />
        <main className="pt-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/single-product/:id" element={<SingleProduct />} />
            <Route path="/bye" element={<Bye />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Newsletters />
        <Footer />
        <ScrollButton />
      </SignedIn>
    </div>
  );
}
