import Card
from "../ui/Card";

import Button
from "../ui/Button";

function SavedLookCard({

   look,

   onDelete

}) {

   return (

      <Card>

         {/* IMAGE */}

         <img

            src={look.generatedImage}

            alt={look.hairstyle}

            style={{

               width: "100%",

               height: "320px",

               objectFit: "cover",

               borderRadius: "20px",

               marginBottom: "20px"
            }}
         />

         {/* INFO */}

         <h2
            style={{
               marginBottom: "10px"
            }}
         >

            {look.hairstyle}

         </h2>

         <p
            style={{
               color: "#94a3b8",
               marginBottom: "20px"
            }}
         >

            {look.date}

         </p>

         {/* ACTION */}

         <Button
            onClick={() =>
               onDelete(
                  look.id
               )
            }
         >

            Delete
         </Button>

      </Card>
   );
}

export default SavedLookCard;