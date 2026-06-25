import Card
from "../ui/Card";

function HaircareAdvice({

   consultation

}) {

   if (
      !consultation
   ) {

      return null;
   }

   return (

      <Card>

         <h2
            style={{
               marginBottom: "20px"
            }}
         >

            Haircare Advice

         </h2>

         <p
            style={{
               color: "#94a3b8",
               lineHeight: "1.9"
            }}
         >

            {
               consultation
               .haircare_advice
            }

         </p>

      </Card>
   );
}

export default HaircareAdvice;