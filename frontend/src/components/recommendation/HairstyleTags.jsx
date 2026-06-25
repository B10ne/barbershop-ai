import Badge
from "../ui/Badge";

function HairstyleTags({

   tags

}) {

   return (

      <div
         style={{

            display: "flex",

            flexWrap: "wrap",

            gap: "12px",

            marginTop: "24px"
         }}
      >

         {

            tags?.map(

               (tag, index) => (

                  <Badge
                     key={index}
                  >

                     {tag}

                  </Badge>
               )
            )
         }

      </div>
   );
}

export default HairstyleTags;