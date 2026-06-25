import CompareCard
from "./CompareCard";

function CompareGrid({

   items,

   onTryOn,

   onConsultation,

   onDetail

}) {

   return (

      <div
         style={{

            display: "grid",

            gridTemplateColumns:
               "repeat(auto-fit, minmax(380px, 1fr))",

            gap: "28px"
         }}
      >

         {

            items.map(

               (hairstyle) => (

                  <CompareCard

                     key={
                        hairstyle.id
                     }

                     hairstyle={
                        hairstyle
                     }

                     onTryOn={
                        onTryOn
                     }

                     onConsultation={
                        onConsultation
                     }

                     onDetail={
                        onDetail
                     }

                  />
               )
            )
         }

      </div>
   );
}

export default CompareGrid;