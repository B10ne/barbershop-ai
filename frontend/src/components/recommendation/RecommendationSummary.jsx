import FaceShapePanel from "./FaceShapePanel";
import BreakdownPanel from "./BreakdownPanel";

function RecommendationSummary({ prediction, preferences, recommendations }) {
  return (
    <div className="rec-top-panels">
      <FaceShapePanel prediction={prediction} />
      <BreakdownPanel scores={prediction?.scores} />
    </div>
  );
}

export default RecommendationSummary;