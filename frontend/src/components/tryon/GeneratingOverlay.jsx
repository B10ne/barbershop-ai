function GeneratingOverlay() {

   return (
      <div className="generating-overlay">

         <div className="generating-card">

            <div className="generating-spinner" />

            <h2>Generating Your Hairstyle</h2>

            <p>
               AI is creating a realistic hairstyle preview
               based on your selected style and facial features.
            </p>

            <div className="generating-steps">

               <div className="generating-step active">
                  ✓ Face Analysis Complete
               </div>

               <div className="generating-step active">
                  ✓ Hairstyle Selected
               </div>

               <div className="generating-step loading">
                  ⟳ Generating AI Image…
               </div>

               <div className="generating-step">
                  ○ Final Result
               </div>

            </div>

         </div>

      </div>
   );
}

export default GeneratingOverlay;