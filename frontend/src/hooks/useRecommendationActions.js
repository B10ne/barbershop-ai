import {

    useNavigate
 
 } from "react-router-dom";
 
 import {
 
    setStorage
 
 } from "../utils/localStorage";
 
 export default function
 useRecommendationActions() {
 
    const navigate =
       useNavigate();
 
    // =========================
    // DETAIL
    // =========================
    const goToDetail = (item) => {

      const payload = JSON.parse(
         localStorage.getItem("recommendationPayload")
      );
   
      navigate(
   
         `/hairstyle/${encodeURIComponent(item.name)}`,
   
         {
   
            state: {
   
               hairstyle: item,
   
               capturedImage: payload?.capturedImage,
   
               preference: payload?.preferences
   
            }
   
         }
   
      );
   
   };
    // =========================
    // TRY ON
    // =========================
 
    const goToTryOn = (item) => {

      const payload = JSON.parse(
         localStorage.getItem("recommendationPayload")
      );
   
      navigate("/try-on", {
   
         state: {
   
            hairstyle: item,
   
            capturedImage: payload?.capturedImage,
   
            preference: payload?.preferences
   
         }
   
      });
   
   };
 
    // =========================
    // CONSULTATION
    // =========================
 
    const goToConsultation =
    (item) => {
 
       setStorage(
 
          "selectedHairstyle",
 
          item
       );
 
       navigate("/consultation");
    };
 
    return {
 
       goToDetail,
 
       goToTryOn,
 
       goToConsultation
    };
 }