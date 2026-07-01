import {
   Sparkles
} from "lucide-react";

export default function PreviewCard({

   hairstyle,

   generatedImage

}) {

   const previewImage = generatedImage

      ? generatedImage

      : `http://127.0.0.1:8000/images/${hairstyle.image}`;

   return (

      <div className="comparison-card">

         <div className="comparison-header">

            <div>

               <h3 className="comparison-label">

                  {generatedImage

                     ? "AI Try-On Result"

                     : "Selected Hairstyle"}

               </h3>

               <p className="comparison-subtitle">

                  {generatedImage

                     ? "AI generated hairstyle preview"

                     : "This hairstyle will be applied to your photo"}

               </p>

            </div>

            <span
               className={
                  generatedImage
                     ? "comparison-status success"
                     : "comparison-status preview"
               }
            >

               <Sparkles
                  size={14}
               />

               {generatedImage

                  ? "Generated"

                  : "Preview"}

            </span>

         </div>

         <div className="comparison-preview">

            <img

               src={previewImage}

               alt={hairstyle.name}

               className="ai-result-image"

               draggable={false}

            />

         </div>

      </div>

   );

}