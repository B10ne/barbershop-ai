const BASE = "http://127.0.0.1:8000/images";

function RecommendationCard({ item, onClick, onTryOn }) {
  const tags = [
    ...(item.style_tags || []),
    ...(item.hair_types || []),
    item.formality,
  ].filter(Boolean).slice(0, 2);

  return (
    <div className="rec-card" onClick={onClick}>
      <img
        src={`${BASE}/${item.image}`}
        alt={item.name}
        className="rec-card__image"
        onError={(e) => { e.target.style.background = "#1a1d26"; e.target.style.display = "block"; }}
      />
      <div className="rec-card__body">
        <div className="rec-card__match">{item.compatibility_rank}% Match</div>
        <h3 className="rec-card__name">{item.name}</h3>
        {tags.length > 0 && (
          <div className="rec-card__tags">
            {tags.map((t, i) => <span key={i} className="rec-card__tag">{t}</span>)}
          </div>
        )}
        <button
          className="rec-card__btn"
          onClick={(e) => { e.stopPropagation(); onTryOn && onTryOn(); }}
        >
          Try On
        </button>
      </div>
    </div>
  );
}

export default RecommendationCard;