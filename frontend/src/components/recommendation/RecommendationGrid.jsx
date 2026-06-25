import RecommendationCard from "./RecommendationCard";

function RecommendationGrid({ recommendations, onSelect, onTryOn, onConsultation }) {
  return (
    <div className="rec-grid">
      {recommendations.map((item, i) => (
        <RecommendationCard
          key={i}
          item={item}
          onClick={() => onSelect(item)}
          onTryOn={() => onTryOn(item)}
          onConsultation={() => onConsultation(item)}
        />
      ))}
    </div>
  );
}

export default RecommendationGrid;