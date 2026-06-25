import Card
from "../ui/Card";

import Button
from "../ui/Button";

function ClearStorageCard({

   onClearLooks,

   onClearHistory

}) {

   return (

      <Card>

         <h2
            style={{
               marginBottom: "24px"
            }}
         >

            Storage Management

         </h2>

         <div
            style={{

               display: "flex",

               gap: "18px",

               flexWrap: "wrap"
            }}
         >

            <Button
               onClick={
                  onClearLooks
               }
            >

               Clear Saved Looks

            </Button>

            <Button
               onClick={
                  onClearHistory
               }
            >

               Clear History

            </Button>

         </div>

      </Card>
   );
}

export default ClearStorageCard;