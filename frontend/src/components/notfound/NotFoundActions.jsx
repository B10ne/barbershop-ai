import Button
from "../ui/Button";

function NotFoundActions({

   onHome,

   onBack

}) {

   return (

      <div
         style={{

            display: "flex",

            justifyContent:
               "center",

            gap: "18px",

            marginTop: "40px",

            flexWrap: "wrap"
         }}
      >

         <Button
            onClick={onHome}
         >

            Back to Home

         </Button>

         <Button
            onClick={onBack}
         >

            Go Back

         </Button>

      </div>
   );
}

export default NotFoundActions;