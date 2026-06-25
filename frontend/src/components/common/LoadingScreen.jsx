import Spinner
from "../ui/Spinner";

function LoadingScreen({

   title = "Loading...",

   description =
      "Please wait while the AI processes your request."

}) {

   return (

      <div
         style={{

            minHeight:
               "100vh",

            display:
               "flex",

            justifyContent:
               "center",

            alignItems:
               "center",

            padding:
               "24px"
         }}
      >

         <div
            className="glass scale-in"
            style={{

               width: "100%",

               maxWidth:
                  "500px",

               padding:
                  "50px 40px",

               borderRadius:
                  "28px",

               textAlign:
                  "center"
            }}
         >

            {/* SPINNER */}

            <div
               style={{

                  display:
                     "flex",

                  justifyContent:
                     "center",

                  marginBottom:
                     "28px"
               }}
            >

               <div
                  style={{

                     width: "70px",

                     height: "70px",

                     borderRadius:
                        "50%",

                     background:
                        "rgba(59,130,246,0.12)",

                     display:
                        "flex",

                     justifyContent:
                        "center",

                     alignItems:
                        "center"
                  }}
               >

                  <Spinner />

               </div>

            </div>

            {/* TITLE */}

            <h2
               style={{
                  marginBottom: "16px"
               }}
            >

               {title}

            </h2>

            {/* DESCRIPTION */}

            <p>

               {description}

            </p>

         </div>

      </div>
   );
}

export default LoadingScreen;