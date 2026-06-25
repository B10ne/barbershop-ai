import Button
from "../ui/Button";

function ConsultationActions({

   onTryOn,

   onSave,

   onCompare

}) {

   return (

      <div
         style={{

            display:
               "flex",

            gap:
               "16px",

            flexWrap:
               "wrap",

            marginTop:
               "32px"
         }}
      >

         <Button
            onClick={onTryOn}
         >

            Try This Hairstyle

         </Button>

         <Button
            onClick={onSave}
         >

            Save Look

         </Button>

         <Button
            onClick={onCompare}
         >

            Compare Styles

         </Button>

      </div>
   );
}

export default ConsultationActions;