// src/components/ProjectLegalPage.tsx
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { projectsData } from "../data/projectsData";
import FadeIn from "./FadeIn";
import "../index.scss";

// Props để biết đang hiển thị Privacy hay Terms
interface Props {
  type: "privacy" | "terms";
}

const ProjectLegalPage: React.FC<Props> = ({ type }) => {
  const { projectId } = useParams(); // Lấy ID từ URL
  const navigate = useNavigate();

  // Tìm dự án trong data
  const project = projectsData.find((p) => p.id === projectId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [type, projectId]);

  if (!project) {
    return (
      <div style={{ paddingTop: 100, textAlign: "center" }}>
        Project not found
      </div>
    );
  }

  // Chọn nội dung hiển thị dựa trên type
  const content =
    type === "privacy" ? project.privacyComponent : project.termsComponent;
  const pageTitle = type === "privacy" ? "Privacy Policy" : "Terms of Use";

  return (
    <div
      className="legal-page-wrapper"
      style={{ paddingTop: 100, paddingBottom: 50, minHeight: "80vh" }}
    >
      {/* <FadeIn transitionDuration={700}> */}
      <div
        className="container"
        style={{ maxWidth: 800, margin: "0 auto", padding: "0 20px" }}
      >
        {/* Nút quay lại trang chi tiết dự án */}
        <button
          onClick={() => navigate(`/project/${project.id}`)}
          style={{
            background: "transparent",
            border: "none",
            color: "#007bff",
            cursor: "pointer",
            marginBottom: 20,
            fontSize: "1rem",
          }}
        >
          ← Back to {project.title}
        </button>

        <div
          className="legal-content-box"
          style={{
            background: "rgba(255,255,255,0.05)",
            padding: 40,
            borderRadius: 12,
          }}
        >
          <h1 style={{ marginBottom: 10 }}>{pageTitle}</h1>
          <p style={{ color: "gray", marginBottom: 30 }}>For {project.title}</p>

          <hr
            style={{ borderColor: "rgba(255,255,255,0.1)", marginBottom: 30 }}
          />

          {/* Hiển thị nội dung riêng của dự án */}
          <div className="legal-text-body">{content}</div>
        </div>
      </div>
      {/* </FadeIn> */}
    </div>
  );
};

export default ProjectLegalPage;
