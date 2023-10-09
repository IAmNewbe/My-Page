import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./containers/Footer";
import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Portofolio from "./components/Portofolio";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <About />
      <Portofolio />
      <Skills />
      <Contact />
      <Footer />
      {/* <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/teams" element={<Team />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/events" element={<OurEvent />} />
          <Route path="/news" element={<News />} />
        </Routes>
        <Footer />
      </Router> */}
    </div>
  );
};

export default App;
