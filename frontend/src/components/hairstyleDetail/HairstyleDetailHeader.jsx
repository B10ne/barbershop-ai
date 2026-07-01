function HairstyleDetailHeader({ hairstyle, onBack }) {
   return (
    <div>
     <div className="scan-header">

       <h1>
       <span className="ai-gradient">
             <strong>Face</strong>
          </span>
           Scan
       </h1>

       <p>
          Position your face inside the frame
          for AI facial analysis
       </p>

    </div>
    <button className="detail-back-btn" onClick={onBack} aria-label="Back">
       &#8592;
     </button>
    </div>
   );
 }
 
 export default HairstyleDetailHeader;