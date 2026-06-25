function MatchBadge({

    value
 
 }) {
 
    return (
 
       <div
          style={{
             display: "inline-flex",
 
             alignItems: "center",
 
             gap: "8px",
 
             background:
                "#052e16",
 
             color:
                "#86efac",
 
             padding:
                "6px 14px",
 
             borderRadius:
                "999px",
 
             fontSize:
                "14px",
 
             fontWeight:
                "600"
          }}
       >
 
          <span>
 
             AI Match
 
          </span>
 
          <span>
 
             {value}%
 
          </span>
 
       </div>
    );
 }
 
 export default MatchBadge;