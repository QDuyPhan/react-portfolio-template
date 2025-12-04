import React, { useEffect } from "react";
// Đảm bảo bạn import đúng đường dẫn component FadeIn
import FadeIn from "./FadeIn";

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-page-wrapper">
      <div className="legal-content">
        <h1>Privacy Policy</h1>
        <p className="last-updated">Last updated: November 20, 2025</p>

        <p>
          <strong>Phan Quang Duy</strong> ("we," "our," or "us") is committed to
          protecting your privacy. This Privacy Policy explains how your
          personal information is collected, used, and disclosed by{" "}
          <strong>EasyWrite AI</strong> ("the App").
        </p>
        <p>
          By accessing or using our Service, you signify that you have read,
          understood, and agree to our collection, storage, use, and disclosure
          of your personal information as described in this Privacy Policy and
          our Terms of Service.
        </p>

        <h2>1. INFORMATION WE COLLECT</h2>
        <p>
          We collect information to provide better services to all our users.
        </p>

        <h3>A. Information You Provide to Us</h3>
        <ul>
          <li>
            <strong>Input Data:</strong> When you use the "Grammar Check,"
            "Rewrite," or "Email Generator" features, you provide text input.
            This text is processed transiently to provide the service.
          </li>
          <li>
            <strong>Local Storage:</strong> We do not store your content on our
            servers. Any data you explicitly save (such as "History" or
            "Notebook") is stored <strong>locally on your device</strong>. If
            you delete the App, this data may be lost.
          </li>
        </ul>

        <h3>B. Information Collected Automatically</h3>
        <ul>
          <li>
            <strong>Usage Data & Crash Logs:</strong> We may collect anonymous
            information about how the App performs (e.g., crash reports provided
            by Apple or Google) to help us fix bugs and improve stability.
          </li>
          <li>
            <strong>Device Information:</strong> We may collect generic
            information about your device model and operating system version to
            ensure compatibility.
          </li>
        </ul>

        <h2>2. HOW WE USE YOUR INFORMATION</h2>
        <p>
          We use the information we collect for various purposes, including to:
        </p>
        <ul>
          <li>Provide, operate, and maintain our App.</li>
          <li>
            <strong>Process AI Features:</strong> Your text input is sent to
            Google Gemini API to perform grammar checking and content
            generation.
          </li>
          <li>Improve, personalize, and expand our App.</li>
          {/* <li>
              Show advertisements (via Google AdMob) to support the free version
              of the App.
            </li> */}
        </ul>

        <h2>3. THIRD-PARTY SERVICES</h2>
        <p>
          We maintain formatting and data integrity by using trusted third-party
          service providers. By using our App, you acknowledge that your data
          may be processed by these parties:
        </p>
        <ul>
          <li>
            <strong>Google Gemini API:</strong> We use Google's generative AI to
            process your text. Google may use this data to improve their
            services in accordance with their privacy policy.
          </li>
          {/* <li>
              <strong>Google AdMob:</strong> Used to display advertisements.
              AdMob may collect data to show personalized ads.
            </li> */}
          {/* Đã xóa Firebase khỏi danh sách này */}
        </ul>

        <h2>4. DATA RETENTION</h2>
        <p>
          We will retain your personal information only for as long as is
          necessary for the purposes set out in this Privacy Policy. Input text
          sent to AI is transient and processed immediately. Since data saved in
          "History" is stored locally on your device, you have full control over
          its retention.
        </p>

        <h2>5. SECURITY OF YOUR DATA</h2>
        <p>
          The security of your data is important to us. Since your personal
          content is stored locally on your device, please ensure your device is
          secured. However, remember that no method of transmission over the
          Internet is 100% secure.
        </p>

        <h2>6. CHILDREN'S PRIVACY</h2>
        <p>
          Our Service does not address anyone under the age of 13. We do not
          knowingly collect personally identifiable information from anyone
          under the age of 13.
        </p>

        <h2>7. CHANGES TO THIS PRIVACY POLICY</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you
          of any changes by posting the new Privacy Policy on this page.
        </p>

        <h2>8. CONTACT US</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact
          us:
        </p>
        <ul>
          <li>
            By email:{" "}
            <a href="mailto:phanquangduytvt.work@gmail.com">
              phanquangduytvt.work@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
