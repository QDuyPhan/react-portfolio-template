// App.tsx
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Contact,
  Navigation,
  Footer,
} from "./components";
import FadeIn from "./components/FadeIn";
import "./index.scss";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermOfUse from "./components/TermOfUse";
import ProjectDetails from "./components/ProjectDetails";
import ProjectLegalPage from "./components/ProjectLegalPage";

// Component con cho trang Home để code gọn hơn
const HomePage: React.FC = () => (
  <FadeIn transitionDuration={700}>
    <Main />
    <Expertise />
    <Timeline />
    <Project />
    <Contact />
  </FadeIn>
);

function App() {
  const [mode, setMode] = useState<string>("light");

  const handleModeChange = () => {
    setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    // Bọc Router ở ngoài cùng
    <Router>
      <div
        className={`main-container ${
          mode === "dark" ? "dark-mode" : "light-mode"
        }`}
      >
        <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />

        {/* Khu vực nội dung thay đổi */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/term-of-use" element={<TermOfUse />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route
            path="/project/:projectId/privacy"
            element={<ProjectLegalPage type="privacy" />}
          />
          <Route
            path="/project/:projectId/terms"
            element={<ProjectLegalPage type="terms" />}
          />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
