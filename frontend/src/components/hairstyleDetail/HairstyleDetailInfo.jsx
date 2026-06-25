function HairstyleDetailInfo({ hairstyle }) {
   return (
     <div className="detail-name-row">
       <div>
         <h1 className="detail-title">{hairstyle?.name}</h1>
         <p className="detail-subtitle">Best suited for your face shape</p>
       </div>
       {hairstyle?.compatibility_rank && (
         <span className="detail-match-pill">{hairstyle.compatibility_rank}% Match</span>
       )}
     </div>
   );
 }
 
 export default HairstyleDetailInfo;