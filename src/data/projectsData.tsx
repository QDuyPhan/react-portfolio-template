// src/data/projectsData.ts
import React from "react";
import mock10 from "../assets/images/mock11.png";
import PrivacyPolicy from "../components/PrivacyPolicy";
import TermOfUse from "../components/TermOfUse";

// Import các component nội dung (nếu bạn muốn tách file cho gọn)
// Hoặc viết trực tiếp JSX vào đây cũng được

export interface ProjectType {
  id: string; // Slug trên URL
  title: string;
  image: string;
  description: string;
  link: string;
  // Hai trường này chứa nội dung riêng biệt cho từng dự án
  privacyComponent: React.ReactNode;
  termsComponent: React.ReactNode;
}

export const projectsData: ProjectType[] = [
  {
    id: "easy-write-ai",
    title: "Easy Write AI",
    image: mock10,
    description: "Developed a cross-platform English writing assistant...",
    link: "https://play.google.com/store/apps/details?id=...",

    // Gán nội dung riêng của Easy Write AI vào đây
    privacyComponent: <PrivacyPolicy />,
    termsComponent: <TermOfUse />,
  },
  // Sau này thêm dự án mới thì làm tương tự:
  // {
  //   id: "super-game",
  //   ...
  //   privacyComponent: <SuperGamePrivacyContent />,
  //   termsComponent: <SuperGameTermsContent />,
  // }
];
