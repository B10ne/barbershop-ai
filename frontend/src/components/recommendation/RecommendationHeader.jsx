function RecommendationHeader({

    total
 
 }) {
 
    return (
 
       <div
          style={{
             marginTop: "50px",
             marginBottom: "25px"
          }}
       >
 
          <h2
             style={{
                fontSize: "32px",
                fontWeight: "700"
             }}
          >
 
             Recommended Hairstyles
 
          </h2>
 
          <p
             style={{
                marginTop: "10px",
                color: "#94a3b8",
                lineHeight: "1.7"
             }}
          >
 
             AI selected
 
             {" "}
 
             <b>{total}</b>
 
             {" "}
 
             hairstyles that best
             match your facial
             structure and preferences.
 
          </p>
 
       </div>
    );
 }
 
 export default RecommendationHeader;