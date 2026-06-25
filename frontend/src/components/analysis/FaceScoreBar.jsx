import ProgressBar
from "../ui/ProgressBar";

function FaceScoreBar({

   scores

}) {

   return (

      <div
         style={{
            marginTop: "30px"
         }}
      >

         <h2
            style={{
               marginBottom: "24px",
               fontSize: "28px",
               fontWeight: "700"
            }}
         >

            Face Shape Confidence

         </h2>

         {

            Object.entries(scores)

            .sort((a, b) => b[1] - a[1])

            .map(

               ([shape, score]) => (

                  <div
                     key={shape}

                     style={{
                        marginBottom: "22px"
                     }}
                  >

                     {/* LABEL */}

                     <div
                        style={{

                           display: "flex",

                           justifyContent:
                              "space-between",

                           marginBottom:
                              "10px"
                        }}
                     >

                        <span
                           style={{
                              textTransform:
                                 "capitalize",

                              fontWeight:
                                 "600"
                           }}
                        >

                           {shape}

                        </span>

                        <span
                           style={{
                              color: "#94a3b8"
                           }}
                        >

                           {
                              score.toFixed(0)
                           }%

                        </span>

                     </div>

                     {/* PROGRESS */}

                     <ProgressBar
                        value={score}
                     />

                  </div>
               )
            )
         }

      </div>
   );
}

export default FaceScoreBar;