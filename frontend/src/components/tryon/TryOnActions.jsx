function TryOnActions({
   generating,
   generatedImage,
   hairstyle,
   onGenerate
}) {

   const handleDownload = () => {
      if (!generatedImage) return;
      const link = document.createElement("a");
      link.href = generatedImage;
      link.download = "hairstyle-preview.png";
      link.click();
   };

   const handleShare = () => {
      if (navigator.share && generatedImage) {
         navigator.share({
            title: `${hairstyle?.name} Hairstyle`,
            text: "Check out my new hairstyle!",
            url: window.location.href,
         }).catch(() => {});
      }
   };

   return (
      <div className="tryon-actions">

         <button
            className="tryon-primary-btn"
            disabled={generating}
            onClick={onGenerate}
         >
            {generating ? "Generating…" : "Generate AI Try-On"}
         </button>

         {generatedImage && (
            <button
               className="tryon-secondary-btn"
               onClick={handleDownload}
            >
               ↓ Save Result
            </button>
         )}

         <button
            className="consultation-btn"
            onClick={handleShare}
         >
            ⤴ Share
         </button>

      </div>
   );
}

export default TryOnActions;