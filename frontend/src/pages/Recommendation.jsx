import { useEffect, useState } from "react";
import Topbar from "../components/layout/Topbar";
import { ThemeProvider } from "../components/layout/ThemeProvider";
import RecommendationPageHeader from "../components/recommendation/RecommendationPageHeader";
import RecommendationSummary    from "../components/recommendation/RecommendationSummary";
import RecommendationSection    from "../components/recommendation/RecommendationSection";
import AvoidSection             from "../components/recommendation/AvoidSection";

import useRecommendation        from "../hooks/useRecommendation";
import useRecommendationActions from "../hooks/useRecommendationActions";

import "../styles/pages/recommendation.css";

function Recommendation() {
  const [recommendationData, setRecommendationData] = useState(null);
  const [selectedFilter, setSelectedFilter]         = useState("All");

  useEffect(() => {
    const payload = JSON.parse(localStorage.getItem("recommendationPayload"));
    setRecommendationData(payload);
  }, []);

  const prediction           = recommendationData?.prediction;
  const recommendations      = recommendationData?.recommendations      || [];
  const avoidRecommendations = recommendationData?.avoidRecommendations || [];
  const preferences          = recommendationData?.preferences          || {};

  const { filteredRecommendations }             = useRecommendation(recommendations, selectedFilter);
  const { goToDetail, goToTryOn, goToConsultation } = useRecommendationActions();

  if (!recommendationData) {
    return <div className="recommendation-loading">Loading recommendation...</div>;
  }

  return (
    <div className="recommendation-page">
      <RecommendationPageHeader />
      <ThemeProvider>
      <Topbar />
      <RecommendationSummary
        prediction={prediction}
        preferences={preferences}
        recommendations={recommendations}
      />

      <RecommendationSection
        recommendations={recommendations}
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
        filteredRecommendations={filteredRecommendations}
        onSelect={goToDetail}
        onTryOn={goToTryOn}
        onConsultation={goToConsultation}
      />

      <AvoidSection avoidRecommendations={avoidRecommendations} />
      </ThemeProvider>
    </div>
  );
}

export default Recommendation;