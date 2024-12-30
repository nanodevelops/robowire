import Navbar from "../../components/Navbar/Navbar";
import AboutSection from "../../sections/AboutSection/AboutSection";
import ProjectsSection from "../../sections/ProjectsSection/Projects";
import ContactSection from "../../sections/ContactsSection/ContactsSection";
import Footer from "../../components/Footer/Footer";

import "./Home.scss";

const Home = () => {
  return (
    <div className="homepage">
      <Navbar />
      <main>
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
