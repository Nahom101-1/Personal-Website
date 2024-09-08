import Footer from "../../components/layout/Footer";
import Header from "../../components/Header";
import AboutMe from "../../components/Resume/AboutMe";
import Education from "../../components/Resume/Education";
import WorkExperience from "../../components/Resume/WorkExperience";
import Navbar from "../../components/layout/Navbar";


export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutMe />
      <Education />
      <WorkExperience />
      <Footer />
    </>
  );
}
