import FormLogin from "./components/FormLogin";
import FormRegister from "./components/FormRegister";
import HeroSection from "./pages/HeroSection";
import MenuSection from "./pages/MenuSection";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="coffee-pasti">
      <Router>
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/register" element={<FormRegister />} />
          <Route path="/login" element={<FormLogin />} />
          <Route path="/menu" element={<MenuSection />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
