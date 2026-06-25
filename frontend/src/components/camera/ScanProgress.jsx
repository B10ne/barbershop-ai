function ScanProgress({

    progress,
    status
 
 }) {
 
    return (
 
       <div className="scan-progress">
 
          <p>
 
             {status}
 
          </p>
 
       </div>
 
    );
 
 }
 
 export default ScanProgress;