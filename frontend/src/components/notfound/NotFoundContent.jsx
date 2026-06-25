function NotFoundContent() {

    return (
 
       <div>
 
          {/* 404 */}
 
          <h1
             style={{
 
                fontSize: "140px",
 
                fontWeight: "bold",
 
                marginBottom: "10px",
 
                color: "#38bdf8"
             }}
          >
 
             404
 
          </h1>
 
          {/* TITLE */}
 
          <h2
             style={{
 
                fontSize: "42px",
 
                marginBottom: "20px"
             }}
          >
 
             Page Not Found
 
          </h2>
 
          {/* DESCRIPTION */}
 
          <p
             style={{
 
                color: "#94a3b8",
 
                lineHeight: "1.8",
 
                maxWidth: "500px",
 
                margin: "0 auto"
             }}
          >
 
             The page you are
             looking for does not
             exist or may have been
             moved.
 
          </p>
 
       </div>
    );
 }
 
 export default NotFoundContent;