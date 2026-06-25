function Modal({

    open,
 
    onClose,
 
    children
 
 }) {
 
    if (!open) {
 
       return null;
    }
 
    return (
 
       <div
          style={{
 
             position:
                "fixed",
 
             inset: 0,
 
             background:
                "rgba(0,0,0,0.65)",
 
             display:
                "flex",
 
             justifyContent:
                "center",
 
             alignItems:
                "center",
 
             zIndex:
                9999,
 
             padding:
                "24px"
          }}
       >
 
          <div
             style={{
 
                width: "100%",
 
                maxWidth: "600px",
 
                background:
                   "#1e293b",
 
                borderRadius:
                   "24px",
 
                padding:
                   "32px",
 
                position:
                   "relative",
 
                border:
                   "1px solid rgba(255,255,255,0.08)"
             }}
          >
 
             <button
                onClick={onClose}
                style={{
 
                   position:
                      "absolute",
 
                   top: "20px",
 
                   right: "20px",
 
                   background:
                      "transparent",
 
                   color:
                      "#ffffff",
 
                   fontSize:
                      "22px"
                }}
             >
 
                ×
 
             </button>
 
             {children}
 
          </div>
 
       </div>
    );
 }
 
 export default Modal;