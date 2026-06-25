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
 
       capturedImage
 
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
 
                capturedImage
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
 
                capturedImage
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
 
                capturedImage
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