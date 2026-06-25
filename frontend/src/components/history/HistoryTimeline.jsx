import HistoryCard
from "./HistoryCard";

function HistoryTimeline({

   history

}) {

   return (

      <div
         style={{

            display: "grid",

            gridTemplateColumns:
               "repeat(auto-fill, minmax(320px, 1fr))",

            gap: "24px",

            marginTop: "30px"
         }}
      >

         {

            history.map(

               (item) => (

                  <HistoryCard

                     key={item.id}

                     item={item}

                  />
               )
            )
         }

      </div>
   );
}

export default HistoryTimeline;