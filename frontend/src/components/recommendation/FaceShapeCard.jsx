import {
   CircularProgressbar,
   buildStyles
} from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";

function FaceShapeCard({

   faceShape,

   confidence,

   recommendations = []

}) {

   const descriptions = {

      oval:
         "Balanced face proportions suitable for most hairstyles.",

      rectangle:
         "Longer face shape with strong facial structure.",

      round:
         "Soft jawline with balanced width and height.",

      square:
         "Strong jawline and masculine facial features."

   };

   const bestStyles =
      recommendations.slice(0, 3);

   return (

      <div className="summary-card face-shape-card">

         {/* HEADER */}

         <div>

            <h3>
               Face Shape
            </h3>

            <div className="shape-name">
               {faceShape}
            </div>

         </div>

         {/* CONFIDENCE */}

         <div className="donut-section">

            <div className="shape-meta">

               <span>
                  Confidence
               </span>

               <h2>

                  {Number(
                     confidence || 0
                  ).toFixed(2)}%

               </h2>

            </div>

            <div className="donut-wrapper">

               <CircularProgressbar

                  value={
                     confidence || 0
                  }

                  text={`${Math.round(
                     confidence || 0
                  )}%`}

                  styles={buildStyles({

                     pathColor:
                        "#3b82f6",

                     textColor:
                        "#0f172a",

                     trailColor:
                        "#e2e8f0"

                  })}

               />

            </div>

         </div>

         {/* DESCRIPTION */}

         <p className="shape-description">

            {
               descriptions[
                  faceShape?.toLowerCase()
               ]
            }

         </p>

         {/* BEST HAIRSTYLES */}

         <div className="shape-insights">

<h4>
   Best Hairstyles
</h4>

{

   bestStyles.map(

      (item,index) => (

         <div

            key={index}

            className="hairstyle-button"

         >

            {item.name}

         </div>

      )

   )

}

</div>

      </div>

   );

}

export default FaceShapeCard;