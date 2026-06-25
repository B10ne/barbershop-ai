import {

    BrowserRouter,
 
    Routes,
 
    Route
 
 } from "react-router-dom";
import Home from "../pages/Home";
import ScanFace from "../pages/ScanFace";
import AnalysisResult from "../pages/AnalyisisResult";
import HairstyleDetail from "../pages/HairstyleDetail";
import TryOn from "../pages/TryOn";
import Consultation from "../pages/Consultation";
import Compare from "../pages/Compare";
import SavedLooks from "../pages/SavedLooks";
import History from "../pages/History";
import Settings from "../pages/Admin/Settings";
import NotFound from "../pages/NotFound";
import Recommendation from "../pages/Recommendation";
import Features from "../pages/Features";
import Login from "../pages/Admin/Login";
import Dashboard from "../pages/Admin/Dashboard";
import Hairstyles from "../pages/Admin/Hairstyles";
import SiteContent from "../pages/Admin/SiteContent";
import AdminSettings from "../pages/Admin/Settings";
import ScanHistory from "../pages/Admin/ScanHistory";
import HowItWorks from "../pages/HowItWorks";
import About from "../pages/About";
import Profile from "../pages/Admin/Profile";
import ProtectedRoute
from "../components/admin/ProtectedRoute";

 // =========================
 // ROUTES
 // =========================
 
 function AppRoutes() {
 
    return (
 
       <BrowserRouter>
 
          <Routes>
 
             {/* HOME */}
 
             <Route
 
                path="/"
 
                element={<Home />}
 
             />

            <Route
               path="/how-it-works"
               element={<HowItWorks />}
            />

            <Route
               path="/about"
               element={<About />}
            />
            
             {/* SCAN */}
 
             <Route
 
                path="/scan"
 
                element={<ScanFace />}
 
             />
 
             {/* RESULT */}
 
             <Route
 
                path="/result"
 
                element={
                   <AnalysisResult />
                }
 
             />
 
             {/* DETAIL */}
 
             <Route

                path="/hairstyle/:name"

                element={
                <HairstyleDetail />
                }

            />
 
             {/* TRY ON */}
 
             <Route
 
                path="/try-on"
 
                element={<TryOn />}
 
             />
 
             {/* CONSULTATION */}
 
             <Route
 
                path="/consultation"
 
                element={
                   <Consultation />
                }
 
             />
 
             {/* COMPARE */}
 
             <Route
 
                path="/compare"
 
                element={<Compare />}
 
             />
 
             {/* SAVED */}
 
             <Route
 
                path="/saved"
 
                element={<SavedLooks />}
 
             />
 
             {/* HISTORY */}
 
             <Route
 
                path="/history"
 
                element={<History />}
 
             />
 
             {/* SETTINGS */}
 
             <Route
 
                path="/settings"
 
                element={<Settings />}
 
             />

            <Route
               path="/recommendation"
               element={<Recommendation />}
            />
 
             {/* 404 */}
 
             <Route
 
                path="*"
 
                element={<NotFound />}
 
             />
             <Route
               path="/features"

               element={<Features />}

            />

            <Route
               path="/admin/login"
               element={<Login />}
            />

            <Route
               path="/admin/dashboard"
               element={
                  <ProtectedRoute>
                     <Dashboard />
                  </ProtectedRoute>
               }
            />

            <Route
               path="/admin/hairstyles"
               element={<Hairstyles />}
            />

            <Route
               path="/admin/site-content"
               element={<SiteContent />}
            />

            <Route
               path="/admin/settings"
               element={<AdminSettings />}
            />

            <Route
               path="/admin/history"
               element={<ScanHistory />}
            />
            <Route
               path="/admin/profile"
               element={<Profile />}
            />
            
          </Routes>
          
 
       </BrowserRouter>
    );
 }
 
 export default AppRoutes;