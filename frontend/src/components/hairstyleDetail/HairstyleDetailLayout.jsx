import HairstyleDetailHeader from "./HairstyleDetailHeader";
import HairstyleDetailImage from "./HairstyleDetailImage";
import HairstyleDetailInfo from "./HairstyleDetailInfo";
import HairstyleDetailTags from "./HairstyleDetailTags";
import HairstyleDetailSpecs from "./HairstyleDetailSpecs";
import HairstyleDetailActions from "./HairstyleDetailActions";

import "../../styles/hairstyleDetail.css";

function HairstyleDetailLayout({

   hairstyle,

   onBack,

   onTryOn,

   onConsultation

}) {

   if (!hairstyle) {

      return (

         <div className="detail-not-found">

            Hairstyle Not Found

         </div>

      );

   }

   return (

      <div className="detail-page">

         <div className="detail-container">

            <HairstyleDetailHeader

               hairstyle={hairstyle}

               onBack={onBack}

            />

            <div className="detail-card">

               <div className="detail-left">

                  <HairstyleDetailImage

                     hairstyle={hairstyle}

                  />

               </div>

               <div className="detail-right">

                  <HairstyleDetailInfo

                     hairstyle={hairstyle}

                  />

                  <HairstyleDetailTags

                     tags={

                        hairstyle
                        ?.style_tags || []

                     }

                  />

                  <HairstyleDetailSpecs

                     hairstyle={hairstyle}

                  />

                  <HairstyleDetailActions

                     onTryOn={onTryOn}

                     onConsultation={
                        onConsultation
                     }

                  />

               </div>

            </div>

         </div>

      </div>

   );

}

export default HairstyleDetailLayout;