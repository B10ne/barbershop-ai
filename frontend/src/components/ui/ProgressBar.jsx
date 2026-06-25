function ProgressBar({

    value = 0
 
 }) {
 
    return (
 
       <div
          style={{
 
             width: "100%",
 
             height: "12px",
 
             background:
                "#334155",
 
             borderRadius:
                "999px",
 
             overflow:
                "hidden"
          }}
       >
 
          <div
             style={{
 
                width:
                   `${value}%`,
 
                height:
                   "100%",
 
                background:
                   "linear-gradient(to right, #3b82f6, #38bdf8)",
 
                borderRadius:
                   "999px",
 
                transition:
                   "0.4s ease"
             }}
          />
 
       </div>
    );
 }
 
 export default ProgressBar;