function Spinner() {

    return (
 
       <div
          style={{
 
             width: "18px",
 
             height: "18px",
 
             border:
                "2px solid rgba(255,255,255,0.3)",
 
             borderTop:
                "2px solid #ffffff",
 
             borderRadius:
                "50%",
 
             animation:
                "spin 0.8s linear infinite"
          }}
       />
    );
 }
 
 export default Spinner;