import React from "react";

function FacePreviewCard({

   capturedImage,

   faceShape,

   confidence

}) {

   return (

      <div className="face-preview-card">

         <div className="preview-image-wrapper">

            {

               capturedImage

               ? (

                  <img

                     src={
                        capturedImage
                     }

                     alt="Captured Face"

                     className="preview-face-image"

                  />

               )

               : (

                  <div className="preview-placeholder">

                     No Image Available

                  </div>

               )

            }

         </div>

         <div className="preview-analysis-panel">

            <div className="analysis-label">

               Face Shape

            </div>

            <div className="analysis-shape">

               {

                  faceShape

                  ? faceShape.toUpperCase()

                  : "NOT ANALYZED"

               }

            </div>

            <div className="analysis-confidence">

               Confidence

            </div>

            <div className="confidence-row">

               <div className="confidence-bar">

                  <div

                     className="confidence-fill"

                     style={{

                        width:

                        `${
                           confidence || 0
                        }%`

                     }}

                  />

               </div>

               <span>

                  {

                     confidence

                     ? `${Number(
                          confidence
                       ).toFixed(
                          2
                       )}%`

                     : "--"

                  }

               </span>

            </div>

         </div>

      </div>

   );

}

export default FacePreviewCard;