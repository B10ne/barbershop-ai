function HairstyleDetailSpecs({ hairstyle }) {
   const specs = [
     { label: "Maintenance",   value: hairstyle?.maintenance },
     { label: "Formality",     value: hairstyle?.formality },
     { label: "Hair Type",     value: hairstyle?.hair_types?.join(", ") },
     { label: "Styling Time",  value: hairstyle?.styling_time },
     { label: "Difficulty",    value: hairstyle?.difficulty },
     { label: "Best Season",   value: hairstyle?.best_season || "All Season" },
   ];
 
   return (
     <div className="detail-specs">
       {specs.map(({ label, value }) => value ? (
         <div key={label} className="detail-spec">
           <span>{label}</span>
           <strong>{value}</strong>
         </div>
       ) : null)}
     </div>
   );
 }
 
 export default HairstyleDetailSpecs;