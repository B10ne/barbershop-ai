import Card
from "../ui/Card";

function ConsultationPanel({

   hairstyle,

   consultation

}) {

   if (!consultation) {

      return null;
   }

   return (

      <Card>

         {/* HEADER */}

         <div
            style={{

               display: "flex",

               gap: "24px",

               alignItems: "center"
            }}
         >

            {/* IMAGE */}

            <img

               src={`http://127.0.0.1:8000/images/${hairstyle.image}`}

               alt={hairstyle.name}

               style={{

                  width: "180px",

                  height: "180px",

                  objectFit: "cover",

                  borderRadius: "24px"
               }}
            />

            {/* INFO */}

            <div>

               <h2
                  style={{

                     fontSize: "36px",

                     fontWeight: "700",

                     marginBottom: "14px"
                  }}
               >

                  {hairstyle.name}

               </h2>

               <p
                  style={{
                     color: "#94a3b8",
                     lineHeight: "1.8"
                  }}
               >

                  {
                     consultation.summary
                  }

               </p>

            </div>

         </div>

      </Card>
   );
}

export default ConsultationPanel;