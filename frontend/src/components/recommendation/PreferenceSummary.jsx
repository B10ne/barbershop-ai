function PreferenceSummary({

    preferences
 
 }) {
 
    return (
 
       <div className="summary-card">
 
          <h3>
             Selected Preferences
          </h3>
 
          <div className="preference-item">
             <strong>Hair Type:</strong>
             {preferences?.hairType}
          </div>
 
          <div className="preference-item">
             <strong>Profession:</strong>
             {preferences?.profession}
          </div>
 
          <div className="preference-item">
             <strong>Personality:</strong>
             {preferences?.personality}
          </div>
 
          <div className="preference-item">
             <strong>Maintenance:</strong>
             {preferences?.maintenance}
          </div>
 
          <div className="preference-item">
             <strong>Formality:</strong>
             {preferences?.formality}
          </div>
 
       </div>
 
    );
 
 }
 
 export default PreferenceSummary;