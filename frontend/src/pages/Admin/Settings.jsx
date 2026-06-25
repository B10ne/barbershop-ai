import { useEffect, useState } from "react";
import axios from "axios";
import "../../styles/admin/settings.css";
import AdminLayout from "../../components/admin/AdminLayout";

function Settings() {

   const defaultForm = {
      shop_name: "",
      logo_url: "",
      address: "",
      whatsapp: "",
      instagram: "",
      email: "",
      opening_hours: ""
   };

   const [form, setForm] = useState(defaultForm);

   const [loading, setLoading] = useState(true);
   const [activeTab, setActiveTab] = useState("general");

   useEffect(() => {

      fetchSettings();

   }, []);

   const fetchSettings = async () => {

      try {

         const response = await axios.get(
            "http://localhost:8000/admin/settings"
         );

         if (response.data) {

            setForm(response.data);

         }

      } catch (error) {

         console.error(
            "Failed load settings:",
            error
         );

      } finally {

         setLoading(false);

      }

   };

   const handleChange = (e) => {

      setForm({
         ...form,
         [e.target.name]: e.target.value
      });

   };

   const handleSave = async () => {

      try {

         await axios.put(
            "http://localhost:8000/admin/settings",
            form
         );

         alert(
            "Settings berhasil disimpan"
         );

      } catch (error) {

         console.error(error);

         alert(
            "Gagal menyimpan settings"
         );

      }

   };

   if (loading) {

      return (
         <AdminLayout>
            <div className="loading-settings">
               Loading Settings...
            </div>
         </AdminLayout>
      );

   }

   return (

      <AdminLayout>

         <div className="page-header">

            <h1>System Settings</h1>

            <p>
               Manage application configuration
            </p>

         </div>

         <div className="settings-tabs">

<button
   className={`settings-tab ${
      activeTab === "general" ? "active" : ""
   }`}
   onClick={() => setActiveTab("general")}
>
   General
</button>

<button
   className={`settings-tab ${
      activeTab === "branding" ? "active" : ""
   }`}
   onClick={() => setActiveTab("branding")}
>
   Branding
</button>

<button
   className={`settings-tab ${
      activeTab === "contact" ? "active" : ""
   }`}
   onClick={() => setActiveTab("contact")}
>
   Contact
</button>

<button
   className={`settings-tab ${
      activeTab === "social" ? "active" : ""
   }`}
   onClick={() => setActiveTab("social")}
>
   Social Media
</button>

<button
   className={`settings-tab ${
      activeTab === "ai" ? "active" : ""
   }`}
   onClick={() => setActiveTab("ai")}
>
   AI Settings
</button>

</div>

<div className="admin-card settings-card">

{activeTab === "general" && (

   <div className="settings-grid">

      <div className="form-group">
         <label>Shop Name</label>
         <input
            type="text"
            name="shop_name"
            value={form?.shop_name || ""}
            onChange={handleChange}
         />
      </div>

      <div className="form-group">
         <label>Opening Hours</label>
         <input
            type="text"
            name="opening_hours"
            value={form?.opening_hours || ""}
            onChange={handleChange}
         />
      </div>

      <div className="form-group full-width">
         <label>Address</label>
         <textarea
            name="address"
            value={form?.address || ""}
            onChange={handleChange}
         />
      </div>

   </div>

)}

{activeTab === "branding" && (

   <div className="settings-grid">

      <div className="form-group">
         <label>Logo URL</label>
         <input
            type="text"
            name="logo_url"
            value={form?.logo_url || ""}
            onChange={handleChange}
         />
      </div>

   </div>

)}

{activeTab === "contact" && (

   <div className="settings-grid">

      <div className="form-group">
         <label>Email</label>
         <input
            type="email"
            name="email"
            value={form?.email || ""}
            onChange={handleChange}
         />
      </div>

      <div className="form-group">
         <label>WhatsApp</label>
         <input
            type="text"
            name="whatsapp"
            value={form?.whatsapp || ""}
            onChange={handleChange}
         />
      </div>

   </div>

)}

{activeTab === "social" && (

   <div className="settings-grid">

      <div className="form-group">
         <label>Instagram</label>
         <input
            type="text"
            name="instagram"
            value={form?.instagram || ""}
            onChange={handleChange}
         />
      </div>

   </div>

)}

{activeTab === "ai" && (

   <div className="settings-grid">

      <div className="form-group">
         <label>AI Provider</label>
         <input
            type="text"
            placeholder="OpenAI"
         />
      </div>

      <div className="form-group">
         <label>Model</label>
         <input
            type="text"
            placeholder="GPT-4o"
         />
      </div>

   </div>

)}

</div>

<div className="settings-actions">

<button
   className="btn-primary"
   onClick={handleSave}
>
   Save Changes
</button>

</div>

      </AdminLayout>

   );

}

export default Settings;