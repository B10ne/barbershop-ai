import { useEffect, useState } from "react";
import axios from "axios";
import "../../styles/admin/admin.css";
import AdminLayout from "../../components/admin/AdminLayout";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import {
   Trash2,
   Eye,
   Trash
 } from "lucide-react";

function ScanHistory() {

    const [scanHistory, setScanHistory] =
    useState([]);

    const [loading, setLoading] =
    useState(true);

    const [search, setSearch] =
    useState("");

    const [faceFilter, setFaceFilter] =
    useState("All");

    useEffect(() => {

        fetchScanHistory();

    }, []);
    
    const [selectedScan,setSelectedScan] =
   useState(null);

   const [showDetail,setShowDetail] =
   useState(false);
   const handleDelete = async(id) => {

      const confirmDelete =
      window.confirm(
          "Delete this scan history?"
      );
  
      if(!confirmDelete) return;
  
      try{
  
          await axios.delete(
              `http://localhost:8000/admin/scan-history/${id}`
          );
  
          fetchScanHistory();
  
      }
  
      catch(error){
  
          console.error(error);
  
          alert(
              "Failed to delete data"
          );
  
      }
  
  };
  const handleDeleteAll = async() => {

   const confirmDelete =
   window.confirm(
       "Delete ALL scan history?"
   );

   if(!confirmDelete) return;

   try{

       await axios.delete(
           "http://localhost:8000/admin/scan-history"
       );

       fetchScanHistory();

   }

   catch(error){

       console.error(error);

   }

};
    const fetchScanHistory = async () => {

        try {

            const res =
            await axios.get(
                "http://localhost:8000/admin/scan-history"
            );

            setScanHistory(
                res.data
            );

        }

        catch (error) {

            console.error(error);

        }

        finally {

            setLoading(false);

        }

    };
    const exportExcel = () => {

      const worksheet =
      XLSX.utils.json_to_sheet(
          filteredHistory
      );
  
      const workbook =
      XLSX.utils.book_new();
  
      XLSX.utils.book_append_sheet(
          workbook,
          worksheet,
          "Scan History"
      );
  
      const excelBuffer =
      XLSX.write(
          workbook,
          {
              bookType:"xlsx",
              type:"array"
          }
      );
  
      const fileData =
      new Blob(
          [excelBuffer],
          {
              type:
              "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
          }
      );
  
      saveAs(
          fileData,
          "scan_history.xlsx"
      );
  
  };
    const filteredHistory =
    scanHistory.filter(item => {

        const matchSearch =

            item.face_shape
            ?.toLowerCase()
            .includes(
                search.toLowerCase()
            )

            ||

            item.hair_type
            ?.toLowerCase()
            .includes(  search.toLowerCase()
            )
        
            ||

            item.recommended_hairstyle
            ?.toLowerCase()
            .includes(
                search.toLowerCase()
            );

            const matchFace =
            faceFilter === "All"
            ||
            item.face_shape?.toLowerCase() ===
            faceFilter.toLowerCase();

        return (
            matchSearch &&
            matchFace
        );

    });

    return (

        <AdminLayout>

            <div className="sneat-table-wrapper">

                <div className="table-header">

                    <h3>
                        Scan History
                    </h3>

                    <div className="scan-toolbar">

                        <input
                            type="text"
                            placeholder="Search recommendation..."
                            value={search}
                            onChange={(e) =>
                                setSearch(
                                    e.target.value
                                )
                            }
                            className="scan-search"
                        />

                        <select
                            value={faceFilter}
                            onChange={(e) =>
                                setFaceFilter(
                                    e.target.value
                                )
                            }
                            className="scan-filter"
                        >

                            <option value="All">
                                All Face Shapes
                            </option>

                            <option value="oval">
                                Oval
                            </option>

                            <option value="round">
                                Round
                            </option>

                            <option value="square">
                                Square
                            </option>

                            <option value="rectangle">
                                Rectangle
                            </option>

                        </select>
                        <button
                           className="export-btn"
                           onClick={exportExcel}
                        >
                           Export Excel
                        </button>

                        <button
                           className="delete-all-btn"
                           onClick={handleDeleteAll}
                        >
                           Delete All
                        </button>

                    </div>

                </div>

                <div className="table-responsive">

                    <table className="sneat-table scan-history-table">

                        <thead>

                            <tr>

                                <th>No</th>

                                <th>Face Shape</th>

                                <th>Hair Type</th>

                                <th>Recommendation</th>

                                <th>Confidence</th>

                                <th>Date</th>

                                <th>Action</th>

                            </tr>

                        </thead>

                        <tbody>

                            {

                                loading ?

                                (

                                    <tr>

                                        <td
                                            colSpan="7"
                                            style={{
                                                textAlign: "center"
                                            }}
                                        >

                                            Loading...

                                        </td>

                                    </tr>

                                )

                                :

                                filteredHistory.length === 0 ?

                                (

                                    <tr>

                                        <td
                                            colSpan="7"
                                            style={{
                                                textAlign: "center"
                                            }}
                                        >

                                            No Scan History Found

                                        </td>

                                    </tr>

                                )

                                :

                                (

                                    filteredHistory.map(

                                        (
                                            item,
                                            index
                                        ) => (

                                            <tr
                                                key={item.id}
                                            >

                                                <td>
                                                    {index + 1}
                                                </td>

                                                <td>

                                                    <span
                                                        className="badge blue"
                                                    >

                                                        {item.face_shape}

                                                    </span>

                                                </td>

                                                <td>

                                                    {item.hair_type}

                                                </td>

                                                <td>

                                                    <strong>

                                                        {
                                                            item.recommended_hairstyle
                                                        }

                                                    </strong>

                                                </td>

                                                <td>

                                                    <span
                                                      className="badge green"
                                                    >

                                                        {
                                                         item.confidence
                                                        }%

                                                    </span>

                                                </td>

                                                <td>

                                                    {
                                                        item.created_at
                                                    }

                                                </td>

                                                <td>

                                                <div className="table-actions">

                                                   <button
                                                      className="view-btn"
                                                      onClick={() => {

                                                            setSelectedScan(item);

                                                            setShowDetail(true);

                                                      }}
                                                   >
                                                      <Eye size={16}/>
                                                   </button>

                                                   <button
                                                      className="delete-btn"
                                                      onClick={() =>
                                                            handleDelete(item.id)
                                                      }
                                                   >
                                                      <Trash size={16}/>
                                                   </button>

                                                </div>

                                                </td>

                                            </tr>

                                        )

                                    )

                                )

                            }

                        </tbody>

                    </table>

                </div>

            </div>

            {
showDetail &&
selectedScan && (

<div className="modal-overlay">

    <div className="scan-detail-modal">

        <div className="modal-header">

            <h3>
                Scan Detail
            </h3>

            <button
                onClick={() =>
                    setShowDetail(false)
                }
            >
                ✕
            </button>

        </div>

        <div className="detail-grid">

            <div>

                <label>
                    Face Shape
                </label>

                <p>
                    {selectedScan.face_shape}
                </p>

            </div>

            <div>

                <label>
                    Hair Type
                </label>

                <p>
                    {selectedScan.hair_type}
                </p>

            </div>

            <div>

                <label>
                    Recommendation
                </label>

                <p>
                    {
                    selectedScan.recommended_hairstyle
                    }
                </p>

            </div>

            <div>

                <label>
                    Confidence
                </label>

                <p>
                    {
                    selectedScan.confidence
                    }%
                </p>

            </div>

            <div>

                <label>
                    Date
                </label>

                <p>
                    {
                    selectedScan.created_at
                    }
                </p>

            </div>

        </div>

    </div>

</div>

)
}

        </AdminLayout>

    );

}

export default ScanHistory;