import AvoidCard from "./AvoidCard";

function AvoidSection({ avoidRecommendations, onViewAll }) {
  if (!avoidRecommendations?.length) return null;

  return (
    <div className="avoid-section">
      <div className="avoid-section__header">
        <h2 className="avoid-section__title">
          Hairstyles to Avoid
          <span className="avoid-section__badge">{avoidRecommendations.length} styles</span>
        </h2>
        {onViewAll && (
          <button className="avoid-section__view-all" onClick={onViewAll}>View All</button>
        )}
      </div>
      <div className="avoid-section__grid">
        {avoidRecommendations.map((item, i) => (
          <AvoidCard key={i} item={item} />
        ))}
      </div>
    </div>
  );
}

export default AvoidSection;