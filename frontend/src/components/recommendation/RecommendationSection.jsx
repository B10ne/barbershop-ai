import RecommendationFilter from "./RecommendationFilter";
import RecommendationGrid   from "./RecommendationGrid";

function RecommendationSection({
  recommendations,
  selectedFilter,
  setSelectedFilter,
  filteredRecommendations,
  onSelect,
  onTryOn,
  onConsultation,
}) {
  const filters = [
    "All",
    ...new Set(
      recommendations.flatMap((item) => [
        ...(item.style_tags || []),
        ...(item.hair_types || []),
        item.formality,
      ])
    ),
  ].filter(Boolean);

  return (
    <div>
      <h2 className="rec-section-title">Top Recommended Hairstyles</h2>
      <p className="rec-section-sub">
        AI selected {filteredRecommendations.length} hairstyles that best match your face and preferences.
      </p>

      <RecommendationFilter
        filters={filters}
        selected={selectedFilter}
        onChange={setSelectedFilter}
      />

      {filteredRecommendations.length === 0 ? (
        <div className="rec-empty">
          <p className="rec-empty__title">No styles found</p>
          <p className="rec-empty__desc">Try selecting a different filter.</p>
        </div>
      ) : (
        <RecommendationGrid
          recommendations={filteredRecommendations}
          onSelect={onSelect}
          onTryOn={onTryOn}
          onConsultation={onConsultation}
        />
      )}
    </div>
  );
}

export default RecommendationSection;