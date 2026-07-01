import {

  useState

} from "react";
import Topbar from "../components/layout/Topbar";
import { ThemeProvider } from "../components/layout/ThemeProvider";

import FacePreviewCard
from "../components/analysis/FacePreviewCard";

import PreferenceForm
from "../components/analysis/FacePreference";

import AnalysisLoading
from "../components/analysis/AnalysisLoading";

import AnalysisError
from "../components/analysis/AnalysisError";

import AnalysisHeader
from "../components/analysis/AnalysisHeader";

import usePredict
from "../hooks/usePredict";

import useRecommendation
from "../hooks/useRecommendation";

import useLocalStorage
from "../hooks/useLocalStorage";

import useRecommendationActions
from "../hooks/useRecommendationActions";

import "../styles/pages/analysis.css";

import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

function AnalysisResult() {

  // =========================
  // LOCAL STORAGE STATES
  // =========================

  const navigate = useNavigate();

  const [

     capturedImage

  ] = useLocalStorage(

     "capturedImage",

     null
  );

  // =========================
  // UI STATES
  // =========================

  const [

     selectedFilter,

     setSelectedFilter

  ] = useState("All");

  // =========================
  // AI BUSINESS HOOK
  // =========================

  const {

     loading,

     prediction,

     recommendations,

     avoidRecommendations,

     error,

     analyzeFace

  } = usePredict();

  useEffect(() => {

   if (
      !capturedImage ||
      prediction
   ) {
      return;
   }

   analyzeFace(
      capturedImage,
      {}
   );

}, [
   capturedImage
]);
  // =========================
  // RECOMMENDATION HOOK
  // =========================

  const {

     filters,

     filteredRecommendations

  } = useRecommendation(

     recommendations,

     selectedFilter
  );

  // =========================
  // ACTIONS HOOK
  // =========================

  const {

     goToDetail,

     goToTryOn,

     goToConsultation

  } = useRecommendationActions();


  // =========================
  // LOADING
  // =========================

  if (loading) {

     return <AnalysisLoading />;
  }

  // =========================
  // DATA
  // =========================

  const faceShape =
   prediction?.face_shape;

  const confidence =
    prediction?.confidence;

  const scores =
    prediction?.scores;

  // =========================
  // PAGE
  // =========================

  return (



   <div className="analysis-page">
         <ThemeProvider>
         <Topbar />

        {/* =====================
            HEADER
        ====================== */}

        <AnalysisHeader />

        {/* =====================
            FACE PREVIEW
        ====================== */}
         <div className="analysis-top">

         <FacePreviewCard

            capturedImage={
               capturedImage
            }

            faceShape={
               faceShape
            }

            confidence={
               confidence
            }

         />

<PreferenceForm
   onSubmit={async (preferences) => {

      const result =
      await analyzeFace(
         capturedImage,
         preferences
      );

      localStorage.setItem(
         "recommendationPayload",
         JSON.stringify({

            capturedImage,

            prediction:
               result.prediction,

            recommendations:
               result.recommendations,

            avoidRecommendations:
               result.avoidRecommendations,

            preferences

         })
      );

      navigate("/recommendation");

   }}
/>

         </div>

        {/* =====================
            ERROR
        ====================== */}

        <AnalysisError
           error={error}
        />

        {/* =====================
            RESULT
        ====================== */}
  </ThemeProvider>
     </div>
   
  );
}

export default AnalysisResult;