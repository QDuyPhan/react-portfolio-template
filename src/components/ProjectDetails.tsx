import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { projectsData } from "../data/projectsData"; // Import dữ liệu
import FadeIn from "./FadeIn";
import "../index.scss"; // Tận dụng style cũ hoặc tạo file scss mới

const ProjectDetails: React.FC = () => {
  const { id } = useParams(); // Lấy ID từ URL
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"overview" | "privacy" | "terms">(
    "overview"
  );

  // Tìm project dựa trên ID
  const project = projectsData.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div style={{ paddingTop: 100, textAlign: "center" }}>
        Project not found
      </div>
    );
  }

  return (
    <div
      className="project-details-container"
      style={{ paddingTop: 100, paddingBottom: 50, minHeight: "80vh" }}
    >
      <FadeIn transitionDuration={700}>
        <div
          className="container"
          style={{ maxWidth: 800, margin: "0 auto", padding: "0 20px" }}
        >
          {/* Header & Navigation Tabs */}
          <div
            className="project-header"
            style={{ marginBottom: 40, textAlign: "center" }}
          >
            <h1>{project.title}</h1>

            <div
              className="tabs"
              style={{
                display: "flex",
                justifyContent: "center",
                gap: 20,
                marginTop: 20,
              }}
            >
              <button
                className={`tab-btn ${
                  activeTab === "overview" ? "active" : ""
                }`}
                onClick={() => setActiveTab("overview")}
              >
                Overview
              </button>
              <button
                className={`tab-btn ${activeTab === "privacy" ? "active" : ""}`}
                onClick={() => setActiveTab("privacy")}
              >
                Privacy Policy
              </button>
              <button
                className={`tab-btn ${activeTab === "terms" ? "active" : ""}`}
                onClick={() => setActiveTab("terms")}
              >
                Terms of Use
              </button>
            </div>
          </div>

          {/* Content Area */}
          <div
            className="tab-content"
            style={{
              background: "rgba(255,255,255,0.05)",
              padding: 30,
              borderRadius: 12,
              border: "1px solid rgba(128,128,128,0.2)",
            }}
          >
            {/* 1. OVERVIEW TAB */}
            {activeTab === "overview" && (
              <div className="overview-section">
                <img
                  src={project.image}
                  alt={project.title}
                  style={{ width: "100%", borderRadius: 10, marginBottom: 20 }}
                />
                <p style={{ fontSize: "1.1rem", lineHeight: 1.6 }}>
                  {project.description}
                </p>
                <br />
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-block",
                    padding: "10px 20px",
                    background: "#007bff",
                    color: "#fff",
                    textDecoration: "none",
                    borderRadius: 5,
                  }}
                >
                  Open Project / Download
                </a>
              </div>
            )}

            {/* 2. PRIVACY TAB */}
            {activeTab === "privacy" && (
              <div className="legal-text">{project.privacyContent}</div>
            )}

            {/* 3. TERMS TAB */}
            {activeTab === "terms" && (
              <div className="legal-text">{project.termsContent}</div>
            )}
          </div>

          <button
            onClick={() => navigate("/")}
            style={{
              marginTop: 30,
              background: "transparent",
              border: "1px solid gray",
              padding: "8px 16px",
              cursor: "pointer",
              color: "inherit",
            }}
          >
            ← Back to Home
          </button>
        </div>
      </FadeIn>
    </div>
  );
};

export default ProjectDetails;
