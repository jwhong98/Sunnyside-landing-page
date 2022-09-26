import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import { infoOne, infoTwo } from "./components/InfoSection/data";
import InfoSection from "./components/InfoSection/InfoSection";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  return (
    <div className="App">
      <>
        <Navbar />
        <Hero />
        <InfoSection {...infoOne} />
        <InfoSection {...infoTwo} />
        <Services />
        <Testimonials />
        <Footer />
      </>
    </div>
  );
}

export default App;
