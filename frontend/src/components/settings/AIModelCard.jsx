import Card
from "../ui/Card";

function AIModelCard() {

   return (

      <Card>

         <h2
            style={{
               marginBottom: "20px"
            }}
         >

            AI Models

         </h2>

         <div
            style={{
               lineHeight: "2"
            }}
         >

            <p>

               CNN Face Shape Classification

            </p>

            <p>

               GPT Hairstyle Consultation

            </p>

            <p>

               Replicate AI Hairstyle Try-On

            </p>

         </div>

      </Card>
   );
}

export default AIModelCard;