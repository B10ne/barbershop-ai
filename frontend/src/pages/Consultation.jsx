import ConsultationHeader
from "../components/consultation/ConsultationHeader";

import ConsultationPanel
from "../components/consultation/ConsultationPanel";

import ConfidenceExplanation
from "../components/consultation/ConfidenceExplanation";

import StylingTips
from "../components/consultation/StylingTips";

import HaircareAdvice
from "../components/consultation/HaircareAdvice";

import ProductRecommendation
from "../components/consultation/ProductRecommendation";

import ConsultationActions
from "../components/consultation/ConsultationActions";

import ConsultationLoading
from "../components/consultation/ConsultationLoading";

import AnalysisError
from "../components/analysis/AnalysisError";

import useConsultation
from "../hooks/useConsultation";

import useLocalStorage
from "../hooks/useLocalStorage";

function Consultation() {

   // =========================
   // STORAGE
   // =========================

   const [

      hairstyle

   ] = useLocalStorage(

      "selectedHairstyle",

      null
   );

   const [

      preferences

   ] = useLocalStorage(

      "userPreferences",

      []
   );

   // =========================
   // CONSULTATION HOOK
   // =========================

   const {

      loading,

      consultation,

      error,

      generateConsultation

   } = useConsultation();

   // =========================
   // GENERATE CONSULTATION
   // =========================

   const handleGenerate =
   async () => {

    await generateConsultation({

        faceShape:
           hairstyle
           ?.face_shape,
     
        hairstyle:
           hairstyle.name,
     
        preferences
     });
   };

   // =========================
   // LOADING
   // =========================

   if (loading) {

      return (

         <ConsultationLoading />
      );
   }

   // =========================
   // EMPTY
   // =========================

   if (!hairstyle) {

      return (

         <div
            style={{

               minHeight:
                  "100vh",

               background:
                  "#0f172a",

               color:
                  "white",

               display:
                  "flex",

               justifyContent:
                  "center",

               alignItems:
                  "center"
            }}
         >

            No hairstyle selected

         </div>
      );
   }

   // =========================
   // PAGE
   // =========================

   return (

      <div
         style={{

            minHeight:
               "100vh",

            background:
               "#0f172a",

            color:
               "white",

            padding:
               "40px"
         }}
      >

         {/* HEADER */}

         <ConsultationHeader />

         {/* ERROR */}

         <AnalysisError
            error={error}
         />

         {/* MAIN PANEL */}

         <ConsultationPanel

            hairstyle={
               hairstyle
            }

            consultation={
               consultation
            }

         />

         {/* EXPLAINABILITY */}

         <ConfidenceExplanation

            hairstyle={
               hairstyle
            }

         />

         {/* STYLING */}

         <StylingTips

            hairstyle={
               hairstyle
            }

            consultation={
               consultation
            }

         />

         {/* HAIRCARE */}

         <HaircareAdvice

            preferences={
               preferences
            }

         />

         {/* PRODUCTS */}

         <ProductRecommendation

            hairstyle={
               hairstyle
            }

         />

         {/* ACTIONS */}

         <ConsultationActions

            onGenerate={
               handleGenerate
            }

         />

      </div>
   );
}

export default Consultation;