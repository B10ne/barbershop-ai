import ScanHeader from "./ScanHeader";
import CameraFrame from "./CameraFrame";
import PreferenceForm from "./PreferenceForm";
import CaptureButton from "./CaptureButton";
import ScanStatus from "./ScanStatus";

function ScanPage({

   webcam,

   ...props

}) {

   return (

      <section className="scan-page">

         <ScanHeader />

         <div className="scan-layout">

            <div>

               <CameraFrame>

                  {webcam}

               </CameraFrame>

               <ScanStatus />

            </div>
            <div className="scan-center">

            <CameraFrame>
            {webcam}
            </CameraFrame>

            <ScanStatus />

            </div>

         </div>

      </section>

   );
}

export default ScanPage;