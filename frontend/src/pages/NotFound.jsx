import NotFoundContent
from "../components/notfound/NotFoundContent";

import NotFoundActions
from "../components/notfound/NotFoundActions";

import {

   useNavigate

} from "react-router-dom";

function NotFound() {

   const navigate =
      useNavigate();

   return (

      <div
         style={{

            minHeight:
               "100vh",

            background:
               "#0f172a",

            color:
               "white",

            display:
               "flex",

            justifyContent:
               "center",

            alignItems:
               "center",

            padding:
               "40px"
         }}
      >

         <div
            style={{
               textAlign: "center"
            }}
         >

            {/* CONTENT */}

            <NotFoundContent />

            {/* ACTIONS */}

            <NotFoundActions

               onHome={() =>
                  navigate("/")
               }

               onBack={() =>
                  navigate(-1)
               }

            />

         </div>

      </div>
   );
}

export default NotFound;