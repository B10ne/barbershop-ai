function HairstyleDetailActions({ onTryOn, onConsultation }) {
   return (
     <div className="detail-actions">
       <button className="detail-primary-btn" onClick={onTryOn}>
         ✦ Try On This Style
       </button>
       <button className="detail-secondary-btn" onClick={onConsultation}>
         ☎ Book Consultation
       </button>
     </div>
   );
 }
 
 export default HairstyleDetailActions;