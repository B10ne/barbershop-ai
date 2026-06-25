import Card
from "../ui/Card";

function StylingTips({

   consultation

}) {

   if (
      !consultation
      ?.styling_tips
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

            Styling Tips

         </h2>

         <ul
            style={{

               color: "#94a3b8",

               lineHeight: "2"
            }}
         >

            {

               consultation
               .styling_tips
               .map(

                  (tip, index) => (

                     <li
                        key={index}
                     >

                        {tip}

                     </li>
                  )
               )
            }

         </ul>

      </Card>
   );
}

export default StylingTips;