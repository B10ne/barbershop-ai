import {

    getStorage,
 
    setStorage
 
 } from "../utils/localStorage";
 
 // =========================
 // GET HISTORY
 // =========================
 
 export const getHistory =
 () => {
 
    return getStorage(
       "history",
       []
    );
 };
 
 // =========================
 // SAVE HISTORY
 // =========================
 
 export const saveHistory =
 (
 
    item
 
 ) => {
 
    const currentHistory =
       getStorage(
          "history",
          []
       );
 
    const updatedHistory = [
 
       item,
 
       ...currentHistory
    ];
 
    setStorage(
 
       "history",
 
       updatedHistory
    );
 
    return updatedHistory;
 };
 
 // =========================
 // CLEAR HISTORY
 // =========================
 
 export const clearHistory =
 () => {
 
    setStorage(
       "history",
       []
    );
 };