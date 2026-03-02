import Hero from "../components/Hero";
import Businesses from "../components/Businesses";
import Locations from "../components/Locations";
import Contact from "../components/Contact";
import { Helmet } from "react-helmet-async";

function HomePage() {
  return (
    <main>
      <Helmet>
        <title>Bageshwori Group | Premier Business Group in Sudurpashchim</title>
        <meta name="description" content="Discover Bageshwori Group's diverse businesses in electronics, automotive, and reconditioning across Dhangadhi and Attariya. Your trusted partner for quality solutions in Western Nepal." />
        <link rel="canonical" href="https://bageshworigroup.com.np/" />
      </Helmet>
      <Hero />
      <Businesses />
      <Locations />
      <Contact />
    </main>
  );
}

export default HomePage;
