import { useLocation } from "react-router-dom";

import "../styles/pages/tryon.css";

import useTryOn from "../hooks/useTryOn";

import TryOnLayout from "../components/tryon/TryOnLayout";
import TryOnHeader from "../components/tryon/TryOnHeader";
import UserPhotoCard from "../components/tryon/UserPhotoCard";
import PreviewCard from "../components/tryon/PreviewCard";
import HairstyleInfoCard from "../components/tryon/HairstyleInfoCard";
import ProgressPipeline from "../components/tryon/ProgressPipeline";
import TryOnActions from "../components/tryon/TryOnActions";
import GeneratingOverlay from "../components/tryon/GeneratingOverlay";

import AnalysisError from "../components/analysis/AnalysisError";

function TryOn() {


   const location = useLocation();
   console.log("========== LOCATION ==========");
   console.log(location);
   console.log("STATE =", location.state);
   console.log("==============================");
   // ── Data from previous page ─────────────
   const hairstyle    = location.state?.hairstyle;
   const capturedImage = location.state?.capturedImage;
   const preference = location.state?.preference;
   console.log("Location State");
   console.log(location.state);
   console.log("Preference");
   console.log(preference);
   // ── Try-On hook ─────────────────────────
   const { generatedImage, generating, error, generateTryOn } = useTryOn();

   console.log(hairstyle);
   // ── Generate handler ────────────────────
   const handleGenerate = () => {
      generateTryOn(
         capturedImage,
         hairstyle,
         preference
      );
   };

   // ── Validation ──────────────────────────
   if (!hairstyle || !capturedImage) {
      return (
         <div className="tryon-page">
            <div className="tryon-container">
               <div style={{
                  padding: "80px 40px",
                  textAlign: "center",
                  color: "var(--text-secondary)"
               }}>
                  <h2 style={{ color: "var(--text-primary)", marginBottom: 8 }}>
                     No Try-On Session Found
                  </h2>
                  <p>Please select a hairstyle first from the recommendation page.</p>
               </div>
            </div>
         </div>
      );
   }

   // ── Render ──────────────────────────────
   return (
      <TryOnLayout>

         {generating && <GeneratingOverlay />}

         <TryOnHeader generatedImage={generatedImage} />

         <AnalysisError error={error} />

         <div className="tryon-studio">

            {/* Left: user photo */}
            <UserPhotoCard image={capturedImage} />

            {/* Center: before/after slider */}
            <PreviewCard
               hairstyle={hairstyle}
               generatedImage={generatedImage}
            />

            {/* Right: info + actions */}
            <div className="tryon-sidebar">

               <HairstyleInfoCard hairstyle={hairstyle} />

               <TryOnActions
                  generating={generating}
                  generatedImage={generatedImage}
                  hairstyle={hairstyle}
                  onGenerate={handleGenerate}
               />

            </div>

         </div>

         <ProgressPipeline generatedImage={generatedImage} />

      </TryOnLayout>
   );
}

export default TryOn;