import Hero from "./components/Hero/Hero";
import { infoOne, infoTwo } from "./components/InfoSection/data";
import InfoSection from "./components/InfoSection/InfoSection";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <>
        <Navbar />
        <Hero />
        <InfoSection {...infoOne} />
        <InfoSection {...infoTwo} />
      </>
    </div>
  );
}

export default App;
