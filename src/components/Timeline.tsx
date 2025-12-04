import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="Feb 2025 - Nov 2025"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">STVG Co., Ltd</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Flutter Developer
            </h4>
            <p>
              - Developed and maintained high-performance, cross-platform
              (iOS/Android) and web applications using Flutter, ensuring
              stability and scalability for business management workflows.
            </p>
            <p>
              - Designed and implemented intuitive and responsive UI/UX layouts,
              optimizing the user experience and improving task efficiency
              across various browsers and screen resolutions.
            </p>
            <p>
              - Integrated internal, third-party, and RESTful APIs to ensure
              reliable communication and seamless data synchronization between
              frontend and backend systems.
            </p>
            <p>
              - Implemented real-time AI-powered features, including facial
              recognition using Google ML Kit and GPS/geofencing, for advanced
              timekeeping and attendance tracking systems.
            </p>
            <p>
              - Applied effective state management solutions (e.g., Provider) to
              maintain long-term code readability, maintainability, and ensure
              data consistency.
            </p>
            <p>
              - Conducted continuous code refactoring, code reviews, and
              performance tuning to enhance application stability, reduce
              errors, and improve page load times and system reliability.
            </p>
            <h5 className="vertical-timeline-element-subtitle">
              Key Achievements:
            </h5>
            <p>
              - Automated employee timekeeping processes, reducing manual
              check-in/out workload by approximately 85% and improving HR data
              accuracy.
            </p>
            <p>
              - Enhanced internal management efficiency by 25% through
              optimization of the resource management web application, enabling
              faster quotation processing and smoother daily operations.
            </p>
            <p>
              - Achieved 95% facial recognition accuracy for the real-time
              attendance tracking system, significantly reducing check-in errors
              and improving automation reliability.
            </p>
          </VerticalTimelineElement>
          {/* <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Full Stack Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Laie, HI</h4>
            <p>
              Frontend Development, Backend Development, User Experience, Team Leading
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 - 2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Staff Engineer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Laie, HI</h4>
            <p>
              Full-stack Development, API Development, User Experience
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2020"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Analyst Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Tokyo, Japan</h4>
            <p>
              Automation, Data Governance, Statistical Analysis
            </p>
          </VerticalTimelineElement> */}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
