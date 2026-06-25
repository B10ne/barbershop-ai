function HairstyleSpecs({

    hairstyle
 
 }) {
 
    return (
 
       <div
          style={{
 
             display: "grid",
 
             gridTemplateColumns:
                "repeat(auto-fit, minmax(220px, 1fr))",
 
             gap: "20px",
 
             marginTop: "30px"
          }}
       >
 
          <div>
             <p>Maintenance</p>
             <h3>
                {
                   hairstyle.maintenance
                }
             </h3>
          </div>
 
          <div>
             <p>Formality</p>
             <h3>
                {
                   hairstyle.formality
                }
             </h3>
          </div>
 
          <div>
             <p>Hair Types</p>
             <h3>
                {
                   hairstyle.hair_types
                   ?.join(", ")
                }
             </h3>
          </div>
 
       </div>
    );
 }
 
 export default HairstyleSpecs;