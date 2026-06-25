import "../styles/pages/features.css";

import Navbar from "../components/layout/Navbar";

import {
   ScanFace,
   WandSparkles,
   Camera,
   MessageCircleMore
} from "lucide-react";
import Footer from "../components/layout/Footer";

function Features() {

   const features = [

      {
         icon: <ScanFace size={32}/>,
         title: "AI Face Shape Detection",
         description:
         "Automatically identifies face shapes using CNN-based facial analysis."
      },
      
      {
         icon: <WandSparkles size={32}/>,
         title: "Personalized Recommendation",
         description:
         "Provides hairstyle recommendations based on facial shape and personal preferences.",
      },
      
      {
         icon: <Camera size={32}/>,
         title: "Virtual Hairstyle Try-On",
         description:
         "Preview hairstyles virtually before making your final decision."
      },
      
      {
         icon: <MessageCircleMore size={32}/>,
         title: "AI Hair Consultation",
         description:
         "Get hairstyle and grooming advice from an intelligent AI assistant."
      },
      
      {
         icon: <ScanFace size={32}/>,
         title: "Preference Analysis",
         description:
         "Analyzes profession, personality, maintenance level, and formality."
      },
      
      {
         icon: <WandSparkles size={32}/>,
         title: "Fast Recommendation",
         description:
         "Receive accurate hairstyle recommendations in seconds."
      }
      
      ];

   return (

      <div className="features-page">

         <Navbar />
         <section className="features-hero">

            <div className="features-overlay">

               <span className="features-badge">
                  FEATURES
               </span>

               <h1>
               Features
               </h1>

               <p>

               Discover the intelligent features
               that power the AI Smart Mirror experience.

               </p>
            </div>

         </section>

         <section className="features-section">
         <div className="feature-header">

         <span className="feature-badge">
            AI-Powered Features
         </span>

         <h2>
            Everything You Need to Find Your Perfect Hairstyle
         </h2>

         <p>
            Explore the powerful features designed to analyze your facial shape,
            understand your personal preferences, and provide accurate hairstyle
            recommendations with virtual try-on capabilities.
         </p>

         </div>

         <div className="benefit-grid">

         {features.map((feature,index)=>(
            <div
               key={index}
             className="benefit-card"
            >

               <div className="benefit-icon">
                  {feature.icon}
               </div>

               <h3>{feature.title}</h3>

               <p>{feature.description}</p>

            </div>
         ))}

         </div>

</section>
<Footer />

      </div>

   );

}

export default Features;