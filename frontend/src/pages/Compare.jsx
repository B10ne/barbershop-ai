import useCompare
from "../hooks/useCompare";

import CompareHeader
from "../components/compare/CompareHeader";

import CompareGrid
from "../components/compare/CompareGrid";

import EmptyCompare
from "../components/compare/EmptyCompare";

function Compare() {

   const {

      compareItems,

      handleTryOn,

      handleConsultation,

      handleDetail

   } = useCompare();

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

         <div
            style={{

               maxWidth:
                  "1400px",

               margin:
                  "0 auto"
            }}
         >

            {/* HEADER */}

            <CompareHeader />

            {/* EMPTY */}

            {

               compareItems.length === 0

               ?

               (

                  <EmptyCompare />
               )

               :

               (

                  <CompareGrid

                     items={
                        compareItems
                     }

                     onTryOn={
                        handleTryOn
                     }

                     onConsultation={
                        handleConsultation
                     }

                     onDetail={
                        handleDetail
                     }

                  />
               )
            }

         </div>

      </div>
   );
}

export default Compare;