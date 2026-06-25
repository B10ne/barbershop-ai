import { useEffect } from "react";
import "../styles/pages/hairstyledetail.css";

import useHairstyleDetail        from "../hooks/useHairstyleDetail";
import HairstyleDetailHeader     from "../components/hairstyleDetail/HairstyleDetailHeader";
import HairstyleDetailImage      from "../components/hairstyleDetail/HairstyleDetailImage";
import HairstyleDetailInfo       from "../components/hairstyleDetail/HairstyleDetailInfo";
import HairstyleDetailTags       from "../components/hairstyleDetail/HairstyleDetailTags";
import HairstyleDetailSpecs      from "../components/hairstyleDetail/HairstyleDetailSpecs";
import HairstyleDetailActions    from "../components/hairstyleDetail/HairstyleDetailActions";

function HairstyleDetail() {
  const { hairstyle, handleBack, handleTryOn, handleConsultation } = useHairstyleDetail();

  // Override body background agar tidak ada celah putih
  useEffect(() => {
    const prev = document.body.style.background;
    const prevOverflow = document.body.style.overflow;
    document.body.style.background = "#0d0f14";
    document.body.style.overflow   = "hidden";
    return () => {
      document.body.style.background = prev;
      document.body.style.overflow   = prevOverflow;
    };
  }, []);

  if (!hairstyle) {
    return <div className="detail-not-found"><h2>Hairstyle Not Found</h2></div>;
  }

  return (
    <div className="detail-page">
      <div className="detail-container">

        <HairstyleDetailHeader hairstyle={hairstyle} onBack={handleBack} />

        <div className="detail-card">

          <div className="detail-left">
            <HairstyleDetailImage hairstyle={hairstyle} />
          </div>

          <div className="detail-right">
            <HairstyleDetailInfo hairstyle={hairstyle} />

            <HairstyleDetailTags
              tags={hairstyle?.style_tags || []}
              hairstyle={hairstyle}
            />

            <HairstyleDetailSpecs hairstyle={hairstyle} />

            <HairstyleDetailActions
              onTryOn={handleTryOn}
              onConsultation={handleConsultation}
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default HairstyleDetail;