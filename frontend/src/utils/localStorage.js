export const getStorage = (

    key,
 
    fallback = null
 
 ) => {
 
    try {
 
       const value =
          localStorage.getItem(
             key
          );
 
       return value
 
          ?
 
          JSON.parse(value)
 
          :
 
          fallback;
 
    } catch {
 
       return fallback;
    }
 };
 
 // =========================
 // SET
 // =========================
 
 export const setStorage = (
 
    key,
 
    value
 
 ) => {
 
    localStorage.setItem(
 
       key,
 
       JSON.stringify(value)
    );
 };
 
 // =========================
 // REMOVE
 // =========================
 
 export const removeStorage = (
 
    key
 
 ) => {
 
    localStorage.removeItem(
       key
    );
 };
 
 // =========================
 // CLEAR
 // =========================
 
 export const clearStorage = (
 
    key
 
 ) => {
 
    localStorage.removeItem(
       key
    );
 };
 
 // =========================
 // PUSH ITEM
 // =========================
 
 export const pushStorageItem = (
 
    key,
 
    item
 
 ) => {
 
    const currentData =
 
       getStorage(
          key,
          []
       );
 
    const updatedData = [
 
       item,
 
       ...currentData
    ];
 
    setStorage(
 
       key,
 
       updatedData
    );
 
    return updatedData;
 };