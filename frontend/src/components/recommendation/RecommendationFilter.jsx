function RecommendationFilter({ filters, selected, onChange }) {
   return (
     <div className="rec-filters">
       {filters.map((f, i) => (
         <button
           key={i}
           onClick={() => onChange(f)}
           className={`rec-filter-btn${selected === f ? " rec-filter-btn--active" : ""}`}
         >
           {f}
         </button>
       ))}
     </div>
   );
 }
 
 export default RecommendationFilter;