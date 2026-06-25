import { useEffect, useState,} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AdminLayout from "../../components/admin/AdminLayout";
import StatCard from "../../components/admin/StatCard";
import Chart from "react-apexcharts";
import Barberman from "../../assets/images/Barberman.png";
import {
    Scissors,
    ScanFace,
    FileText,
    Settings
} from "lucide-react";
function Dashboard() {

    const [stats, setStats] = useState({
        total_hairstyles: 0,
        total_users: 0,
        total_scans: 0,
        top_face_shape: "-",
        top_hairstyle: "-",
        face_distribution: [],
        recent_scans: []
    });
const navigate = useNavigate();
   const [hairstyles, setHairstyles] = useState([]);

   useEffect(() => {
      loadDashboard();
   }, []);

   const loadDashboard = async () => {
      try {

         const statsRes = await axios.get(
            "http://localhost:8000/admin/dashboard"
         );

         const hairRes = await axios.get(
            "http://localhost:8000/admin/hairstyles"
         );

         setStats(statsRes.data);
         setHairstyles(hairRes.data);

      } catch (err) {
         console.error(err);
      }
   };

   const donutOptions = {

    labels:
       stats.face_distribution.map(
          item => item.label
       ),
 
    legend: {
       position: "bottom"
    }
 
 };
 
 const donutSeries =
    stats.face_distribution.map(
       item => item.value
    );
    const barOptions = {

        chart: {
            toolbar: {
                show: false
            }
        },
    
        xaxis: {
    
            categories:
                stats.face_distribution.map(
                    item => item.label
                )
    
        },
    
        yaxis: {
    
            title: {
                text: "Total Scan"
            }
    
        },
    
        dataLabels: {
            enabled: false
        },
    
        plotOptions: {
    
            bar: {
    
                borderRadius: 8,
    
                columnWidth: "50%"
    
            }
    
        },
    
        colors: ["#3C50E0"]
    
    };
    
    const barSeries = [
    
        {
    
            name: "Total Scan",
    
            data:
                stats.face_distribution.map(
                    item => item.value
                )
    
        }
    
    ];
const currentDate = new Date().toLocaleDateString(
        "id-ID",
        {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        }
      );

   return (
      <AdminLayout>

        <div className="dashboard-fluid">

        <div className="welcome-card">

        <div className="welcome-content">

            <h2>
                Halo, Selamat Datang Admin! 👋
            </h2>

            <p>
                Kelola sistem rekomendasi hairstyle AI dengan mudah.
            </p>
            <span className="welcome-date">
                📅 {currentDate}
                </span>

        </div>

        <div className="welcome-image">

            <img
                src={Barberman}
                alt="Barberman"
            />

        </div>

        </div>

        <div className="dashboard-stats">

        <StatCard
            title="Total Hairstyles"
            value={stats.total_hairstyles}
            color="linear-gradient(
                90deg,
                #60a5fa,
                #2563eb
            )"
            icon="hairstyles"
        />

        <StatCard
            title="Total Scans"
            value={stats.total_scans}
            color="linear-gradient(
                90deg,
                #60a5fa,
                #2563eb
            )"
            icon="scans"
        />

        <StatCard
            title="Top Face Shape"
            value={stats.top_face_shape}
            color="linear-gradient(
                90deg,
                #60a5fa,
                #2563eb
            )"
            icon="face"
        />

        <StatCard
            title="Top Hairstyle"
            value={stats.top_hairstyle}
            color="linear-gradient(
                90deg,
                #60a5fa,
                #2563eb
            )"
            icon="style"
        />

        </div>

        <div className="dashboard-grid">

        <div className="dashboard-row">

        <div className="dashboard-chart-card">

        <h3>
            Face Shape Analytics
        </h3>

        <Chart
            options={barOptions}
            series={barSeries}
            type="bar"
            height={320}
        />

        </div>

        <div className="dashboard-donut-card">

        <Chart
        options={donutOptions}
        series={donutSeries}
        type="donut"
        height={320}
        />

        </div>

        </div>

        <div className="dashboard-overview">
        <h3>AI Recommendation Summary</h3>

        <div className="system-status">

            <div className="system-status-item">
                <span className="status-dot active"></span>
                <span>{stats.total_hairstyles} Hairstyles Available</span>
            </div>

            <div className="system-status-item">
                <span className="status-dot active"></span>
                <span>{stats.total_scans} Scan Records</span>
            </div>

            <div className="system-status-item">
                <span className="status-dot active"></span>
                <span>PostgreSQL Connected</span>
            </div>

            <div className="system-status-item">
                <span className="status-dot active"></span>
                <span>AI Recommendation Ready</span>
            </div>

            </div>

        </div>
    </div>


        <div className="dashboard-grid">

        <div className="admin-card">

            <h3>
            Recent Scan History
            </h3>

            <div className="dashboard-table-wrapper">

            <table className="dashboard-table">
            <thead>

            <tr>

                <th>#</th>

                <th>Face Shape</th>

                <th>Hair Type</th>

                <th>Recommendation</th>

                <th>Confidence</th>

            </tr>

            </thead>

            <tbody>

                {stats.recent_scans.map(
                    (item,index)=>(

                        <tr key={index}>

                        <td>
                            {index + 1}
                        </td>

                        <td>
                        {item.face_shape}
                        </td>

                        <td>
                        {item.hair_type}
                        </td>

                        <td>
                        {item.recommended_hairstyle}
                        </td>

                        <td>

                        <span className="confidence-badge">

                            {item.confidence}%

                        </span>

                        </td>

                    </tr>

                ))}

            </tbody>

            </table>
            </div>

            </div>


            <div className="quick-table">
            <h3>
            Recent Scan History
            </h3>
            <div className="quick-actions">
            <div
                className="action-card blue"
                onClick={() => navigate("/admin/hairstyles")}
            >
                <Scissors size={26}/>

                <h3>
                    Hairstyle Database
                </h3>
                    <p>
                    Kelola data hairstyle
                </p>
            </div>

            <div
                className="action-card blue"
                onClick={() => navigate("/admin/history")}
            >
                <ScanFace size={26}/>

                <h3>
                    Scan History
                </h3>
                <p>
                    Lihat riwayat rekomendasi
                </p>
            </div>

            <div
                className="action-card blue"
                onClick={() => navigate("/admin/site-content")}
            >
                <FileText size={26}/>

                <h3>
                    Site Content
                </h3>
                <p>
                    Kelola konten website
                </p>
            </div>

            <div
                className="action-card blue"
                onClick={() => navigate("/admin/settings")}
            >
                <Settings size={26}/>
                <h3>
                    AI Settings
                </h3>
                <p>
                    Konfigurasi sistem AI
                </p>
            </div>

            </div>
            </div>

        </div>

        </div>

      </AdminLayout>
   );
}

export default Dashboard;