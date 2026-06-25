import AdminLayout from "../../components/admin/AdminLayout";

function Profile() {

   return (

      <AdminLayout>

         <div className="page-header">
            <h1>My Profile</h1>
            <p>
               Manage your account information
            </p>
         </div>

         <div className="admin-card">

            <div className="form-group">
               <label>Username</label>
               <input
                  type="text"
                  value="admin"
                  readOnly
               />
            </div>

            <div className="form-group">
               <label>Email</label>
               <input
                  type="email"
                  value="admin@barbershop.com"
                  readOnly
               />
            </div>

         </div>

      </AdminLayout>

   );

}

export default Profile;