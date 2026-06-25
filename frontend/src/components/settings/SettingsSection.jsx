import Card
from "../ui/Card";

function SettingsSection({

   title,

   description,

   children

}) {

   return (

      <Card>

         {/* HEADER */}

         <div
            style={{
               marginBottom: "24px"
            }}
         >

            <h2
               style={{
                  marginBottom: "10px"
               }}
            >

               {title}

            </h2>

            {

               description && (

                  <p
                     style={{
                        color: "#94a3b8",
                        lineHeight: "1.7"
                     }}
                  >

                     {description}

                  </p>
               )
            }

         </div>

         {/* CONTENT */}

         <div>

            {children}

         </div>

      </Card>
   );
}

export default SettingsSection;