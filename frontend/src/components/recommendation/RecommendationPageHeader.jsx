import { useNavigate } from "react-router-dom";

function RecommendationPageHeader() {
  const navigate = useNavigate();
  return (
    <>
      <button className="rec-back-btn" onClick={() => navigate(-1)} aria-label="Back">
        &#8592;
      </button>
      <div className="rec-page-header">
      <h1><span className="ai-gradient">
              <strong>Hairstyles</strong>
           </span>
         Analysis Result</h1>
        <p>AI has analyzed your facial features</p>
      </div>
    </>
  );
}

export default RecommendationPageHeader;