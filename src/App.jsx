import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Businesses from "./components/Businesses"
import Locations from "./components/Locations"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

const App = () => (
  <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-white antialiased overflow-x-hidden">
    <Navbar />
    <main>
      <Hero />
      <Businesses />
      <Locations />
      <Contact />
    </main>
    <Footer />
  </div>
)

export default App