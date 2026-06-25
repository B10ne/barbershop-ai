function ConsultationHeader({

    faceShape,
 
    hairstyle
 
 }) {
 
    return (
 
       <div
          style={{
 
             marginBottom:
                "32px"
          }}
       >
 
          <h1
             className="text-gradient"
             style={{
 
                marginBottom:
                   "14px"
             }}
          >
 
             AI Consultation Result
 
          </h1>
 
          <p>
 
             Personalized hairstyle
             consultation based on your
 
             <strong>
                {" "} {faceShape} {" "}
             </strong>
 
             face shape and selected
 
             <strong>
                {" "} {hairstyle}
             </strong>
 
             hairstyle.
 
          </p>
 
       </div>
    );
 }
 
 export default ConsultationHeader;