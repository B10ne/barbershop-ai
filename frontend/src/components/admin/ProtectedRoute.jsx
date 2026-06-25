import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {

   const user =
      localStorage.getItem(
         "adminUser"
      );

   if (!user) {

      return (
         <Navigate
            to="/admin/login"
         />
      );

   }

   return children;
}

export default ProtectedRoute;