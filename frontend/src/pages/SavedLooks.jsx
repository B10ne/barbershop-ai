import SavedLooksHeader
from "../components/saved/SavedLooksHeader";

import SavedLooksGrid
from "../components/saved/SavedLooksGrid";

import EmptySavedLooks
from "../components/saved/EmptySavedLooks";

import useSavedLooks
from "../hooks/useSavedLooks";

function SavedLooks() {

   const {

      savedLooks,

      deleteLook,

      clearLooks

   } = useSavedLooks();

   return (

      <div
         style={{

            minHeight:
               "100vh",

            background:
               "#0f172a",

            color:
               "white",

            padding:
               "40px"
         }}
      >

         {/* HEADER */}

         <SavedLooksHeader

            total={
               savedLooks.length
            }

            onClear={
               clearLooks
            }

         />

         {/* EMPTY */}

         {

            savedLooks.length === 0

            ?

            (

               <EmptySavedLooks />
            )

            :

            (

               <SavedLooksGrid

                  looks={
                     savedLooks
                  }

                  onDelete={
                     deleteLook
                  }

               />
            )
         }

      </div>
   );
}

export default SavedLooks;