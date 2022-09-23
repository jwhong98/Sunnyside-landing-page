import Hero from "./components/Hero/Hero";
import { infoOne, infoTwo } from "./components/InfoSection/data";
import InfoSection from "./components/InfoSection/InfoSection";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";

function App() {
  return (
    <div className="App">
      <>
        <Navbar />
        <Hero />
        <InfoSection {...infoOne} />
        <InfoSection {...infoTwo} />
        <Services />
      </>
    </div>
  );
}

export default App;
