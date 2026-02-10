import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import BranchPage from "./components/BranchPage";

const App = () => (
  <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-white antialiased overflow-x-hidden">
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/branch/:slug" element={<BranchPage />} />
    </Routes>
    <Footer />
  </div>
);

export default App;