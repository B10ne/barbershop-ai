function HairstyleInfoCard({ hairstyle }) {

   return (
      <div className="hairstyle-info-card">

         <p style={{ fontSize: 11, fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: ".5px", margin: "0 0 6px" }}>
            Hairstyle
         </p>

         <h2>{hairstyle.name}</h2>

         <div className="match-badge">
            {hairstyle.match_level}
         </div>

         <p className="view-style-link">
            View Style Details →
         </p>

         <p className="hairstyle-description">
            {hairstyle.reason}
         </p>

         <div className="detail-tags">
            {hairstyle.style_tags?.map((tag, index) => (
               <span key={index} className="detail-tag">
                  {tag}
               </span>
            ))}
         </div>

         <div className="detail-specs">
            <div className="detail-spec">
               <span>Hair Type</span>
               <strong>{hairstyle.hair_types?.join(", ")}</strong>
            </div>
            <div className="detail-spec">
               <span>Maintenance</span>
               <strong>{hairstyle.maintenance}</strong>
            </div>
            <div className="detail-spec">
               <span>Formality</span>
               <strong>{hairstyle.formality}</strong>
            </div>
            <div className="detail-spec">
               <span>Profession</span>
               <strong>{hairstyle.professions?.join(", ")}</strong>
            </div>
         </div>

      </div>
   );
}

export default HairstyleInfoCard;