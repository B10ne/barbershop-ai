function Button({

    children,
 
    onClick,
 
    type = "button"
 
 }) {
 
    return (
 
       <button
 
          type={type}
 
          onClick={onClick}
 
          style={{
 
             padding:
                "14px 24px",
 
             background:
                "linear-gradient(to right, #3b82f6, #38bdf8)",
 
             color:
                "white",
 
             borderRadius:
                "16px",
 
             fontWeight:
                "600",
 
             transition:
                "0.25s",
 
             boxShadow:
                "0 10px 30px rgba(59,130,246,0.25)"
          }}
       >
 
          {children}
 
       </button>
    );
 }
 
 export default Button;