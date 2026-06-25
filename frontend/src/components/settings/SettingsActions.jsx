import Button
from "../ui/Button";

function SettingsActions({

   onReset

}) {

   return (

      <div
         style={{
            marginTop: "40px"
         }}
      >

         <Button
            onClick={onReset}
         >

            Reset Application

         </Button>

      </div>
   );
}

export default SettingsActions;