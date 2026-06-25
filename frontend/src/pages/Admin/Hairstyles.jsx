import { useEffect, useState } from "react";
import axios from "axios";
import "../../styles/admin/admin.css";
import "../../styles/admin/modal.css";
import AdminLayout from "../../components/admin/AdminLayout";
import {
   Plus,
   Search,
   Download,
   Edit,
   Trash2,
   Eye
 } from "lucide-react";
function Hairstyles() {

   const [hairstyles, setHairstyles] = useState([]);
   const [loading, setLoading] = useState(true);
   const [search, setSearch] = useState("");
   const [currentPage, setCurrentPage] = useState(1);
   const [showAddModal, setShowAddModal] = useState(false);
   const [showEditModal, setShowEditModal] = useState(false);
   const [showDetailModal, setShowDetailModal] = useState(false);
   const [selectedHair, setSelectedHair] = useState(null);
   const [showDeleteModal, setShowDeleteModal] = useState(false);
   const [deleteHair, setDeleteHair] = useState(null);
   const [formData, setFormData] = useState({
   name: "",
   image: "",
   description: "",
   maintenance: "",
   preferred_length: "",
   formality: "",
   consultant_prompt: "",
   scores: {},
   style_tags: [],
   professions: [],
   personalities: [],
   hair_types: [],
   reasons: [],
   active: true
   });
   const exportCSV = () => {

      const headers = [
        "Name",
        "Length",
        "Formality",
        "Maintenance"
      ];
    
      const rows = hairstyles.map(item => [
    
        item.name,
        item.preferred_length,
        item.formality,
        item.maintenance
    
      ]);
    
      const csv = [
        headers,
        ...rows
      ]
      .map(row => row.join(","))
      .join("\n");
    
      const blob = new Blob(
        [csv],
        {
          type:"text/csv"
        }
      );
    
      const link =
        document.createElement("a");
    
      link.href =
        URL.createObjectURL(blob);
    
      link.download =
        "hairstyles.csv";
    
      link.click();
    
    };
    const handleDelete = async () => {

      try{
    
        await axios.delete(
          `http://localhost:8000/admin/hairstyles/${deleteHair.id}`
        );
    
        setShowDeleteModal(false);
    
        setDeleteHair(null);
    
        fetchHairstyles();
    
      }
      catch(error){
    
        console.error(error);
    
      }
    
    };
   const rowsPerPage = 10;
   useEffect(() => {

      fetchHairstyles();

   }, []);

   const fetchHairstyles = async () => {

      try {

         const response = await axios.get(
            "http://localhost:8000/admin/hairstyles"
         );

         setHairstyles(
            response.data
         );

      } catch (error) {

         console.error(
            "Error fetching hairstyles:",
            error
         );

      } finally {

         setLoading(false);

      }

   };
   const handleAdd = async () => {

      try {
   
         await axios.post(
            "http://localhost:8000/admin/hairstyles",
            formData
         );
   
         setShowAddModal(false);
   
         fetchHairstyles();
   
         alert(
            "Hairstyle berhasil ditambahkan"
         );
   
      }
      catch(error){
   
         console.error(error);
   
         alert(
            "Gagal menambahkan hairstyle"
         );
   
      }
   
   };
   const handleEdit = async () => {

      try {
   
         await axios.put(
   
            `http://localhost:8000/admin/hairstyles/${selectedHair.id}`,
   
            formData
   
         );
   
         setShowEditModal(false);
   
         fetchHairstyles();
   
         alert(
            "Hairstyle berhasil diperbarui"
         );
   
      }
      catch(error){
   
         console.error(error);
   
         alert(
            "Gagal mengubah hairstyle"
         );
   
      }
   
   };
   const filteredData = hairstyles.filter((item) =>
      item.name?.toLowerCase().includes(
        search.toLowerCase()
      )
    );
    
    const lastIndex =
      currentPage * rowsPerPage;
    
    const firstIndex =
      lastIndex - rowsPerPage;
    
    const currentRows =
      filteredData.slice(
        firstIndex,
        lastIndex
      );
    
    const totalPages = Math.ceil(
      filteredData.length / rowsPerPage
    );
   return (
<>
<AdminLayout>

<div className="admin-page">

   <div className="admin-card">

   <div className="sneat-table-wrapper">

<div className="table-toolbar">

  <div className="toolbar-left">

    <button className="export-btn"
    onClick={exportCSV}>

      <Download size={18}/>
      Export

    </button>

  </div>

  <div className="toolbar-right">

    <div className="search-box">

      <Search size={16}/>

      <input
        type="text"
        placeholder="Search hairstyle..."
        value={search}
        onChange={(e)=>
          setSearch(e.target.value)
        }
      />

    </div>

    <button
      className="add-btn"
      onClick={()=>
      setShowAddModal(true)
      }
      >

      <Plus size={18}/>

      Add Hairstyle

      </button>

  </div>

</div>

<div className="table-responsive">

  <table className="sneat-table">

    <thead>

      <tr>

        <th>Image</th>
        <th>Name</th>
        <th>Hair Type</th>
        <th>Length</th>
        <th>Formality</th>
        <th>Actions</th>

      </tr>

    </thead>

    <tbody>

    {currentRows.map((item) => (

      <tr key={item.id}>

        <td>

        <img
         src={`http://localhost:8000/images/${item.image}`}
         alt={item.name}
         className="table-avatar"
      />

        </td>

        <td>

          <strong>
            {item.name}
          </strong>

        </td>

        <td>

          <span className="badge blue">

            {Array.isArray(item.hair_types)
            ? item.hair_types.join(", ")
            : "-"}

          </span>

        </td>

        <td>

        {item.preferred_length}

        </td>

        <td>

          <span className="badge purple">

            {item.formality}

          </span>

        </td>

        <td>

         <div className="table-actions">

         <button
         className="view-btn"
         onClick={()=>{

         setSelectedHair(item);

         setShowDetailModal(true);

         }}
         >
         <Eye size={16}/>
         </button>

         <button
         className="edit-btn"
         onClick={()=>{

         setSelectedHair(item);

         setFormData(item);

         setShowEditModal(true);

         }}
         >

         <Edit size={16}/>

         </button>

         <button
          className="delete-btn"
          onClick={() => {

          setDeleteHair(item);

          setShowDeleteModal(true);

          }}
          >

          <Trash2 size={16}/>

          </button>

         </div>

         </td>
      </tr>

    ))}

    </tbody>

  </table>

</div>

<div className="table-footer">

  <span>

    Showing {firstIndex + 1}
    {" - "}
    {
      Math.min(
        lastIndex,
        filteredData.length
      )
    }

    of {filteredData.length}

  </span>

  <div className="pagination">

    <button
      disabled={currentPage === 1}
      onClick={() =>
        setCurrentPage(
          currentPage - 1
        )
      }
    >
      Prev
    </button>

    {[...Array(totalPages)].map(
      (_, index) => (

        <button
          key={index}
          className={
            currentPage === index + 1
              ? "active"
              : ""
          }
          onClick={() =>
            setCurrentPage(
              index + 1
            )
          }
        >

          {index + 1}

        </button>

    ))}

    <button
      disabled={
        currentPage === totalPages
      }
      onClick={() =>
        setCurrentPage(
          currentPage + 1
        )
      }
    >

      Next

    </button>

  </div>

</div>

</div>

   </div>

</div>

</AdminLayout>
{
showDetailModal &&
selectedHair && (

<div className="detail-overlay">

    <div className="detail-modal-v2">

        <div className="detail-header-v2">

            <h2>Detail Hairstyle</h2>

            <button
            className="close-btn"
            onClick={() =>
            setShowDetailModal(false)
            }
            >
                ✕
            </button>

        </div>

        <div className="detail-body-v2">

            {/* LEFT */}

            <div className="detail-left-v2">
            <div className="detail-section">
                <img
                    src={`http://localhost:8000/images/${selectedHair.image}`}
                    alt={selectedHair.name}
                    className="detail-image"
                />

                <div className="detail-section">
                <div className="detail-section">
                    <h4>Suitable Face Shapes</h4>

                    <div className="tag-container">

                        {selectedHair.style_tags?.map(
                        (item,index)=>(
                            <span
                            key={index}
                            className="detail-tag"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                    </div>
                    </div>
                    <div className="hair-meta-grid">

                    <div className="detail-section">

                        <h4>Professions</h4>

                        <div className="tag-container">

                            {
                            selectedHair.professions?.map(
                            (item,index)=>(
                                <span
                                key={index}
                                className="detail-tag"
                                >
                                    {item}
                                </span>
                            ))
                            }

                        </div>

                    </div>

                    <div className="detail-section">

                        <h4>Personalities</h4>

                        <div className="tag-container">

                            {
                            selectedHair.personalities?.map(
                            (item,index)=>(
                                <span
                                key={index}
                                className="detail-tag"
                                >
                                    {item}
                                </span>
                            ))
                            }

                        </div>

                    </div>

                </div>

                </div>

            </div>

            {/* RIGHT */}

            <div className="detail-right-v2">

                <h3>
                    Informasi Hairstyle
                </h3>

                <div className="detail-grid">

                    <div className="detail-field">
                        <label>Name</label>
                        <span>{selectedHair.name}</span>
                    </div>

                    <div className="detail-field">
                        <label>Status</label>
                        <span>
                            {
                            selectedHair.active
                            ? "Active"
                            : "Inactive"
                            }
                        </span>
                    </div>

                    <div className="detail-field">
                        <label>Length</label>
                        <span>
                            {selectedHair.preferred_length}
                        </span>
                    </div>

                    <div className="detail-field">
                        <label>Formality</label>
                        <span>
                            {selectedHair.formality}
                        </span>
                    </div>

                    <div className="detail-field">
                        <label>Maintenance</label>
                        <span>
                            {selectedHair.maintenance}
                        </span>
                    </div>

                    <div className="detail-field">
                        <label>Hair Types</label>
                        <span>
                            {
                            Array.isArray(selectedHair.hair_types)
                            ? selectedHair.hair_types.join(", ")
                            : "-"
                            }
                        </span>
                    </div>

                </div>
                <div className="detail-section">

              <h4>Description</h4>

              <p>
                  {selectedHair.description}
              </p>

              </div>

                <div className="detail-section">

                    <h4>Recommendation Reasons</h4>

                    <p>

                        {
                        Array.isArray(selectedHair.reasons)
                        ? selectedHair.reasons.join(", ")
                        : "-"
                        }

                    </p>

                </div>

                <div className="detail-section">

                    <h4>AI Consultant Prompt</h4>

                    <div className="prompt-box">

                        {
                        selectedHair.consultant_prompt
                        || "-"
                        }

                    </div>

                </div>

            </div>

        </div>

        <div className="detail-footer-v2">

            <button
            className="hair-btn-cancel"
            onClick={() =>
            setShowDetailModal(false)
            }
            >
                Close
            </button>

            <button
            className="hair-btn-edit"
            >
                Edit Hairstyle
            </button>

        </div>

    </div>

</div>
)
}
{
showAddModal && (

<div className="modal-overlay">

<div className="tailadmin-modal">

<div className="modal-header">

  <h2>Add Hairstyle</h2>

  <button
    className="close-btn"
    onClick={() => setShowAddModal(false)}
  >
    ✕
  </button>

</div>

<div className="modal-form-grid">

  <div className="form-group">

    <label>Name</label>

    <input
      value={formData.name}
      onChange={(e)=>
      setFormData({
        ...formData,
        name:e.target.value
      })}
    />

  </div>

  <div className="form-group">

    <label>Image Filename</label>

    <input
      placeholder="quiff.png"
      value={formData.image}
      onChange={(e)=>
      setFormData({
        ...formData,
        image:e.target.value
      })}
    />

  </div>

  <div className="form-group">

    <label>Maintenance</label>

    <input
      value={formData.maintenance}
      onChange={(e)=>
      setFormData({
        ...formData,
        maintenance:e.target.value
      })}
    />

  </div>

  <div className="form-group">

    <label>Preferred Length</label>

    <input
      value={formData.preferred_length}
      onChange={(e)=>
      setFormData({
        ...formData,
        preferred_length:e.target.value
      })}
    />

  </div>

  <div className="form-group">

    <label>Formality</label>

    <input
      value={formData.formality}
      onChange={(e)=>
      setFormData({
        ...formData,
        formality:e.target.value
      })}
    />

  </div>

  <div className="form-group">

    <label>Hair Types</label>

    <input
      placeholder="Straight, Curly"
      onChange={(e)=>
      setFormData({
        ...formData,
        hair_types:e.target.value
        .split(",")
        .map(item=>item.trim())
      })}
    />

  </div>

  <div className="form-group">

    <label>Style Tags</label>

    <input
      placeholder="Modern, Stylish"
      onChange={(e)=>
      setFormData({
        ...formData,
        style_tags:e.target.value
        .split(",")
        .map(item=>item.trim())
      })}
    />

  </div>

  <div className="form-group">

    <label>Professions</label>

    <input
      placeholder="Student, Content Creator"
      onChange={(e)=>
      setFormData({
        ...formData,
        professions:e.target.value
        .split(",")
        .map(item=>item.trim())
      })}
    />

  </div>

  <div className="form-group">

    <label>Personalities</label>

    <input
      placeholder="Friendly, Confident"
      onChange={(e)=>
      setFormData({
        ...formData,
        personalities:e.target.value
        .split(",")
        .map(item=>item.trim())
      })}
    />

  </div>

  <div className="form-group">

    <label>Active</label>

    <select
      value={formData.active}
      onChange={(e)=>
      setFormData({
        ...formData,
        active:e.target.value === "true"
      })}
    >
      <option value="true">Active</option>
      <option value="false">Inactive</option>
    </select>

  </div>

</div>

<div className="form-group full-width">

  <label>Description</label>

  <textarea
    value={formData.description}
    onChange={(e)=>
    setFormData({
      ...formData,
      description:e.target.value
    })}
  />

</div>

<div className="form-group full-width">

  <label>Recommendation Reasons</label>

  <textarea
    placeholder="Reason 1, Reason 2"
    onChange={(e)=>
    setFormData({
      ...formData,
      reasons:e.target.value
      .split(",")
      .map(item=>item.trim())
    })}
  />

</div>

<div className="form-group full-width">

  <label>Consultant Prompt</label>

  <textarea
    value={formData.consultant_prompt}
    onChange={(e)=>
    setFormData({
      ...formData,
      consultant_prompt:e.target.value
    })}
  />

</div>

<div className="modal-footer">

  <button
    className="btn-cancel"
    onClick={() =>
      setShowAddModal(false)
    }
  >
    Cancel
  </button>

  <button
    className="btn-save"
    onClick={handleAdd}
  >
    Save Hairstyle
  </button>

</div>

</div>

</div>

)
}
{
showEditModal && (

<div className="modal-overlay">

<div className="tailadmin-modal">

<div className="modal-header">

  <h2>Edit Hairstyle</h2>

  <button
    className="close-btn"
    onClick={() => setShowEditModal(false)}
  >
    ✕
  </button>

</div>

<div className="modal-form-grid">

  <div className="form-group">

    <label>Name</label>

    <input
      value={formData.name || ""}
      onChange={(e)=>
      setFormData({
        ...formData,
        name:e.target.value
      })}
    />

  </div>

  <div className="form-group">

    <label>Image</label>

    <input
      value={formData.image || ""}
      onChange={(e)=>
      setFormData({
        ...formData,
        image:e.target.value
      })}
    />

  </div>

  <div className="form-group">

    <label>Maintenance</label>

    <input
      value={formData.maintenance || ""}
      onChange={(e)=>
      setFormData({
        ...formData,
        maintenance:e.target.value
      })}
    />

  </div>

  <div className="form-group">

    <label>Preferred Length</label>

    <input
      value={formData.preferred_length || ""}
      onChange={(e)=>
      setFormData({
        ...formData,
        preferred_length:e.target.value
      })}
    />

  </div>

  <div className="form-group">

    <label>Formality</label>

    <input
      value={formData.formality || ""}
      onChange={(e)=>
      setFormData({
        ...formData,
        formality:e.target.value
      })}
    />

  </div>

  <div className="form-group">

    <label>Hair Types</label>

    <input
      value={
        Array.isArray(formData.hair_types)
        ? formData.hair_types.join(", ")
        : ""
      }
      onChange={(e)=>
      setFormData({
        ...formData,
        hair_types:e.target.value
        .split(",")
        .map(item=>item.trim())
      })}
    />

  </div>

</div>

<div className="form-group full-width">

  <label>Description</label>

  <textarea
    value={formData.description || ""}
    onChange={(e)=>
    setFormData({
      ...formData,
      description:e.target.value
    })}
  />

</div>

<div className="form-group full-width">

  <label>Consultant Prompt</label>

  <textarea
    value={formData.consultant_prompt || ""}
    onChange={(e)=>
    setFormData({
      ...formData,
      consultant_prompt:e.target.value
    })}
  />

</div>

<div className="modal-footer">

  <button
    className="btn-cancel"
    onClick={() =>
    setShowEditModal(false)}
  >
    Cancel
  </button>

  <button
    className="btn-save"
    onClick={handleEdit}
  >
    Update Hairstyle
  </button>

</div>

</div>

</div>

)
}
{
showDeleteModal &&
deleteHair && (

<div className="delete-overlay">

  <div className="delete-modal">

      <div className="delete-icon">

          <Trash2 size={28}/>

      </div>

      <h3>
          Delete Hairstyle
      </h3>

      <p>

          Are you sure you want to delete

          <strong>
              {" "}
              {deleteHair.name}
              {" "}
          </strong>

          ?

      </p>

      <span>

          This action cannot be undone.

      </span>

      <div className="delete-footer">

          <button
          className="delete-cancel-btn"
          onClick={() => {

              setShowDeleteModal(false);

              setDeleteHair(null);

          }}
          >

              Cancel

          </button>

          <button
          className="delete-confirm-btn"
          onClick={handleDelete}
          >

              Delete Hairstyle

          </button>

      </div>

  </div>

</div>

)
}
</>
   );
}

export default Hairstyles;