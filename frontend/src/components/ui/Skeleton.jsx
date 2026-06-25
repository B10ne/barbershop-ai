function Skeleton({

    height = "20px",
 
    width = "100%"
 
 }) {
 
    return (
 
       <div
          style={{
 
             width,
 
             height,
 
             borderRadius:
                "12px",
 
             background:
                "linear-gradient(to right, #1e293b, #334155, #1e293b)",
 
             backgroundSize:
                "200% 100%",
 
             animation:
                "skeleton-loading 1.5s infinite"
          }}
       />
    );
 }
 
 export default Skeleton;