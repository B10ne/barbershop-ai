import Card
from "../ui/Card";

function ConfidenceExplanation({

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

            AI Confidence Explanation

         </h2>

         <p
            style={{
               color: "#94a3b8",
               lineHeight: "1.9"
            }}
         >

            {
               consultation
               .confidence_explanation
            }

         </p>

      </Card>
   );
}

export default ConfidenceExplanation;