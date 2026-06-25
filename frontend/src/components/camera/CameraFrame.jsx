function CameraFrame({

   children,
   progress,
   analysisSuccess

}) {

   const radius = 190;

   const circumference =
      2 * Math.PI * radius;

   const offset =
      circumference -
      (progress / 100)
      * circumference;

   return (

      <div className="camera-wrapper">

         {

            !analysisSuccess && (

               <>

                  <svg
                     className="progress-ring"
                     width="430"
                     height="430"
                  >

                     <circle

                        className="ring-background"

                        cx="215"
                        cy="215"
                        r={radius}

                     />

                     <circle

                        className="ring-progress"

                        cx="215"
                        cy="215"
                        r={radius}

                        style={{

                           strokeDasharray:
                              circumference,

                           strokeDashoffset:
                              offset

                        }}

                     />

                  </svg>

                  <div
                     className="camera-circle"
                  >

                     {children}

                  </div>

                  <div
                     className="progress-text"
                  >

                     {progress}%

                  </div>

               </>

            )

         }

         {

            analysisSuccess && (

               <div
                  className="
                  analysis-complete
                  "
               >

                  {children}

               </div>

            )

         }

      </div>

   );

}

export default CameraFrame;