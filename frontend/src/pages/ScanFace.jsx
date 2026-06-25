import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Webcam from "react-webcam";
import * as faceapi from "face-api.js";
import { CheckCircle } from "lucide-react";

import ScanHeader from "../components/camera/ScanHeader";
import CameraFrame from "../components/camera/CameraFrame";
import ScanStatus from "../components/camera/ScanStatus";
import ScanProgress from "../components/camera/ScanProgress";

import "../styles/pages/scan.css";

function ScanFace() {

   const navigate = useNavigate();

   const webcamRef = useRef(null);

   const [modelsLoaded, setModelsLoaded] =
      useState(false);

   const [faceDetected, setFaceDetected] =
      useState(false);

   const [centered, setCentered] =
      useState(false);

   const [goodLighting, setGoodLighting] =
      useState(true);

   const [progress, setProgress] =
      useState(0);

   const [isScanning, setIsScanning] =
      useState(false);

   const [analysisSuccess, setAnalysisSuccess] =
      useState(false);

   const [status, setStatus] =
      useState("Loading AI Models...");
      const [showCamera, setShowCamera] =
   useState(true);
   const [analysisStarted, setAnalysisStarted] =
   useState(false);

   /*
   ============================
   LOAD FACE API MODELS
   ============================
   */

   useEffect(() => {

      const loadModels = async () => {

         try {

            await faceapi.nets
               .tinyFaceDetector
               .loadFromUri("/models");

            await faceapi.nets
               .faceLandmark68Net
               .loadFromUri("/models");

            setModelsLoaded(true);

            setStatus(
               "Waiting for Face..."
            );

         }

         catch (error) {

            console.error(error);

            setStatus(
               "Failed to load AI models"
            );

         }

      };

      loadModels();

   }, []);

   /*
   ============================
   FACE DETECTION LOOP
   ============================
   */

   useEffect(() => {

      if (!modelsLoaded) return;

      const interval =
      setInterval(async () => {

         if (
            !webcamRef.current ||
            !webcamRef.current.video
         ) {
            return;
         }

         const video =
            webcamRef.current.video;

         if (
            video.readyState !== 4
         ) {
            return;
         }

         const detection =

            await faceapi

            .detectSingleFace(

               video,

               new faceapi
                  .TinyFaceDetectorOptions()

            )

            .withFaceLandmarks();

         if (!detection) {

            setFaceDetected(false);
            setCentered(false);

            return;
         }

         setFaceDetected(true);

         const box =
            detection.detection.box;

         const faceCenterX =
            box.x +
            box.width / 2;

         const frameCenterX =
            video.videoWidth / 2;

         const centeredFace =

            Math.abs(
               faceCenterX -
               frameCenterX
            ) < 80;

         setCentered(centeredFace);

         /*
         sementara lighting
         selalu true

         nanti bisa ditambah
         brightness analysis
         */

         setGoodLighting(true);

      }, 300);

      return () =>
         clearInterval(interval);

   }, [modelsLoaded]);

   /*
/*
============================
START SCAN
============================
*/

useEffect(() => {

   if (
      !faceDetected ||
      !centered ||
      !goodLighting
   ) {
      return;
   }

   if (isScanning) {
      return;
   }

   setStatus(
      "Scanning Face..."
   );

   setIsScanning(true);

}, [

   faceDetected,
   centered,
   goodLighting

]);

/*
============================
AUTO CAPTURE
============================
*/

useEffect(() => {

   if (!isScanning) {
      return;
   }

   if (progress >= 100) {

      setAnalysisStarted(true);

      captureAndAnalyze();

      return;
   }

   const timer = setTimeout(() => {

      setProgress(prev =>
         Math.min(prev + 2, 100)
      );

   }, 80);

   return () => clearTimeout(timer);

}, [

   isScanning,
   progress

]);
   /*
   ============================
   CAPTURE + ANALYSIS
   ============================
   */

   const captureAndAnalyze = async () => {

      const image =
         webcamRef.current
         ?.getScreenshot();
   
      console.log(
         "SCREENSHOT:",
         image
      );
   
      if (!image) {
   
         console.log(
            "SCREENSHOT FAILED"
         );
   
         return;
      }
   
      localStorage.setItem(
         "capturedImage",
         image
      );
   
      console.log(
         "IMAGE SAVED"
      );
   
      console.log(
         localStorage.getItem(
            "capturedImage"
         )
      );
   
      setStatus(
         "Analyzing Face..."
      );
   
      await new Promise(
         resolve =>
         setTimeout(resolve, 2500)
      );
   
      setAnalysisSuccess(true);
   
      setStatus(
         "Face Successfully Analyzed"
      );
   
      setTimeout(() => {
   
         navigate("/result");
   
      }, 1500);
   
   
      localStorage.setItem(
         "capturedImage",
         JSON.stringify(image)
      );
   
      console.log(
         "Image saved"
      );
   
      setStatus(
         "Analyzing Face..."
      );
   
      await new Promise(
         resolve =>
         setTimeout(
            resolve,
            2500
         )
      );
   
      setAnalysisSuccess(true);
   
      setStatus(
         "Face Successfully Analyzed"
      );
   
      setTimeout(() => {
         console.log(
            localStorage.getItem(
               "capturedImage"
            )
         );
   
         navigate("/result");
   
      }, 1500);
   
   };

   return (

      <section
         className="scan-page"
      >

         <ScanHeader />

         <div
            className="scan-wrapper"
         >

<CameraFrame
   progress={progress}
   analysisSuccess={analysisStarted}
>
   {

      !analysisStarted && (

         <Webcam

            ref={webcamRef}

            mirrored

            audio={false}

            screenshotFormat="image/jpeg"

            videoConstraints={{

               width: 1280,
               height: 720,
               facingMode: "user"

            }}

            style={{

               width: "100%",
               height: "100%",
               objectFit: "cover"

            }}

         />

      )

   }

   {

      analysisStarted && (

         <div className="camera-success-overlay">

            <CheckCircle size={100} />

            <h2>
               Face Successfully
               Analyzed
            </h2>

         </div>

      )

   }

</CameraFrame>
{
   !analysisStarted && (

      <ScanStatus

         faceDetected={
            faceDetected
         }

         centered={
            centered
         }

         lighting={
            goodLighting
         }

      />

   )
}

{
   !analysisStarted && (

      <ScanProgress

         progress={progress}

         status={status}

      />

   )
}
         </div>

      </section>

   );

}

export default ScanFace;