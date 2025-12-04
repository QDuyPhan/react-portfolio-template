// src/data/projectsData.ts
import mock10 from "../assets/images/mock11.png";
import PrivacyPolicy from "../components/PrivacyPolicy";
import TermOfUse from "../components/TermOfUse";

// Định nghĩa kiểu dữ liệu cho Project
export interface ProjectType {
  id: string; // ID dùng để làm URL (slug)
  title: string;
  image: string;
  description: string;
  link: string; // Link đến store hoặc web thật
  privacyContent: React.ReactNode; // Nội dung HTML/Text cho Privacy
  termsContent: React.ReactNode; // Nội dung HTML/Text cho Terms
}

export const projectsData: ProjectType[] = [
  {
    id: "easy-write-ai",
    title: "Easy Write AI",
    image: mock10,
    description:
      "Developed a cross-platform English writing assistant for Vietnamese users with grammar correction and native language explanations using Flutter, Google Gemini API.",
    link: "",
    // Bạn dán nội dung Privacy riêng của app này vào đây
    privacyContent: <PrivacyPolicy />,
    // Bạn dán nội dung Terms riêng của app này vào đây
    termsContent: <TermOfUse />,
  },
  // Bạn có thể thêm các project khác vào đây:
  // { id: "project-2", title: "Project 2", ... }
];
