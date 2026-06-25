function Card({

    children
 
 }) {
 
    return (
 
       <div
          className="glass"
          style={{
 
             padding:
                "28px",
 
             borderRadius:
                "24px",
 
             boxShadow:
                "var(--shadow-card)"
          }}
       >
 
          {children}
 
       </div>
    );
 }
 
 export default Card;