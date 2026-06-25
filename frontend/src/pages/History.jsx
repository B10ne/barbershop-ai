import HistoryHeader
from "../components/history/HistoryHeader";

import HistoryTimeline
from "../components/history/HistoryTimeline";

import EmptyHistory
from "../components/history/EmptyHistory";

import useHistory
from "../hooks/useHistory";

function History() {

   const {

      history

   } = useHistory();

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

         <HistoryHeader />

         {

            history.length === 0

            ?

            <EmptyHistory />

            :

            <HistoryTimeline

               history={history}

            />
         }

      </div>
   );
}

export default History;