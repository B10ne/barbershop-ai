import {

    useRef
 
 } from "react";
 
 export default function
 useCamera() {
 
    // =========================
    // REF
    // =========================
 
    const webcamRef =
       useRef(null);
 
    // =========================
    // CAPTURE IMAGE
    // =========================
 
    const captureImage =
    () => {
 
       if (!webcamRef.current) {
 
          return null;
       }
 
       return webcamRef
       .current
       .getScreenshot();
    };
 
    return {
 
       webcamRef,
 
       captureImage
    };
 }