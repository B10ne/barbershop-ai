import SavedLookCard
from "./SavedLookCard";

function SavedLooksGrid({

   looks,

   onDelete

}) {

   return (

      <div
         style={{

            display: "grid",

            gridTemplateColumns:
               "repeat(auto-fill, minmax(320px, 1fr))",

            gap: "24px",

            marginTop: "40px"
         }}
      >

         {

            looks.map(

               (look) => (

                  <SavedLookCard

                     key={look.id}

                     look={look}

                     onDelete={
                        onDelete
                     }

                  />
               )
            )
         }

      </div>
   );
}

export default SavedLooksGrid;