import {
    LayoutDashboard,
    Scissors,
    History,
    Settings,
    FileText,
    LogOut,
    Sparkles
} from "lucide-react";

import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect,useState }
from "react";

import axios from "axios";


function Sidebar({ collapse }) {
    const [stats,setStats] =
useState({

    total_hairstyles:0,

    top_hair_type:"-"

});
const fetchStats = async () => {

    try {

        const res = await axios.get(
            "http://localhost:8000/admin/dashboard"
        );
        const hairRes = await axios.get(
            "http://localhost:8000/admin/hairstyles"
         );

        setStats(res.data);

    }
    catch (err) {

        console.error(err);

    }

};

useEffect(() => {

    fetchStats();

}, []);



return (

<aside
className={
collapse 
? "sidebar collapsed"
: "sidebar"
}
>


    <div className="sidebar-brand">


        <div className="sidebar-logo-icon">
            ✂
        </div>


        <div className="sidebar-text">

            <h2>
                AI Barbershop
            </h2>

            <span>
                Admin Dashboard
            </span>

        </div>


    </div>



    <nav className="sidebar-menu">


        <NavLink to="/admin/dashboard">

            <LayoutDashboard size={20}/>

            <span>
                Dashboard
            </span>

        </NavLink>



        <NavLink to="/admin/hairstyles">

            <Scissors size={20}/>

            <span>
                Hairstyles
            </span>

        </NavLink>



        <NavLink to="/admin/history">

            <History size={20}/>

            <span>
                Scan History
            </span>

        </NavLink>



        <NavLink to="/admin/site-content">

            <FileText size={20}/>

            <span>
                Site Content
            </span>

        </NavLink>



        <NavLink to="/admin/settings">

            <Settings size={20}/>

            <span>
                Settings
            </span>

        </NavLink>

        <NavLink to="/admin/profile">

        <Settings size={20}/>

        <span>
            Profile
        </span>

        </NavLink>



    </nav>



    <div className="sidebar-stats-card">

        <h4>
            Hairstyle Statistics
        </h4>

        <div className="sidebar-stat-item">

            <span>
                Total Hairstyles
            </span>

            <strong>
                {stats.total_hairstyles}
            </strong>

        </div>

        <div className="sidebar-stat-item">

            <span>
                Top Hair 
            </span>

            <strong>
            {stats.top_hairstyle}
            </strong>

        </div>

        </div>



    <Link
    to="/admin/login"
    className="logout-btn"
        >

            <LogOut size={18}/>

            <span>
                Logout
            </span>

        </Link>



</aside>

)

}


export default Sidebar;