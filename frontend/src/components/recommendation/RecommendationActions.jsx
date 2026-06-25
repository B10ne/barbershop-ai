import Button
from "../ui/Button";

function RecommendationActions({

   onDetail,

}) {

   return (

      <div
         style={{

            display: "flex",

            gap: "12px",

            marginTop: "24px",

            flexWrap: "wrap"
         }}
      >

         {/* DETAIL */}

         <Button
            onClick={onDetail}
         >

            View Detail

         </Button>

      </div>
   );
}

export default RecommendationActions;