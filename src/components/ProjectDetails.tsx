// components/ProjectDetails.tsx
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { projectsData } from "../data/projectsData";
import FadeIn from "./FadeIn";
import "../index.scss";

const ProjectDetails: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Tìm project
  const project = projectsData.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div style={{ paddingTop: 100, textAlign: "center", color: "white" }}>
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
          {/* Header */}
          <div
            className="project-header"
            style={{ marginBottom: 30, textAlign: "center" }}
          >
            <h1>{project.title}</h1>
          </div>

          {/* Nội dung chính (Không còn Tabs nữa) */}
          <div
            className="project-content-box"
            style={{
              background: "rgba(255,255,255,0.05)",
              padding: 30,
              borderRadius: 12,
              border: "1px solid rgba(128,128,128,0.2)",
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              style={{ width: "100%", borderRadius: 10, marginBottom: 20 }}
            />

            <p
              style={{ fontSize: "1.1rem", lineHeight: 1.6, marginBottom: 30 }}
            >
              {project.description}
            </p>

            {/* Khu vực các nút hành động (Actions) */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 15,
                justifyContent: "center",
              }}
            >
              {/* Nút Download / Open Project */}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    padding: "10px 20px",
                    background: "#007bff",
                    color: "#fff",
                    textDecoration: "none",
                    borderRadius: 5,
                    fontWeight: "bold",
                  }}
                >
                  Download App
                </a>
              )}

              <button
                onClick={() => navigate(`/project/${project.id}/privacy`)}
                style={{
                  padding: "10px 20px",
                  background: "#007bff",
                  color: "#fff",
                  textDecoration: "none",
                  borderRadius: 5,
                  fontWeight: "bold",
                }}
              >
                Privacy Policy
              </button>

              {/* Nút 3: Terms of Use */}
              <button
                onClick={() => navigate(`/project/${project.id}/terms`)}
                style={{
                  padding: "10px 20px",
                  background: "#007bff",
                  color: "#fff",
                  textDecoration: "none",
                  borderRadius: 5,
                  fontWeight: "bold",
                }}
              >
                Terms of Use
              </button>
            </div>
          </div>

          {/* Nút Back */}
          <button
            onClick={() => navigate("/")}
            style={{
              marginTop: 30,
              background: "transparent",
              border: "none",
              cursor: "pointer",
              color: "gray",
              fontSize: "1rem",
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
