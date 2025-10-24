import ARHero from "../components/MinimalHero";
import ContactSection from "../components/ContactSection";
import ProjectsSection from "../components/ProjectsSection";
import Navigation from "../components/Navigation";


const Main = () => {

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">

        <Navigation />
    <main>
        <ARHero />
        <ProjectsSection />
        <ContactSection />
    </main>
   </div>
  );
};

export default Main;
