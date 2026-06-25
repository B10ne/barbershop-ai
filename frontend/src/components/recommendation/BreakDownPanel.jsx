const SHAPE_ORDER = ["Oval", "Rectangle", "Round", "Square"];

function BreakdownPanel({ scores = {} }) {
  const rows = SHAPE_ORDER.map((label) => ({
    label,
    pct: Math.round(Number(scores[label.toLowerCase()] || 0)),
  }));

  return (
    <div className="rec-panel">
      <p className="rec-panel__label">Face Shape Breakdown</p>
      {rows.map(({ label, pct }) => (
        <div key={label} className="rec-breakdown-row">
          <span className="rec-br-label">{label}</span>
          <div className="rec-br-bg">
            <div className="rec-br-fill" style={{ width: `${pct}%` }} />
          </div>
          <span className="rec-br-pct">{pct}%</span>
        </div>
      ))}
    </div>
  );
}

export default BreakdownPanel;