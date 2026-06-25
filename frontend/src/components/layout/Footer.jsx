import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt
} from "react-icons/fa";

import "../../styles/layout/footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand */}

        <div className="footer-column footer-brand">

          <h2 className="footer-logo">
            AI <span>BARBERSHOP</span>
          </h2>

          <p className="footer-description">
            Intelligent hairstyle recommendation platform powered by
            Artificial Intelligence and facial shape analysis technology.
          </p>

          <div className="footer-social">

          <a
                        href="https://instagram.com/viqimahadib"
                        target="_blank"
                     >
                        <FaInstagram />
                     </a>

                     <a
                        href="https://github.com/username"
                        target="_blank"
                     >
                        <FaGithub />
                     </a>

                     <a
                        href="https://linkedin.com/in/username"
                        target="_blank"
                     >
                        <FaLinkedin />
                     </a>

                     <a
                        href="mailto:email@gmail.com"
                     >
                        <FaEnvelope />
                     </a>

          </div>

        </div>

        {/* Navigation */}

        <div className="footer-column footer-nav">

          <h3>Navigation</h3>

          <Link to="/">Home</Link>

          <Link to="/features">
            Features
          </Link>

          <Link to="/how-it-works">
            How It Works
          </Link>

          <Link to="/about">
            About
          </Link>

        </div>

        {/* Features */}

        <div className="footer-column footer-features">

          <h3>Features</h3>

          <p>AI Face Analysis</p>

          <p>
            Personalized Recommendation
          </p>

          <p>AI Hairstyle Try-On</p>

          <p>AI Consultation</p>

        </div>

        {/* Contact */}

        <div className="footer-column footer-contact">

          <h3>Contact Info</h3>

          <div className="contact-item">

            <FaMapMarkerAlt />

            <span>
              Magelang, Central Java, Indonesia
            </span>

          </div>

          <div className="contact-item">

            <FaPhoneAlt />

            <span>
              +62 812 3456 7890
            </span>

          </div>

          <div className="contact-item">

            <FaEnvelope />

            <span>
              viqimahadib@gmail.com
            </span>

          </div>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 AI Smart Mirror Hairstyle Recommendation System.
          All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;