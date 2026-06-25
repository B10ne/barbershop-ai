import {

    CheckCircle,
    Circle
 
 } from "lucide-react";
 
 function ScanStatus({
 
    faceDetected,
    lighting,
    centered
 
 }) {
 
    const StatusItem = ({
 
       status,
       text
 
    }) => (
 
       <div className="status-item">
 
          {
 
             status
 
                ? <CheckCircle size={18}/>
                : <Circle size={18}/>
 
          }
 
          <span>
             {text}
          </span>
 
       </div>
 
    );
 
    return (
 
       <div className="scan-status">
 
          <StatusItem
 
             status={faceDetected}
             text="Face Detected"
 
          />
 
          <StatusItem
 
             status={lighting}
             text="Good Lighting"
 
          />
 
          <StatusItem
 
             status={centered}
             text="Position Centered"
 
          />
 
       </div>
 
    );
 
 }
 
 export default ScanStatus;