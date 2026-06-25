import Spinner
from "../ui/Spinner";

function AnalysisLoading() {

   return (

      <div
         style={{

            position: "fixed",

            inset: 0,

            background:
               "rgba(2, 6, 23, 0.92)",

            backdropFilter:
               "blur(8px)",

            display: "flex",

            alignItems: "center",

            justifyContent: "center",

            zIndex: 9999
         }}
      >

         <div
            style={{

               textAlign: "center",

               color: "white"
            }}
         >

            <Spinner />

            <h2
               style={{

                  fontSize: "32px",

                  fontWeight: "700",

                  marginTop: "30px",

                  marginBottom: "16px"
               }}
            >

               AI Analyzing Face...

            </h2>

            <p
               style={{

                  color: "#94a3b8",

                  maxWidth: "420px",

                  lineHeight: "1.8"
               }}
            >

               Processing facial
               structure, hairstyle
               compatibility, and
               personalized recommendations.

            </p>

         </div>

      </div>
   );
}

export default AnalysisLoading;