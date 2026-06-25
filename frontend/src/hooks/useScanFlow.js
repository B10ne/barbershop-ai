import {

    useNavigate
 
 } from "react-router-dom";
 
 import {
 
    setStorage
 
 } from "../utils/localStorage";
 
 export default function
 useScanFlow() {
 
    const navigate =
       useNavigate();
 
    // =========================
    // START ANALYSIS
    // =========================
 
    const startAnalysis =
    (
 
       image,
 
       preferences
 
    ) => {
 
       // =====================
       // VALIDATION
       // =====================
 
       if (!image) {
 
          alert(
             "Failed to capture image."
          );
 
          return;
       }
 
       // =====================
       // SAVE IMAGE
       // =====================
 
       setStorage(
 
          "capturedImage",
 
          image
       );
 
       // =====================
       // SAVE PREFERENCES
       // =====================
 
       setStorage(
 
          "userPreferences",
 
          preferences
       );
 
       // =====================
       // NAVIGATE
       // =====================
 
       navigate("/result");
    };
 
    return {
 
       startAnalysis
    };
 }