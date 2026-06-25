import {

    useEffect,
 
    useState
 
 } from "react";
 
 import {
 
    getStorage,
 
    setStorage
 
 } from "../utils/localStorage";
 
 export default function
 useSavedLooks() {
 
    // =========================
    // STATES
    // =========================
 
    const [
 
       savedLooks,
 
       setSavedLooks
 
    ] = useState([]);
 
    // =========================
    // LOAD
    // =========================
 
    useEffect(() => {
 
       const storedLooks =
          getStorage(
 
             "savedLooks",
 
             []
          );
 
       setSavedLooks(
          storedLooks
       );
 
    }, []);
 
    // =========================
    // SAVE LOOK
    // =========================
 
    const saveLook =
    (
 
       lookData
 
    ) => {
 
       const updatedLooks = [
 
          lookData,
 
          ...savedLooks
       ];
 
       setSavedLooks(
          updatedLooks
       );
 
       setStorage(
 
          "savedLooks",
 
          updatedLooks
       );
    };
 
    // =========================
    // DELETE LOOK
    // =========================
 
    const deleteLook =
    (
 
       id
 
    ) => {
 
       const updatedLooks =
          savedLooks.filter(
 
             (look) =>
 
                look.id !== id
          );
 
       setSavedLooks(
          updatedLooks
       );
 
       setStorage(
 
          "savedLooks",
 
          updatedLooks
       );
    };
 
    // =========================
    // CLEAR ALL
    // =========================
 
    const clearLooks =
    () => {
 
       setSavedLooks([]);
 
       setStorage(
          "savedLooks",
          []
       );
    };
 
    return {
 
       savedLooks,
 
       saveLook,
 
       deleteLook,
 
       clearLooks
    };
 }