// "use client"
import ARHero from "../components/MinimalHero";
import ContactSection from "../components/ContactSection";
import ProjectsSection from "../components/ProjectsSection";

console.log("ARHero " , ARHero)
const Main = () => {

  return (
<>
   <ARHero />
   <ProjectsSection />
   <ContactSection />
   </>
  );
};

export default Main;
