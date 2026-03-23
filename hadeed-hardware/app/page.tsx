import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Brands from "./components/Brands";
import WhyChooseUs from "./components/WhyChooseUs";
import BlogPreview from "./components/BlogPreview";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Brands />
      <Products />
      <WhyChooseUs />
      <BlogPreview />
      <Contact />
      <Footer />
      <FloatingActions />
    </>
  );
}
