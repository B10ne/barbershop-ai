import { useState } from "react";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

function AdminLayout({ children }) {

   const [collapse, setCollapse] = useState(false);


   return (

      <div
         className={
            collapse
            ? "admin-layout collapsed"
            : "admin-layout"
         }
      >

         <Sidebar 
            collapse={collapse}
         />


         <div className="admin-content-wrapper">


            <Topbar 
               toggleSidebar={() =>
                  setCollapse(!collapse)
               }
            />


            <main className="admin-content">

               {children}

            </main>


         </div>


      </div>

   );

}


export default AdminLayout;