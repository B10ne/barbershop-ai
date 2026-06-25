import {

    useNavigate
 
 } from "react-router-dom";
 
 import Button
 from "../ui/Button";
 
 function HeroSection() {
 
    const navigate =
       useNavigate();
 
    return (
 
       <section
          className="section fade-in"
       >
 
          <div
             className="container"
          >
 
             <div
                style={{
 
                   minHeight:
                      "85vh",
 
                   display:
                      "flex",
 
                   flexDirection:
                      "column",
 
                   justifyContent:
                      "center",
 
                   alignItems:
                      "center",
 
                   textAlign:
                      "center"
                }}
             >
 
                {/* BADGE */}
 
                <div
                   style={{
 
                      marginBottom:
                         "24px",
 
                      padding:
                         "10px 18px",
 
                      borderRadius:
                         "999px",
 
                      background:
                         "rgba(59,130,246,0.12)",
 
                      border:
                         "1px solid rgba(59,130,246,0.18)",
 
                      color:
                         "#93c5fd",
 
                      fontWeight:
                         "600"
                   }}
                >
 
                   AI Hairstyle Recommendation
                   System
 
                </div>
 
                {/* TITLE */}
 
                <h1
                   className="text-gradient"
                   style={{
 
                      maxWidth:
                         "950px",
 
                      marginBottom:
                         "24px"
                   }}
                >
 
                   Discover The Best Hairstyle
                   Using AI Face Shape Analysis
 
                </h1>
 
                {/* DESCRIPTION */}
 
                <p
                   style={{
 
                      maxWidth:
                         "760px",
 
                      fontSize:
                         "18px",
 
                      marginBottom:
                         "40px"
                   }}
                >
 
                   Analyze your face shape,
                   receive personalized
                   hairstyle recommendations,
                   generate AI consultation,
                   and try hairstyles virtually
                   using advanced AI-powered
                   technology.
 
                </p>
 
                {/* ACTIONS */}
 
                <div
                   style={{
 
                      display:
                         "flex",
 
                      gap:
                         "18px",
 
                      flexWrap:
                         "wrap",
 
                      justifyContent:
                         "center"
                   }}
                >
 
                   <Button
                      onClick={() =>
                         navigate("/scan")
                      }
                   >
 
                      Start Face Scan
 
                   </Button>
 
                   <button
                      onClick={() =>
                         navigate("/history")
                      }
                      style={{
 
                         padding:
                            "14px 24px",
 
                         borderRadius:
                            "16px",
 
                         background:
                            "rgba(255,255,255,0.04)",
 
                         border:
                            "1px solid rgba(255,255,255,0.08)",
 
                         color:
                            "#ffffff",
 
                         fontWeight:
                            "600",
 
                         backdropFilter:
                            "blur(12px)"
                      }}
                   >
 
                      View History
 
                   </button>
 
                </div>
 
                {/* STATS */}
 
                <div
                   style={{
 
                      marginTop:
                         "80px",
 
                      display:
                         "grid",
 
                      gridTemplateColumns:
                         "repeat(auto-fit, minmax(220px, 1fr))",
 
                      gap:
                         "24px",
 
                      width:
                         "100%"
                   }}
                >
 
                   {
 
                      [
 
                         {
 
                            label:
                               "Face Shape Classes",
 
                            value:
                               "4"
                         },
 
                         {
 
                            label:
                               "Hairstyle Metadata",
 
                            value:
                               "60+"
                         },
 
                         {
 
                            label:
                               "AI Recommendation",
 
                            value:
                               "100%"
                         }
 
                      ].map(
 
                         (item) => (
 
                            <div
 
                               key={item.label}
 
                               className="glass"
 
                               style={{
 
                                  padding:
                                     "28px",
 
                                  borderRadius:
                                     "24px"
                               }}
                            >
 
                               <h2
                                  className="text-gradient"
                                  style={{
 
                                     marginBottom:
                                        "10px"
                                  }}
                               >
 
                                  {item.value}
 
                               </h2>
 
                               <p>
 
                                  {item.label}
 
                               </p>
 
                            </div>
                         )
                      )
                   }
 
                </div>
 
             </div>
 
          </div>
 
       </section>
    );
 }
 
 export default HeroSection;