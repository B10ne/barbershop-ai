import Button
from "../ui/Button";

function SavedLooksHeader({

   total,

   onClear

}) {

   return (

      <div
         style={{

            display: "flex",

            justifyContent:
               "space-between",

            alignItems:
               "center"
         }}
      >

         <div>

            <h1
               style={{
                  fontSize: "42px"
               }}
            >

               Saved Looks

            </h1>

            <p
               style={{
                  color: "#94a3b8"
               }}
            >

               {total} saved styles

            </p>

         </div>

         <Button
            onClick={onClear}
         >

            Clear All
         </Button>

      </div>
   );
}

export default SavedLooksHeader;