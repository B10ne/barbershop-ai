import {

    getStorage,
 
    setStorage
 
 } from "../utils/localStorage";
 
 // =========================
 // GET CACHE KEY
 // =========================
 
 const createCacheKey = (
 
    image,
 
    hairstyle
 
 ) => {
 
    return (
 
       image.slice(0, 80)
 
       +
 
       "-"
 
       +
 
       hairstyle.name
    );
 };
 
 // =========================
 // USE CACHE
 // =========================
 
 export default function
 useCache() {
 
    // =====================
    // GET TRYON CACHE
    // =====================
 
    const getTryOnCache =
    (
 
       image,
 
       hairstyle
 
    ) => {
 
       const cacheKey =
 
          createCacheKey(
 
             image,
 
             hairstyle
          );
 
       const cacheData =
          getStorage(
 
             "tryonCache",
 
             {}
          );
 
       return (
          cacheData[cacheKey]
       );
    };
 
    // =====================
    // SAVE TRYON CACHE
    // =====================
 
    const saveTryOnCache =
    (
 
       image,
 
       hairstyle,
 
       generatedImage
 
    ) => {
 
       const cacheKey =
 
          createCacheKey(
 
             image,
 
             hairstyle
          );
 
       const cacheData =
          getStorage(
 
             "tryonCache",
 
             {}
          );
 
       cacheData[cacheKey] =
 
          generatedImage;
 
       setStorage(
 
          "tryonCache",
 
          cacheData
       );
    };
 
    return {
 
       getTryOnCache,
 
       saveTryOnCache
    };
 }