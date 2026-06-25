import "../styles/pages/about.css";
import Navbar from "../components/layout/Navbar";
import {
   FaInstagram,
   FaGithub,
   FaLinkedin,
   FaEnvelope
} from "react-icons/fa";
import Footer from "../components/layout/Footer";
function About() {

   return (

      <div className="about-page">

         <Navbar />

         {/* HERO */}

         <section className="about-hero">

            <div className="about-overlay">

               <span className="about-badge">
                  ABOUT US
               </span>

               <h1>
                  About AI Smart Mirror
               </h1>

               <p>
                  Intelligent hairstyle recommendation
                  platform powered by Artificial Intelligence
                  and facial analysis technology.
               </p>

            </div>

         </section>

         {/* INTRODUCTION */}

         <section className="about-intro">

         <div className="intro-left">
         <span className="section-badge">
         INTRODUCE
         </span>

            <h2><strong>Intelligent Hairstyle Recommendation Platform</strong>
            </h2>

         </div>

         <div className="intro-right">

            <p>
            AI Barbershop merupakan platform konsultasi gaya rambut berbasis kecerdasan buatan yang dirancang untuk membantu pengguna menemukan gaya rambut yang paling sesuai dengan karakteristik wajah mereka. Dengan memanfaatkan teknologi Computer Vision dan algoritma Convolutional Neural Network (CNN), sistem mampu menganalisis bentuk wajah pengguna secara otomatis dan memberikan rekomendasi gaya rambut yang lebih personal, akurat, dan relevan.
            </p>

            <p>
               Platform ini hadir sebagai solusi atas kesulitan yang sering dialami pelanggan dalam menentukan gaya rambut yang sesuai sebelum melakukan potong rambut. Melalui proses analisis wajah yang cepat dan mudah, pengguna dapat memperoleh berbagai rekomendasi hairstyle yang disesuaikan dengan bentuk wajah mereka, sehingga membantu meningkatkan kepercayaan diri serta mengurangi risiko ketidakpuasan terhadap hasil potongan rambut.
            </p>

         </div>

         </section>

         {/* VISION MISSION */}

         <section className="vision-section">

            <div className="vision-card">

               <h3>Vision</h3>

               <p>
               Menjadi platform konsultasi gaya rambut berbasis kecerdasan buatan yang inovatif, akurat, dan mudah digunakan untuk membantu pengguna menemukan rekomendasi gaya rambut yang sesuai dengan karakteristik bentuk wajah mereka.
               </p>

            </div>

            <div className="vision-card">

               <h3>Mission</h3>

               <ul>
                  <li>Mengembangkan sistem kecerdasan buatan yang mampu mengidentifikasi bentuk wajah pengguna secara akurat melalui teknologi Computer Vision dan CNN.</li>
                  <li>Menyediakan rekomendasi gaya rambut yang sesuai dengan karakteristik wajah pengguna berdasarkan hasil analisis sistem.</li>
                  <li>Membantu pelanggan dan barber dalam proses konsultasi gaya rambut secara lebih cepat, objektif, dan efisien.</li>
                  <li>Meningkatkan pengalaman pengguna melalui layanan digital yang modern, interaktif, dan mudah diakses.</li>
               </ul>

            </div>

         </section>

         {/* DEVELOPER */}

         <section className="cta-section">
            <div className="developer-container">

               <div className="developer-image">

                  <img
                     src="/images/developer/viqi.jpg"
                     alt="Developer"
                  />

               </div>

               <div className="developer-content">

                  <span className="section-badge">
                     DEVELOPER
                  </span>

                  <h2>
                     Meet The Developer
                  </h2>

                  <h3>
                     Viqi Mahadib
                  </h3>

                  <p>
                     AI Engineer & Full Stack Developer.
                     Final-year Informatics student focusing on
                     Artificial Intelligence, Computer Vision,
                     and Intelligent Recommendation Systems.
                  </p>

                  <div className="developer-social">

                  <div className="developer-social">

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

               </div>

            </div>

         </section>

         {/* ACADEMIC */}

         <section className="academic-section">

            <span className="section-badge">
               ACADEMIC PROJECT
            </span>

            <h2>
               Research Information
            </h2>

            <div className="academic-card">

               <h3>
                  AI Smart Mirror Hairstyle Recommendation
               </h3>

               <p>
                  This project was developed as part of the
                  Final Project (Skripsi) in the Informatics
                  Engineering Program.
               </p>

               <p>
                  The system implements Convolutional Neural
                  Network (CNN) technology to analyze face
                  shape and generate personalized hairstyle
                  recommendations.
               </p>

            </div>

         </section>
         <Footer />

      </div>

   );

}

export default About;