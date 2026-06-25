import { useNavigate } from "react-router-dom";

function TryOnHeader({ generatedImage }) {

   const navigate = useNavigate();

   const handleDownload = () => {
      if (!generatedImage) return;
      const link = document.createElement("a");
      link.href = generatedImage;
      link.download = "hairstyle-preview.png";
      link.click();
   };

   return (
      <div className="tryon-header">

         <button
            className="tryon-back-btn"
            onClick={() => navigate(-1)}
         >
            ← Back
         </button>

         <div className="tryon-header-center">
            <h1 className="tryon-title">
               AI Hairstyle Try-On
            </h1>
            <p className="tryon-subtitle">
               See how the hairstyle looks on you
            </p>
         </div>

         <button
            className="tryon-download-header-btn"
            disabled={!generatedImage}
            onClick={handleDownload}
         >
            ↓ Download
         </button>

      </div>
   );
}

export default TryOnHeader;