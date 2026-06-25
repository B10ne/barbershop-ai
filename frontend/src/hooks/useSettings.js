import {

    clearStorage
 
 } from "../utils/localStorage";
 
 export default function
 useSettings() {
 
    // =========================
    // CLEAR SAVED LOOKS
    // =========================
 
    const clearSavedLooks =
    () => {
 
       clearStorage(
          "savedLooks"
       );
 
       window.location.reload();
    };
 
    // =========================
    // CLEAR HISTORY
    // =========================
 
    const clearHistory =
    () => {
 
       clearStorage(
          "history"
       );
 
       window.location.reload();
    };
 
    // =========================
    // RESET APP
    // =========================
 
    const resetApplication =
    () => {
 
       localStorage.clear();
 
       window.location.reload();
    };
 
    return {
 
       clearSavedLooks,
 
       clearHistory,
 
       resetApplication
    };
 }