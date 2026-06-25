import "../styles/pages/howitworks.css";

import Navbar
from "../components/layout/Navbar";

import {

   ScanFace,

   Sparkles,

   Wand2,

   CheckCircle

}

from "lucide-react";
import Footer from "../components/layout/Footer";

function HowItWorks() {

   const steps = [

      {
         icon: <ScanFace size={28}/>,
         title: "Scan Your Face",
         description:
         "Capture your face using the camera."
      },

      {
         icon: <Sparkles size={28}/>,
         title: "Face Shape Detection",
         description:
         "AI analyzes your facial structure."
      },

      {
         icon: <Wand2 size={28}/>,
         title: "Get Recommendations",
         description:
         "Receive personalized hairstyle suggestions."
      },

      {
         icon: <CheckCircle size={28}/>,
         title: "AI Try-On",
         description:
         "Preview hairstyles before your haircut."
      }

   ];

   return (

      <div className="how-page">

         <Navbar />

         <section className="how-hero">
         <div className="how-overlay">
         <span className="how-badge">
            HOW IT WORKS
         </span>
            <h1>

            How It Works

            </h1>

            <p>

               Learn how our AI-powered
               hairstyle recommendation system works.

            </p>
         </div>
         </section>
         <div className="section-heading">

         <span>FEATURES</span>

         <h2>Main Features</h2>

         <p>
            Explore the intelligent capabilities
            of AI Smart Mirror.
         </p>

         </div>
         <section className="how-steps">

            {
               steps.map(
                  (step,index) => (

                  <div
                     key={index}
                     className="step-card"
                  >

                     <div className="step-icon">
                        {step.icon}
                     </div>

                     <h3>
                        {step.title}
                     </h3>

                     <p>
                        {step.description}
                     </p>

                  </div>
               ))
               
            }

         </section>
         <section className="process-section">

         <div className="process-header">

            <span className="process-badge">
               AI PROCESS
            </span>

            <h2>
               Detailed Recommendation Workflow
            </h2>

            <p>
               The system follows several intelligent steps
               to generate personalized hairstyle recommendations.
            </p>

         </div>

         <div className="process-timeline">

            <div className="timeline-item left">
               <div className="timeline-content">
                  <span>01</span>
                  <h3>Scan Face</h3>
                  <p>
                     User captures a facial image using the camera.
                  </p>
               </div>
            </div>

            <div className="timeline-item right">
               <div className="timeline-content">
                  <span>02</span>
                  <h3>Face Shape Analysis</h3>
                  <p>
                     CNN analyzes facial features and detects
                     Oval, Round, Square, or Rectangle shape.
                  </p>
               </div>
            </div>

            <div className="timeline-item left">
               <div className="timeline-content">
                  <span>03</span>
                  <h3>User Preferences</h3>
                  <p>
                     User selects hair type, profession,
                     personality, maintenance level,
                     and formality preference.
                  </p>
               </div>
            </div>

            <div className="timeline-item right">
               <div className="timeline-content">
                  <span>04</span>
                  <h3>AI Recommendation</h3>
                  <p>
                     The recommendation engine combines
                     face shape and user preferences.
                  </p>
               </div>
            </div>

            <div className="timeline-item left">
               <div className="timeline-content">
                  <span>05</span>
                  <h3>Virtual Try-On</h3>
                  <p>
                     User previews hairstyles virtually
                     before deciding on a haircut.
                  </p>
               </div>
            </div>

         </div>

      </section>
      <section className="cta-section">

   <div className="cta-container">

      <span className="cta-badge">
         READY TO START?
      </span>

      <h2>
         Discover Your Perfect Hairstyle Today
      </h2>

      <p>
         Let our AI analyze your face shape and personal preferences
         to recommend hairstyles that truly match your appearance,
         personality, and lifestyle.
      </p>

      <div className="cta-features">

         <div className="cta-item">
            ✓ AI Face Shape Detection
         </div>

         <div className="cta-item">
            ✓ Personalized Recommendations
         </div>

         <div className="cta-item">
            ✓ Virtual Hairstyle Try-On
         </div>

      </div>

      <a
         href="/scan"
         className="cta-button"
      >
         Start Face Analysis
      </a>

   </div>

</section>
         <Footer />
      </div>
   );
}

export default HowItWorks;