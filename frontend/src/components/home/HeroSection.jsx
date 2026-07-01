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
            Gaya Rambut yang Sempurna dalam Sekejap
            </span>
         </h1>

         <p>

            {description ||

            "Analisis wajah secara real-time yang didukung oleh AI untuk rekomendasi gaya rambut yang disesuaikan dengan kebutuhan masing-masing."}

            </p>
            <div className="hero-actions">

            <button

               className="hero-primary-btn"

               onClick={() =>
                  navigate("/scan")
               }

               >

               Mulai Analisis Wajah

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
                  Analisis Wajah Berbasis AI
                  </h4>

                  <p>
                  Pengenalan wajah tingkat lanjut
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
                  Hasil yang Disesuaikan
                  </h4>

                  <p>
                  Disesuaikan dengan ciri-ciri Anda
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
                  Coba Pakaian Secara Realistis
                  </h4>

                  <p>
                  Periksa dulu sebelum memotong
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
                  Konsultasi Ahli
                  </h4>

                  <p>
                  Asisten Tukang Cukur Berbasis AI
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