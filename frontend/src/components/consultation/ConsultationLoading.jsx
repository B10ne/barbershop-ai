import Spinner
from "../ui/Spinner";

function ConsultationLoading() {

   return (

      <div
         style={{

            minHeight:
               "400px",

            display:
               "flex",

            flexDirection:
               "column",

            justifyContent:
               "center",

            alignItems:
               "center",

            gap:
               "20px"
         }}
      >

         <Spinner />

         <p>

            Generating AI consultation...

         </p>

      </div>
   );
}

export default ConsultationLoading;