import {

    useState
 
 } from "react";
 
 export default function
 useConsultation() {
 
    // =========================
    // STATES
    // =========================
 
    const [
 
       loading,
 
       setLoading
 
    ] = useState(false);
 
    const [
 
       consultation,
 
       setConsultation
 
    ] = useState(null);
 
    const [
 
       error,
 
       setError
 
    ] = useState("");
 
    // =========================
    // GENERATE CONSULTATION
    // =========================
 
    const generateConsultation =
    async (
 
       payload
 
    ) => {
 
       try {
 
          setLoading(true);
 
          setError("");
 
          // =====================
          // REQUEST
          // =====================
 
          const response =
             await fetch(
 
                "http://127.0.0.1:8000/consultation",
 
                {
 
                   method: "POST",
 
                   headers: {
 
                      "Content-Type":
                         "application/json"
                   },
 
                   body:
                      JSON.stringify({
 
                         face_shape:
                            payload.faceShape,
 
                         hairstyle:
                            payload.hairstyle,
 
                         preferences:
                            payload.preferences
                      })
                }
             );
 
          // =====================
          // FAILED
          // =====================
 
          if (!response.ok) {
 
             setError(
 
                "Failed to generate consultation."
             );
 
             return;
          }
 
          // =====================
          // SUCCESS
          // =====================
 
          const data =
             await response.json();
 
          setConsultation(data);
 
       } catch (err) {
 
          console.log(err);
 
          setError(
             "Server Error"
          );
 
       } finally {
 
          setLoading(false);
       }
    };
 
    // =========================
    // RETURN
    // =========================
 
    return {
 
       loading,
 
       consultation,
 
       error,
 
       generateConsultation
    };
 }