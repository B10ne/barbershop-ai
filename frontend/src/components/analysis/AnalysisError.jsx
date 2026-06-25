function AnalysisError({

    error
 
 }) {
 
    if (!error) {
 
       return null;
    }
 
    return (
 
       <div
          style={{
             background:
                "#450a0a",
 
             color:
                "#fecaca",
 
             padding:
                "16px",
 
             borderRadius:
                "12px",
 
             marginTop:
                "20px"
          }}
       >
 
          {error}
 
       </div>
    );
 }
 
 export default AnalysisError;