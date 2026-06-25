const BASE = "http://127.0.0.1:8000/images";

function AvoidCard({ item }) {
  return (
    <div className="avoid-card">
      <img
        src={`${BASE}/${item.image}`}
        alt={item.name}
        className="avoid-card__image"
        onError={(e) => { e.target.style.background = "#1a1214"; }}
      />
      <div className="avoid-card__match">{item.compatibility_rank}% Match</div>
      <div className="avoid-card__name">{item.name}</div>
    </div>
  );
}

export default AvoidCard;