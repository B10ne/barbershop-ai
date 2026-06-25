function ErrorMessage({

    message
 
 }) {
 
    if (!message) {
 
       return null;
    }
 
    return (
 
       <div
          style={{
 
             padding:
                "16px",
 
             borderRadius:
                "16px",
 
             background:
                "rgba(239,68,68,0.15)",
 
             border:
                "1px solid rgba(239,68,68,0.25)",
 
             color:
                "#fca5a5"
          }}
       >
 
          {message}
 
       </div>
    );
 }
 
 export default ErrorMessage;