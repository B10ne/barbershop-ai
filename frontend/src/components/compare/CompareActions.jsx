import Button
from "../ui/Button";

function CompareActions({

   onTryOn,

   onConsultation,

   onDetail

}) {

   return (

      <div
         style={{

            display: "flex",

            gap: "12px",

            flexWrap: "wrap"
         }}
      >

         <Button
            onClick={onDetail}
         >

            Detail

         </Button>

         <Button
            onClick={onTryOn}
         >

            Try On

         </Button>

         <Button
            onClick={onConsultation}
         >

            Consultation

         </Button>

      </div>
   );
}

export default CompareActions;