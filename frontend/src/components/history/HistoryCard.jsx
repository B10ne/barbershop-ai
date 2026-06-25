import Card
from "../ui/Card";

function HistoryCard({

   item

}) {

   return (

      <Card>

         {/* IMAGE */}

         {

            item.image && (

               <img

                  src={item.image}

                  alt={item.hairstyle}

                  style={{

                     width: "100%",

                     height: "260px",

                     objectFit: "cover",

                     borderRadius: "18px",

                     marginBottom: "18px"
                  }}
               />
            )
         }

         {/* TYPE */}

         <span
            style={{

               display: "inline-block",

               padding:
                  "6px 14px",

               borderRadius:
                  "999px",

               background:
                  "#2563eb",

               fontSize:
                  "13px",

               marginBottom:
                  "16px"
            }}
         >

            {item.type}

         </span>

         {/* TITLE */}

         <h2
            style={{
               marginBottom: "10px"
            }}
         >

            {item.hairstyle}

         </h2>

         {/* FACE SHAPE */}

         <p
            style={{
               color: "#94a3b8",
               marginBottom: "10px"
            }}
         >

            Face Shape:
            {" "}
            {item.faceShape}

         </p>

         {/* DATE */}

         <p
            style={{
               color: "#64748b",
               fontSize: "14px"
            }}
         >

            {item.date}

         </p>

      </Card>
   );
}

export default HistoryCard;