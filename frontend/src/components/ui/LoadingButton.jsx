import Spinner
from "./Spinner";

function LoadingButton({

   loading,

   children,

   ...props

}) {

   return (

      <button

         {...props}

         disabled={loading}

         style={{

            padding:
               "14px 24px",

            borderRadius:
               "16px",

            background:
               "linear-gradient(to right, #3b82f6, #38bdf8)",

            color:
               "#ffffff",

            fontWeight:
               "600",

            border:
               "none",

            cursor:
               "pointer",

            display:
               "flex",

            alignItems:
               "center",

            justifyContent:
               "center",

            gap:
               "10px",

            minWidth:
               "160px"
         }}
      >

         {

            loading

            ?

            (

               <>

                  <Spinner />

                  Loading...

               </>
            )

            :

            children
         }

      </button>
   );
}

export default LoadingButton;