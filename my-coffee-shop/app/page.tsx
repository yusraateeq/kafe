import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Coffee from "./Components/Coffee";
import Special from "./Components/Special";
import Product from "./Components/Product";
import Productlist from "./Components/Productlist";
import Testimonial from "./Components/Testimonial";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Header/>
      <Hero/>
      <About/>
      <Coffee/>
      <Special/>
      <Product/>
      <Productlist/>
      <Testimonial/>
      <Footer/>
    </div>
  );
}
