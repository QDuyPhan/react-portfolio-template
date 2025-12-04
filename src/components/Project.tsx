import React from "react";
import { useNavigate } from "react-router-dom";
import { projectsData } from "../data/projectsData"; // Lấy dữ liệu từ file chung
import "../assets/styles/Project.scss";

function Project() {
  const navigate = useNavigate();

  const handleProjectClick = (id: string) => {
    // Chuyển hướng đến trang chi tiết: /project/easy-write-ai
    navigate(`/project/${id}`);
  };

  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        {/* Render danh sách từ dữ liệu data */}
        {projectsData.map((project) => (
          <div className="project" key={project.id}>
            {/* Click vào ảnh -> sang trang chi tiết */}
            <div
              style={{ cursor: "pointer" }}
              onClick={() => handleProjectClick(project.id)}
            >
              <img
                src={project.image}
                className="zoom"
                alt={project.title}
                width="100%"
              />
            </div>

            {/* Click vào tiêu đề -> sang trang chi tiết */}
            <div
              style={{ cursor: "pointer" }}
              onClick={() => handleProjectClick(project.id)}
            >
              <h2>{project.title}</h2>
            </div>

            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
