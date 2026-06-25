import Card
from "../ui/Card";

import CompareSpecs
from "./CompareSpecs";

import CompareActions
from "./CompareActions";

function CompareCard({

   hairstyle,

   onTryOn,

   onConsultation,

   onDetail

}) {

   return (

      <Card>

         {/* IMAGE */}

         <img

            src={`http://127.0.0.1:8000/images/${hairstyle.image}`}

            alt={hairstyle.name}

            style={{

               width: "100%",

               height: "320px",

               objectFit: "cover",

               borderRadius: "20px",

               marginBottom: "24px"
            }}
         />

         {/* TITLE */}

         <h2
            style={{
               marginBottom: "10px"
            }}
         >

            {hairstyle.name}

         </h2>

         {/* SCORE */}

         <div
            style={{

               color: "#38bdf8",

               marginBottom: "18px",

               fontWeight: "bold"
            }}
         >

            Compatibility:
            {" "}
            {hairstyle.compatibility_rank}

         </div>

         {/* REASON */}

         <p
            style={{

               color: "#cbd5e1",

               lineHeight: "1.8",

               marginBottom: "24px"
            }}
         >

            {hairstyle.reason}

         </p>

         {/* SPECS */}

         <CompareSpecs

            hairstyle={
               hairstyle
            }

         />

         {/* ACTIONS */}

         <CompareActions

            onTryOn={() =>
               onTryOn(
                  hairstyle
               )
            }

            onConsultation={() =>
               onConsultation(
                  hairstyle
               )
            }

            onDetail={() =>
               onDetail(
                  hairstyle
               )
            }

         />

      </Card>
   );
}

export default CompareCard;