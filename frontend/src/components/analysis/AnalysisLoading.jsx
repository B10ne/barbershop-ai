import { useEffect, useState } from "react";
import Spinner from "../ui/Spinner";

function AnalysisLoading({
   title = "AI Analyzing Face...",
   description = "Preparing personalized hairstyle recommendations..."
}) {

   const messages = [
      "Detecting facial landmarks...",
      "Analyzing face shape...",
      "Finding matching hairstyles...",
      "Preparing recommendations..."
   ];

   const [messageIndex, setMessageIndex] = useState(0);

   useEffect(() => {

      const interval = setInterval(() => {

         setMessageIndex((prev) =>

            prev === messages.length - 1 ? 0 : prev + 1

         );

      }, 1800);

      return () => clearInterval(interval);

   }, []);

   return (

      <div
         style={{
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "40px",
            background:
               "linear-gradient(180deg,#0f172a 0%,#111827 100%)"
         }}
      >

         <div
            className="glass scale-in"
            style={{
               width: "100%",
               maxWidth: "580px",
               padding: "60px",
               borderRadius: "28px",
               textAlign: "center",
               border: "1px solid rgba(255,255,255,.08)",
               boxShadow:
                  "0 20px 80px rgba(0,0,0,.45)"
            }}
         >

            {/* Logo */}

            <div
               style={{
                  fontSize: 46,
                  marginBottom: 12
               }}
            >
               ✂
            </div>

            <h1
               style={{
                  color: "#fff",
                  fontWeight: 700,
                  marginBottom: 40,
                  fontSize: 30
               }}
            >
               HairVision AI
            </h1>

            {/* Spinner */}

            <div
               style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: 35
               }}
            >

               <div
                  style={{
                     width: 95,
                     height: 95,
                     borderRadius: "50%",
                     background:
                        "rgba(59,130,246,.15)",
                     display: "flex",
                     justifyContent: "center",
                     alignItems: "center"
                  }}
               >

                  <Spinner size={52} />

               </div>

            </div>

            <h2
               style={{
                  color: "#fff",
                  fontSize: 34,
                  fontWeight: 700,
                  marginBottom: 15
               }}
            >
               {title}
            </h2>

            <p
               style={{
                  color: "#9ca3af",
                  fontSize: 16,
                  lineHeight: 1.7,
                  marginBottom: 28
               }}
            >
               {description}
            </p>

            {/* Status */}

            <p
               style={{
                  color: "#60a5fa",
                  fontWeight: 600,
                  marginBottom: 24
               }}
            >
               {messages[messageIndex]}
            </p>

            {/* Progress */}

            <div
               style={{
                  width: "100%",
                  height: 10,
                  borderRadius: 999,
                  overflow: "hidden",
                  background: "#1f2937"
               }}
            >

               <div
                  className="loading-progress"
                  style={{
                     height: "100%",
                     background:
                        "linear-gradient(90deg,#2563eb,#60a5fa)"
                  }}
               />

            </div>

            <p
               style={{
                  marginTop: 18,
                  color: "#6b7280",
                  fontSize: 14
               }}
            >
               Usually takes 5–10 seconds
            </p>

         </div>

      </div>

   );

}

export default AnalysisLoading;