function FaceShapePanel({ prediction }) {
    const shape = prediction?.face_shape || "—";
    const conf  = Number(prediction?.confidence || 0);
    const deg   = (conf / 100) * 360;
  
    const descriptions = {
      oval:      "Oval faces are balanced and suitable for most hairstyles.",
      round:     "Soft jawline with balanced width and height.",
      square:    "Strong jawline and masculine facial features.",
      rectangle: "Longer face shape with strong facial structure.",
    };
  
    return (
      <div className="rec-panel">
        <p className="rec-panel__label">Face Shape</p>
        <div className="rec-face-name">{shape}</div>
        <p className="rec-face-desc">
          {descriptions[shape?.toLowerCase()] || ""}
        </p>
        <div className="rec-conf-row">
          <div
            className="rec-donut"
            style={{
              background: `conic-gradient(#3b7ff5 0% ${conf}%, #1e2130 ${conf}% 100%)`,
            }}
          >
            <div className="rec-donut-inner">{Math.round(conf)}%</div>
          </div>
          <div>
            <div className="rec-conf-label">Confidence</div>
            <div className="rec-conf-value">{conf.toFixed(1)}%</div>
          </div>
        </div>
      </div>
    );
  }
  
  export default FaceShapePanel;