import {
    Menu,
    User,
    Settings,
    LogOut
} from "lucide-react";

import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Topbar({ toggleSidebar }) {

    const [open, setOpen] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    const adminUser = JSON.parse(
        localStorage.getItem("adminUser")
    );

    const pageTitles = {
        "/admin/dashboard": "Dashboard",
        "/admin/hairstyles": "Hairstyles",
        "/admin/history": "Scan History",
        "/admin/site-content": "Site Content",
        "/admin/settings": "AI Settings"
    };

    const currentTitle =
        pageTitles[location.pathname] ||
        "Admin Panel";

    const handleLogout = () => {

        localStorage.removeItem(
            "adminUser"
        );

        navigate(
            "/admin/login"
        );

    };

    return (

        <div className="topbar">

            <button
                className="sidebar-toggle"
                onClick={toggleSidebar}
            >
                <Menu size={20} />
            </button>

            <div className="topbar-title">
                {currentTitle}
            </div>

            <div className="profile-wrapper">

                <div
                    className="profile-button"
                    onClick={() => setOpen(!open)}
                >

                <img
                    src={
                        adminUser?.profile_image
                        ? `http://localhost:8000/uploads/${adminUser.profile_image}`
                        : "/avatar.png"
                    }
                    alt="profile"
                    onError={(e)=>{
                        e.target.src="/avatar.png";
                    }}
                />
                    <div className="profile-info">

                        <h4>
                            {adminUser?.username || "Admin"}
                        </h4>

                        <span>
                            {adminUser?.role || "Administrator"}
                        </span>

                    </div>

                </div>

                {open && (

                    <div className="profile-dropdown">

                        <div className="dropdown-header">

                        <img
                            src={
                                adminUser?.profile_image
                                ? `http://localhost:8000/uploads/${adminUser.profile_image}`
                                : "/Admin.jpg"
                            }
                            alt="profile"
                            onError={(e)=>{
                                e.target.src="/avatar.png";
                            }}
                        />

                            <div>

                                <h4>
                                    {adminUser?.username || "Admin"}
                                </h4>

                                <span>
                                    {adminUser?.email ||
                                        "admin@barbershop.com"}
                                </span>

                            </div>

                        </div>

                        <button
                            className="dropdown-item"
                            onClick={() =>
                                navigate("/admin/profile")
                            }
                            >
                            <User size={18} />
                            My Profile
                            </button>

                            <button
                            className="dropdown-item"
                            onClick={() =>
                                navigate("/admin/settings")
                            }
                            >
                            <Settings size={18} />
                            System Settings
                            </button>

                        <a
                            className="logout-menu"
                            onClick={handleLogout}
                        >

                            <LogOut size={18} />

                            Logout

                        </a>

                    </div>

                )}

            </div>

        </div>

    );

}

export default Topbar;