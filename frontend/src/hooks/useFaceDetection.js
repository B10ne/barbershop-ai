import { useEffect } from "react";
import * as faceapi from "face-api.js";

export default function useFaceDetection(
   webcamRef,
   setFaceDetected
){

   useEffect(() => {

      const loadModels =
      async () => {

         await faceapi.nets
         .tinyFaceDetector
         .loadFromUri("/models");

         await faceapi.nets
         .faceLandmark68Net
         .loadFromUri("/models");
      };

      loadModels();

      const interval =
      setInterval(async () => {

         if(
            !webcamRef.current?.video
         ) return;

         const result =
         await faceapi.detectSingleFace(

            webcamRef.current.video,

            new faceapi
            .TinyFaceDetectorOptions()

         );

         setFaceDetected(
            !!result
         );

      },500);

      return () =>
      clearInterval(interval);

   },[]);
}