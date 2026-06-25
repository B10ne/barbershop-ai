function CompareSpecs({

    hairstyle
 
 }) {
 
    return (
 
       <div
          style={{
 
             display: "grid",
 
             gridTemplateColumns:
                "repeat(2, 1fr)",
 
             gap: "14px",
 
             marginBottom: "28px"
          }}
       >
 
          <SpecItem
 
             title="Maintenance"
 
             value={
                hairstyle.maintenance
             }
 
          />
 
          <SpecItem
 
             title="Formality"
 
             value={
                hairstyle.formality
             }
 
          />
 
          <SpecItem
 
             title="Hair Types"
 
             value={
                hairstyle.hair_types
                .join(", ")
             }
 
          />
 
          <SpecItem
 
             title="Length"
 
             value={
                hairstyle.preferred_length
             }
 
          />
 
       </div>
    );
 }
 
 function SpecItem({
 
    title,
 
    value
 
 }) {
 
    return (
 
       <div
          style={{
 
             background:
                "#1e293b",
 
             padding:
                "14px",
 
             borderRadius:
                "14px"
          }}
       >
 
          <div
             style={{
                color: "#94a3b8",
                fontSize: "14px"
             }}
          >
 
             {title}
 
          </div>
 
          <div
             style={{
                marginTop: "8px"
             }}
          >
 
             {value}
 
          </div>
 
       </div>
    );
 }
 
 export default CompareSpecs;