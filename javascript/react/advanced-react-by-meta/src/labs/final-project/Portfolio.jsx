import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header.jsx";
import LandingSection from "./components/LandingSection.jsx";
import ProjectsSection from "./components/ProjectsSection.jsx";
import ContactMeSection from "./components/ContactMeSection.jsx";
import Footer from "./components/Footer.jsx";
import { AlertProvider } from "./context/alertContext.jsx";
import Alert from "./components/Alert.jsx";

function Portfolio() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <main>
          <Header />
          <LandingSection />
          <ProjectsSection />
          <ContactMeSection />
          <Footer />
          <Alert />
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default Portfolio;
