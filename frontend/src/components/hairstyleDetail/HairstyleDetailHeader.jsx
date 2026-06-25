function HairstyleDetailHeader({ hairstyle, onBack }) {
   return (
     <button className="detail-back-btn" onClick={onBack} aria-label="Back">
       &#8592;
     </button>
   );
 }
 
 export default HairstyleDetailHeader;