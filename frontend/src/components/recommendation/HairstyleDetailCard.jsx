import Card
from "../ui/Card";

import Badge
from "../ui/Badge";

function HairstyleDetailCard({

   hairstyle

}) {

   return (

      <Card>

         <img

            src={`http://127.0.0.1:8000/images/${hairstyle.image}`}

            alt={hairstyle.name}

            style={{

               width: "100%",

               height: "340px",

               objectFit: "cover",

               borderRadius: "18px"
            }}
         />

         <div
            style={{
               marginTop: "24px"
            }}
         >

            <h1
               style={{
                  fontSize: "42px",
                  fontWeight: "700"
               }}
            >

               {hairstyle.name}

            </h1>

            <p
               style={{
                  marginTop: "16px",
                  lineHeight: "1.8",
                  color: "#94a3b8"
               }}
            >

               {
                  hairstyle.description
               }

            </p>

         </div>

      </Card>
   );
}

export default HairstyleDetailCard;