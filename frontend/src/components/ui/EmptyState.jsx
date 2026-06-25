function EmptyState({

    title = "No Data",
 
    description =
       "No content available."
 
 }) {
 
    return (
 
       <div
          style={{
 
             minHeight:
                "300px",
 
             display:
                "flex",
 
             flexDirection:
                "column",
 
             justifyContent:
                "center",
 
             alignItems:
                "center",
 
             textAlign:
                "center"
          }}
       >
 
          <h2
             style={{
                marginBottom: "14px"
             }}
          >
 
             {title}
 
          </h2>
 
          <p
             style={{
                maxWidth: "400px"
             }}
          >
 
             {description}
 
          </p>
 
       </div>
    );
 }
 
 export default EmptyState;