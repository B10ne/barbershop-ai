import {
    Scissors,
    ScanFace,
    UserCircle,
    Sparkles
  } from "lucide-react";
  
  function StatCard({
    title,
    value,
    color,
    icon
  }) {
  
    const icons = {
      hairstyles: <Scissors size={70} />,
      scans: <ScanFace size={70} />,
      face: <UserCircle size={70} />,
      style: <Sparkles size={70} />
    };
  
    return (
  
      <div
        className="dashboard-stat-card"
        style={{
          background: color
        }}
      >
  
        <div className="dashboard-stat-content">
  
          <h2>{value}</h2>
  
          <p>{title}</p>
  
        </div>
  
        <div className="dashboard-stat-icon">
  
          {icons[icon]}
  
        </div>
  
      </div>
  
    );
  
  }
  
  export default StatCard;