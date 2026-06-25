import PageContainer from "../layout/PageContainer";
import {
   ScanFace,
   Sparkles,
   Wand2,
   MessageCircle
} from "lucide-react";

import { useNavigate }
from "react-router-dom";

function HeroSection({
   title,
   description
}) {

   const navigate =
      useNavigate();

   const heroImage =
      "/images/hero/hero-main2.png";
return(
      <PageContainer>
      <section className="hero-section">

         {/* LEFT */}

         <div className="hero-left">
         <h1>
            <span className="ai-gradient">
               <strong>{title} </strong>
            </span>
            <span className="hero-subtitle-white">
                  Find Your Perfect Hairstyle Instantly
            </span>
         </h1>

         <p>

            {description ||

            "Real-time face analysis powered by AI for personalized hairstyle recommendations."}

            </p>
            <div className="hero-actions">

            <button

               className="hero-primary-btn"

               onClick={() =>
                  navigate("/scan")
               }

               >

               Start Face Analysis

               </button>

            </div>

            <div className="hero-features">

            {/* AI FACE ANALYSIS */}

            <div className="hero-feature">

               <div className="feature-icon">
                  <ScanFace size={20}/>
               </div>

               <div className="feature-content">

                  <h4>
                     AI Face Analysis
                  </h4>

                  <p>
                     Advanced facial recognition
                  </p>

               </div>

            </div>

            {/* PERSONALIZED RESULTS */}

            <div className="hero-feature">

               <div className="feature-icon">
                  <Sparkles size={20}/>
               </div>

               <div className="feature-content">

                  <h4>
                     Personalized Results
                  </h4>

                  <p>
                     Tailored for your features
                  </p>

               </div>

            </div>

            {/* TRY ON */}

            <div className="hero-feature">

               <div className="feature-icon">
                  <Wand2 size={20}/>
               </div>

               <div className="feature-content">

                  <h4>
                     Realistic Try-On
                  </h4>

                  <p>
                     See before you cut
                  </p>

               </div>

            </div>

            {/* CONSULTATION */}

            <div className="hero-feature">

               <div className="feature-icon">
                  <MessageCircle size={20}/>
               </div>

               <div className="feature-content">

                  <h4>
                     Expert Consultation
                  </h4>

                  <p>
                     AI Barber Assistant
                  </p>

               </div>

            </div>

         </div>

         </div>



         {/* RIGHT */}

         <div className="hero-right">

            <div className="hero-glow"></div>

            <img
               src={heroImage}
               alt="AI Hero"
            />

         </div>

      </section>
      </PageContainer>
   );
}

export default HeroSection;