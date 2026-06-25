function Badge({

    children,
 
    variant = "primary"
 
 }) {
 
    // =========================
    // VARIANT COLORS
    // =========================
 
    const variants = {
 
       primary: {
 
          background:
             "rgba(59,130,246,0.18)",
 
          color:
             "#93c5fd",
 
          border:
             "1px solid rgba(59,130,246,0.25)"
       },
 
       success: {
 
          background:
             "rgba(34,197,94,0.18)",
 
          color:
             "#86efac",
 
          border:
             "1px solid rgba(34,197,94,0.25)"
       },
 
       warning: {
 
          background:
             "rgba(251,191,36,0.18)",
 
          color:
             "#fde68a",
 
          border:
             "1px solid rgba(251,191,36,0.25)"
       },
 
       error: {
 
          background:
             "rgba(239,68,68,0.18)",
 
          color:
             "#fca5a5",
 
          border:
             "1px solid rgba(239,68,68,0.25)"
       },
 
       neutral: {
 
          background:
             "rgba(148,163,184,0.15)",
 
          color:
             "#cbd5e1",
 
          border:
             "1px solid rgba(148,163,184,0.2)"
       }
    };
 
    const currentStyle =
 
       variants[variant]
 
       ||
 
       variants.primary;
 
    return (
 
       <span
          style={{
 
             display:
                "inline-flex",
 
             alignItems:
                "center",
 
             justifyContent:
                "center",
 
             padding:
                "8px 14px",
 
             borderRadius:
                "999px",
 
             fontSize:
                "14px",
 
             fontWeight:
                "600",
 
             backdropFilter:
                "blur(10px)",
 
             ...currentStyle
          }}
       >
 
          {children}
 
       </span>
    );
 }
 
 export default Badge;