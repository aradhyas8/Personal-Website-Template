import "./App.css";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Socials from "./components/Socials/Socials";
import ExperienceMob from "./components/Experience/ExperienceMob";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import NavMobile from "./components/Navbar/NavMobile";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
function App() {
  return (
    <>
      <Navbar />
      <NavMobile />
      <Header />
      <Socials />
      <About />
      <ExperienceMob />
      <Projects />
      <Contact />
      <Footer />

    </>
  );
}

export default App;
