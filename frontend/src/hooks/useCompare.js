import {

    useLocation,
 
    useNavigate
 
 } from "react-router-dom";
 
 export default function
 useCompare() {
 
    const location =
       useLocation();
 
    const navigate =
       useNavigate();
 
       const {
         compareItems = [],
         capturedImage,
         preference
      } = location.state || {};
 
    // =========================
    // TRY ON
    // =========================
 
    const handleTryOn =
    (
 
       hairstyle
 
    ) => {
 
       navigate(
 
          "/try-on",
 
          {
 
             state: {
               hairstyle,
               capturedImage,
               preference
             }
          }
       );
    };
 
    // =========================
    // CONSULTATION
    // =========================
 
    const handleConsultation =
    (
 
       hairstyle
 
    ) => {
 
       navigate(
 
          "/consultation",
 
          {
 
             state: {
 
               hairstyle,
               capturedImage,
               preference
             }
          }
       );
    };
 
    // =========================
    // DETAIL
    // =========================
 
    const handleDetail =
    (
 
       hairstyle
 
    ) => {
 
       navigate(
 
          "/hairstyle-detail",
 
          {
 
             state: {
 
               hairstyle,
               capturedImage,
               preference
             }
          }
       );
    };
 
    return {
 
       compareItems,
 
       handleTryOn,
 
       handleConsultation,
 
       handleDetail
    };
 }