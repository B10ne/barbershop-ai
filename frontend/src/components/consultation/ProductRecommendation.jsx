import Card
from "../ui/Card";

function ProductRecommendation({

   consultation

}) {

   if (
      !consultation
      ?.recommended_products
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

            Recommended Products

         </h2>

         <div
            style={{

               display: "grid",

               gap: "18px"
            }}
         >

            {

               consultation
               .recommended_products
               .map(

                  (

                     product,

                     index

                  ) => (

                     <div
                        key={index}

                        style={{

                           background:
                              "#1e293b",

                           padding:
                              "18px",

                           borderRadius:
                              "16px"
                        }}
                     >

                        {product}

                     </div>
                  )
               )
            }

         </div>

      </Card>
   );
}

export default ProductRecommendation;