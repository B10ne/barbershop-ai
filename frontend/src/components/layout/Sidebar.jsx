import {

    Link,
 
    useLocation
 
 } from "react-router-dom";
 
 function Sidebar() {
 
    const location =
       useLocation();
 
    const menuItems = [
 
       {
 
          label: "Dashboard",
 
          path: "/"
       },
 
       {
 
          label: "Scan Face",
 
          path: "/scan"
       },
 
       {
 
          label: "History",
 
          path: "/history"
       },
 
       {
 
          label: "Saved Looks",
 
          path: "/saved"
       },
 
       {
 
          label: "Settings",
 
          path: "/settings"
       }
    ];
 
    return (
 
       <aside
          style={{
 
             width: "260px",
 
             minHeight: "100vh",
 
             padding: "32px 20px",
 
             background:
                "rgba(30,41,59,0.8)",
 
             borderRight:
                "1px solid rgba(255,255,255,0.08)",
 
             backdropFilter:
                "blur(14px)"
          }}
       >
 
          {/* TITLE */}
 
          <h2
             style={{
 
                marginBottom: "40px",
 
                fontSize: "26px",
 
                background:
                   "linear-gradient(to right, #3b82f6, #38bdf8)",
 
                WebkitBackgroundClip:
                   "text",
 
                WebkitTextFillColor:
                   "transparent"
             }}
          >
 
             AI Hairstyle
 
          </h2>
 
          {/* MENU */}
 
          <div
             style={{
 
                display: "flex",
 
                flexDirection:
                   "column",
 
                gap: "10px"
             }}
          >
 
             {
 
                menuItems.map(
 
                   (item) => {
 
                      const isActive =
 
                         location.pathname
 
                         ===
 
                         item.path;
 
                      return (
 
                         <Link
 
                            key={item.path}
 
                            to={item.path}
 
                            style={{
 
                               padding:
                                  "14px 18px",
 
                               borderRadius:
                                  "16px",
 
                               color:
 
                                  isActive
 
                                  ?
 
                                  "#ffffff"
 
                                  :
 
                                  "#94a3b8",
 
                               background:
 
                                  isActive
 
                                  ?
 
                                  "rgba(59,130,246,0.18)"
 
                                  :
 
                                  "transparent",
 
                               transition:
                                  "0.25s"
                            }}
                         >
 
                            {item.label}
 
                         </Link>
                      );
                   }
                )
             }
 
          </div>
 
       </aside>
    );
 }
 
 export default Sidebar;