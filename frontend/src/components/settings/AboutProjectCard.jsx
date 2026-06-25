import Card
from "../ui/Card";

function AboutProjectCard() {

   return (

      <Card>

         <h2
            style={{
               marginBottom: "20px"
            }}
         >

            About Project

         </h2>

         <p
            style={{
               color: "#94a3b8",
               lineHeight: "1.9"
            }}
         >

            AI Personalized Hairstyle
            Recommendation System
            using CNN face analysis,
            recommendation engine,
            AI consultation,
            and generative hairstyle
            try-on.

         </p>

      </Card>
   );
}

export default AboutProjectCard;