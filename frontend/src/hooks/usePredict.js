import axios from "axios";
import {

    useState
 
 } from "react";
 
 import {
 
    predictFace
 
 } from "../services/predictService";
 
 import {
 
    getRecommendation
 
 } from "../services/recommendationService";
 
 import {
 
    dataURLtoFile
 
 } from "../utils/imageUtils";
 
 export default function
 usePredict() {
 
    // =========================
    // STATES
    // =========================
 
    const [
 
       loading,
 
       setLoading
 
    ] = useState(false);
 
    const [
 
       prediction,
 
       setPrediction
 
    ] = useState(null);
 
    const [
 
       recommendations,
 
       setRecommendations
 
    ] = useState([]);
 
    const [
 
       avoidRecommendations,
 
       setAvoidRecommendations
 
    ] = useState([]);
 
    const [
 
       error,
 
       setError
 
    ] = useState("");
 
    // =========================
    // ANALYZE FACE
    // =========================
 
    const analyzeFace =
    async (
 
       capturedImage,
 
       userPreferences
 
    ) => {
 
       try {
 
          setLoading(true);
 
          setError("");
 
          // =====================
          // VALIDATION
          // =====================
 
          if (!capturedImage) {
 
             setError(
                "No image provided."
             );
 
             return;
          }
 
          // =====================
          // IMAGE TO FILE
          // =====================
 
          const file =
             dataURLtoFile(
 
                capturedImage,
 
                "face.jpg"
             );
 
          const formData =
             new FormData();
 
          formData.append(
 
             "file",
 
             file
          );
 
          // =====================
          // BUILD PREFERENCES
          // =====================
          const preferences = {

            hair_type:
               userPreferences.hairType,
         
            profession:
               userPreferences.profession,
         
            personality:
               userPreferences.personality,
         
            maintenance:
               userPreferences.maintenance,
         
            formality:
               userPreferences.formality
         
         };
 
          // =====================
          // AI PREDICTION
          // =====================
 
          const predictionResult =
             await predictFace(
                formData
             );

             console.log(
               "PREDICTION RESULT:",
               predictionResult
            );
 
          // =====================
          // RECOMMENDATION
          // =====================
 
          const recommendationResult =
             await getRecommendation({
 
                face_scores:
                    predictionResult
                    .scores,
 
                ...preferences
             });
             try {
               console.log(
                  "FINAL PAYLOAD",
                  {
                     face_shape:
                        predictionResult.face_shape,
               
                     hair_type:
                        preferences.hair_type,
               
                     recommended_hairstyle:
                        recommendationResult
                        .recommendations[0]?.name,
               
                     confidence:
                        predictionResult.confidence,
               
                     captured_image:
                        predictionResult.captured_image,
               
                     profession:
                        preferences.profession,
               
                     personality:
                        preferences.personality,
               
                     maintenance:
                        preferences.maintenance,
               
                     formality:
                        preferences.formality
                  }
               );
               await axios.post(
                  "http://localhost:8000/admin/scan-history",
                  
                  {
                     face_shape:
                        predictionResult.face_shape,
            
                     hair_type:
                        preferences.hair_type,
            
                     recommended_hairstyle:
                        recommendationResult
                        .recommendations[0]?.name,
            
                     confidence:
                        predictionResult.confidence,
            
                     captured_image:
                        predictionResult.captured_image,
            
                     profession:
                        preferences.profession,
            
                     personality:
                        preferences.personality,
            
                     maintenance:
                        preferences.maintenance,
            
                     formality:
                        preferences.formality
                  }
               );
            
            } catch (err) {
            
               console.error(
                  "Save history failed",
                  err
               );
            
            }
 
          // =====================
          // STATES
          // =====================
 
       // =====================
      // STATES
      // =====================

      setPrediction(
         predictionResult
      );

      setRecommendations(
         recommendationResult
         .recommendations || []
      );

      setAvoidRecommendations(
         recommendationResult
         .avoid_recommendations || []
      );

      return {

         prediction:
            predictionResult,

         recommendations:
            recommendationResult
            .recommendations || [],

         avoidRecommendations:
            recommendationResult
            .avoid_recommendations || []

      };
       } catch (err) {
 
          console.error(err);
 
          setError(
 
             "Failed to analyze face."
          );
 
       } finally {
 
          setLoading(false);
       }
    };
 
    return {
 
       loading,
 
       prediction,
 
       recommendations,
 
       avoidRecommendations,
 
       error,
 
       analyzeFace
    };
 }