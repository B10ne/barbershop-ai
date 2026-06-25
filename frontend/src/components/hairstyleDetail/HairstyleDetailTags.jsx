import { useState } from "react";

const TABS = ["Overview", "Styling Guide", "Maintenance", "Suitable For"];

function HairstyleDetailTags({ tags, hairstyle }) {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <>
      {/* Style tags */}
      {tags?.length > 0 && (
        <div className="detail-tags">
          {tags.map((tag, i) => (
            <span key={i} className="detail-tag">{tag}</span>
          ))}
        </div>
      )}

      {/* Tab nav */}
      <div className="detail-tabs">
        {TABS.map((tab) => (
          <button
            key={tab}
            className={`detail-tab-btn${activeTab === tab ? " detail-tab-btn--active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="detail-tab-content">
        {activeTab === "Overview" && (
          <>
            <p className="detail-description">{hairstyle?.description}</p>
            {hairstyle?.reason && (
              <>
                <div className="detail-why-title">Why It Suits You</div>
                <div className="detail-why-list">
                  {hairstyle.reason.split(".").filter(Boolean).map((s, i) => (
                    <div key={i} className="detail-why-item">{s.trim()}</div>
                  ))}
                </div>
              </>
            )}
          </>
        )}
        {activeTab === "Styling Guide" && (
          <p className="detail-description">
            {hairstyle?.styling_guide || "No styling guide available for this hairstyle."}
          </p>
        )}
        {activeTab === "Maintenance" && (
          <p className="detail-description">
            {hairstyle?.maintenance_tips || `Maintenance level: ${hairstyle?.maintenance || "—"}. Regular trims every 4–6 weeks are recommended.`}
          </p>
        )}
        {activeTab === "Suitable For" && (
          <p className="detail-description">
            {hairstyle?.suitable_for || `Best for ${hairstyle?.formality || "various"} occasions.`}
          </p>
        )}
      </div>
    </>
  );
}

export default HairstyleDetailTags;