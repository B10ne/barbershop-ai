import { useEffect, useState } from "react";
import axios from "axios";
import AdminLayout from "../../components/admin/AdminLayout";
import "../../styles/admin/admin.css";

function SiteContent() {

   const [contents, setContents] = useState([]);
   const [selectedContent, setSelectedContent] = useState(null);
   const [showModal, setShowModal] = useState(false);

   useEffect(() => {
      loadContents();
   }, []);

   const loadContents = async () => {

      try {

         const response = await axios.get(
            "http://localhost:8000/admin/site-content"
         );

         setContents(response.data);

      } catch (error) {

         console.error(error);

      }
   };

   const saveContent = async () => {

      try {

         await axios.put(
            `http://localhost:8000/admin/site-content/${selectedContent.id}`,
            selectedContent
         );

         loadContents();

         setShowModal(false);

      } catch (error) {

         console.error(error);

      }
   };

   return (

      <AdminLayout>

         <div className="admin-page">

            <div className="sneat-table-wrapper">

               <div className="table-header">

                  <h3>Website Content</h3>

               </div>

               <div className="table-responsive">

                  <table className="sneat-table">

                     <thead>

                        <tr>

                           <th>Key</th>
                           <th>Title</th>
                           <th>Content</th>
                           <th>Action</th>

                        </tr>

                     </thead>

                     <tbody>

                        {contents.map((item) => (

                           <tr key={item.id}>

                              <td>
                                 <span className="badge blue">
                                    {item.content_key}
                                 </span>
                              </td>

                              <td>
                                 <strong>
                                    {item.title}
                                 </strong>
                              </td>

                              <td>
                                 {item.content}
                              </td>

                              <td>

                                 <div className="table-actions">

                                    <button
                                       className="view-btn"
                                       onClick={() => {

                                          setSelectedContent(item);
                                          setShowModal(true);

                                       }}
                                    >
                                       ✏️
                                    </button>

                                 </div>

                              </td>

                           </tr>

                        ))}

                     </tbody>

                  </table>

               </div>

            </div>

         </div>

         {showModal && selectedContent && (

            <div className="modal-overlay">

               <div className="tailadmin-modal">

                  <div className="tailadmin-header">

                     <h2>Edit Content</h2>

                     <button
                        className="close-btn"
                        onClick={() =>
                           setShowModal(false)
                        }
                     >
                        ✕
                     </button>

                  </div>

                  <div className="tailadmin-body">

                     <div className="form-group">

                        <label>
                           Content Key
                        </label>

                        <input
                           disabled
                           value={selectedContent.content_key}
                        />

                     </div>

                     <div className="form-group">

                        <label>
                           Title
                        </label>

                        <input
                           value={selectedContent.title}
                           onChange={(e) =>
                              setSelectedContent({
                                 ...selectedContent,
                                 title: e.target.value
                              })
                           }
                        />

                     </div>

                     <div className="form-group">

                        <label>
                           Content
                        </label>

                        <textarea
                           rows="8"
                           value={selectedContent.content}
                           onChange={(e) =>
                              setSelectedContent({
                                 ...selectedContent,
                                 content: e.target.value
                              })
                           }
                        />

                     </div>

                  </div>

                  <div className="tailadmin-footer">

                     <button
                        className="delete-all-btn"
                        onClick={() =>
                           setShowModal(false)
                        }
                     >
                        Cancel
                     </button>

                     <button
                        className="add-btn"
                        onClick={saveContent}
                     >
                        Save Changes
                     </button>

                  </div>

               </div>

            </div>

         )}

      </AdminLayout>

   );
}

export default SiteContent;