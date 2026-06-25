import {
   Link,
   useNavigate
}
from "react-router-dom";

function Navbar() {

   const navigate =
      useNavigate();

   return (

      <nav className="navbar">

         <div
            className="navbar-logo"
            onClick={() => navigate("/")}
            style={{ cursor:"pointer" }}
         >
            AI BARBERSHOP
         </div>

         <div className="navbar-links">

            <Link to="/">
               Home
            </Link>

            <Link to="/Features">
               Features
            </Link>

            <Link to="/how-it-works">
               How It Works
            </Link>

            <Link to="/about">
               About
            </Link>

         </div>

         <button

            className="navbar-button"

            onClick={() =>
               navigate("/scan")
            }

         >
            Start Scan
         </button>

      </nav>
   );
}

export default Navbar;